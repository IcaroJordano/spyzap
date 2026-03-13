import { useEffect, useState } from "react";
// import ProgressBar from "../components/ProgressBar";
// import AnalysisCard from "../components/AnalysisCard";
import ProgressBar2 from "../components/ProgressBar2";
import AnalysisCard from "../components/AnalysisCard";
import VSLPlayer from "../components/VSLPlayer";

type ReportNumbers = {
  mensagens: number;
  imagens: number;
  localizacoes: number;
};

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function AnalysisPage() {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const [numbers] = useState<ReportNumbers>({
    mensagens: getRandom(35, 99),
    imagens: getRandom(15, 25),
    localizacoes: getRandom(1, 2),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next >= 100) {
          clearInterval(timer);
          setShowButton(true);
          return 100;
        }

        return next;
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen min-h-screen bg-[url('https://detetiveonlinebr.com/spyzp/assets/imgs/bg.webp')] bg-cover bg-black text-white flex flex-col items-center ">
      {/* Header */}

      <header className="flex items-center gap-2 mb-6 justify-center bg-white w-full  p-4 ">
        <img src="/whatsapp.png" className="w-8" />
        <h1 className="text-green-400 text-2xl font-bold">WhatsApp</h1>
      </header>

      {/* VSL */}

      {/* <div className="bg-black rounded-xl p-4 w-full max-w-xl">
        <h2 className="text-xl font-bold text-center mb-2">
          ASSISTA O VIDEO ENQUANTO
        </h2>

        <p className="text-center text-gray-300 mb-4">
          o número é rastreado e as conversas são processadas
        </p>

        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
          VIDEO
        </div>
      </div> */}
      <VSLPlayer />

      {/* Progress */}

      <div className="mt-6 w-full max-w-xl">
        <ProgressBar2 progress={progress} />
      </div>

      {/* Cards */}

      <div className="mt-6 w-full max-w-xl space-y-4">
        <AnalysisCard
          title="Mensagens suspeitas"
          description="Mensagens apagadas contendo conteúdo sexual"
          icon="💬"
          result={`${numbers.mensagens} mensagens suspeitas`}
          show={progress >= 70}
        />

        <AnalysisCard
          title="Fotos suspeitas"
          description="Imagens detectadas como nude"
          icon="🖼️"
          result={`${numbers.imagens} imagens suspeitas`}
          show={progress >= 85}
        />

        <AnalysisCard
          title="Localizações suspeitas"
          description="Motel, casa de massagem ou prostituição"
          icon="📍"
          result={`${numbers.localizacoes} locais encontrados`}
          show={progress >= 90}
        />
      </div>

      {/* Botão */}

      {showButton && (
        <button
          onClick={() => (window.location.href = "/verificacao")}
          className="mt-8 bg-green-500 hover:bg-green-600 transition p-4 rounded-xl font-bold text-lg"
        >
          CONVERSAS SUSPEITAS ENCONTRADAS
        </button>
      )}
    </div>
  );
}
