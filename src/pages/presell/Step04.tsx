import type { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Step04(): ReactElement {
  const navigate = useNavigate();
  const location = useLocation();

  function goToVSL(): void {
    const query = location.search ?? "";
    navigate("/vsl" + query);
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/assets/imgs/bg.webp)" }}
    >
      <div className="bg-white max-w-xl w-full mx-4 p-8 rounded-2xl shadow-xl text-center">
        <div className="bg-green-500 text-white px-6 py-2 rounded-full inline-block mb-6 font-bold">
          VERIFICAÇÃO FINAL
        </div>

        <h1 className="text-2xl font-bold mb-4">
          Preparando acesso ao monitoramento
        </h1>

        <p className="text-gray-600 mb-6">
          Nosso sistema está finalizando a conexão com o dispositivo
          selecionado. Clique abaixo para continuar.
        </p>

        <button
          onClick={goToVSL}
          className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition"
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}
