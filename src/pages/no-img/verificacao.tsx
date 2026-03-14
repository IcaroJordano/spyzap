import React, { useEffect, useState } from "react";

export default function Verificacao(): React.ReactElement {
  const [selected, setSelected] = useState<string | null>(null);
  const [showContinue, setShowContinue] = useState(false);

  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function selectOption(option: string) {
    setSelected(option);
    setShowContinue(true);
  }

  function continuar() {
    if (!selected) return;

    localStorage.setItem("spyzap_target_gender", selected);

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  }

  useEffect(() => {
    const saved = localStorage.getItem("spyzap_target_gender");
    if (saved) {
      setTimeout(() => {
        setSelected(saved);
        setShowContinue(true);
      }, 800);
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "1") selectOption("parceiro");
      if (e.key === "2") selectOption("parceira");
      if (e.key === "Enter" && selected) continuar();
    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <div className="min-h-screen bg-[#e8e0d4] flex items-center justify-center p-5">
      <div className="max-w-[480px] w-full">
        <div className="bg-white rounded-[20px] p-10 shadow-xl text-center animate-[fadeInUp_0.6s_ease-out]">
          <h1 className="text-[22px] font-bold text-[#2c2c2c] leading-tight mb-8">
            Para conseguirmos
            <br />
            concluir a <span className="font-black">VERIFICAÇÃO</span>
            <br />
            de espionagem
            <br />
            <span className="font-black">COMPLETA</span> responda:
          </h1>

          <h2 className="text-[22px] font-semibold text-red-500 mb-10">
            Ele(a) é seu/sua:
          </h2>

          <div className="flex justify-center gap-6 mb-10">
            {/* Parceiro */}
            <div
              onClick={() => selectOption("parceiro")}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300
              ${
                selected === "parceiro"
                  ? "scale-105 shadow-lg"
                  : "hover:-translate-y-1"
              }`}
            >
              <div className="w-[140px] h-[200px] rounded-lg overflow-hidden shadow-md mb-4">
                <img
                  src="https://detetiveonlinebr.com/spyzp/no-img/assets/imgs/homem-novo.png"
                  className="w-full h-full object-cover"
                />
              </div>

              <a
                href="/no-img/marido"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold underline min-w-[140px]"
              >
                Parceiro
              </a>
            </div>

            {/* Parceira */}
            <div
              onClick={() => selectOption("parceira")}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300
              ${
                selected === "parceira"
                  ? "scale-105 shadow-lg"
                  : "hover:-translate-y-1"
              }`}
            >
              <div className="w-[140px] h-[200px] rounded-lg overflow-hidden shadow-md mb-4">
                <img
                  src="https://detetiveonlinebr.com/spyzp/no-img/assets/imgs/mulher-nova.png"
                  className="w-full h-full object-cover"
                />
              </div>

              <a
                href="/no-img/esposa"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold underline min-w-[140px]"
              >
                Parceira
              </a>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-gray-200">
            <p className="text-sm text-gray-500">Ferramenta Atualizada:</p>
            <p className="font-semibold text-gray-800 capitalize">
              {currentDate}
            </p>
          </div>

          <div className="mt-8 bg-gray-50 border-l-4 border-green-600 p-5 rounded-lg text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Por que solicitamos essa verificação?
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Essa verificação é feita para que o monitoramento seja executado
              de forma perfeita e sem erros, garantindo resultados mais eficazes
              e sem falsos positivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
