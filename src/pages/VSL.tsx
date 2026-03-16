import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header2";
import ResultCards from "../components/ResultCards";
import TrackerCard from "../components/TrackerCard";
import VSLPlayer from "../components/VSLPlayer";

export default function VSL() {
  const location = useLocation();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const duration = 10000; // duração total do progresso em ms
  const intervalTime = 100; // atualização do progresso a cada 100ms

  // Identifica se está na rota /no-img
  const isNoImgRoute = location.pathname.startsWith("/no-img");

  // Define a URL da imagem de perfil
  const profileImage = isNoImgRoute
    ? "https://placehold.co/120"
    : "https://detetiveonlinebr.com/spyzp/no-img/marido/imgs/pm01.jpg";

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage === 100) {
        clearInterval(interval);
        // Redireciona após completar
        if (isNoImgRoute) {
          navigate("/no-img/verificacao");
        } else {
          navigate("/whatsapp");
        }
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isNoImgRoute, navigate]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <Header />

      <div className="px-6 md:px-48 mx-auto p-4 text-center max-w-3xl">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">
            ANÁLISE EM TEMPO REAL
          </div>

          <img
            id="profileImage"
            className="w-28 h-28 rounded-full border-4 border-black mt-3"
            src={profileImage}
            alt="Profile"
          />
        </div>

        <div className="bg-white/5  border border-white/10 backdrop-blur-md bg-opacity-70 rounded-lg overflow-hidden mb-6">
          <VSLPlayer />
        </div>

        <div className="bg-white/5  border border-white/10 backdrop-blur-md bg-opacity-70 rounded-3xl p-6 mb-6">
          <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden border border-gray-600">
            <div
              className="h-6 bg-green-500 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-green-400 mt-2 font-semibold">
            {progress < 100
              ? `Iniciando análise... ${Math.floor(progress)}%`
              : "Análise concluída!"}
          </p>
        </div>

        <TrackerCard />

        <ResultCards />
      </div>
    </div>
  );
}
