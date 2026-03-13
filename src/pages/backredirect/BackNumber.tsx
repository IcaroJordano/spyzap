import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BackRedirectPage() {
  const { number } = useParams();

  const messages = [
    "⚠️ Investigação sendo perdida!",
    "🔍 Processo interrompido!",
    "⏰ Conexão expirando!",
    "📱 Volte para finalizar!",
    "🚨 Dados sendo perdidos!",
  ];

  const [toasts, setToasts] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      setToasts((prev) => [...prev.slice(-2), msg]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  function voltarEspionagem() {
    setTimeout(() => {
      window.location.href = `/chat/${number}`;
    }, 1200);
  }

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-[#0d1421] via-[#1a252f] to-[#2d3748] text-white">
      <div className="max-w-lg w-full p-6 flex flex-col gap-5">
        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/assets/imgs/whatsapp.png" className="w-9" />
          <h1 className="text-2xl font-bold text-green-400">SpyZap</h1>
        </div>

        {/* ALERTA */}
        <div className="bg-red-600 rounded-xl p-6 text-center animate-pulse shadow-[0_0_25px_rgba(255,0,0,0.7)]">
          <div className="text-4xl mb-2">⚠️</div>

          <h2 className="text-lg font-bold tracking-wide">
            ESPIONAGEM INTERROMPIDA!
          </h2>

          <p className="text-sm opacity-90">
            Você saiu antes de completar a investigação
          </p>
        </div>

        {/* INFO BOXES */}

        <div className="flex flex-col gap-3">
          <div className="bg-white/10 border border-white/20 p-4 rounded-xl">
            <b>🔍 Investigação em Andamento</b>
            <p className="text-sm opacity-80">
              Sua varredura foi pausada e o processo está sendo interrompido
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 p-4 rounded-xl">
            <b>📱 Processo Incompleto</b>
            <p className="text-sm opacity-80">
              A análise estava em progresso e precisa ser finalizada
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 p-4 rounded-xl">
            <b>⏰ Tempo Limitado</b>
            <p className="text-sm opacity-80">
              A conexão será perdida permanentemente se você não voltar agora
            </p>
          </div>
        </div>

        {/* BLOCO URGENTE */}

        <div className="bg-orange-500 text-center rounded-xl p-5 shadow-[0_0_20px_rgba(255,140,0,0.7)]">
          <b>🚨 NÃO INTERROMPA O PROCESSO!</b>

          <p className="text-sm mt-2">
            A investigação estava em andamento e precisa ser finalizada. Volte
            agora para completar a análise antes que a conexão seja perdida!
          </p>
        </div>

        {/* BOTÃO */}

        <button
          onClick={voltarEspionagem}
          className="bg-green-500 hover:bg-green-600 rounded-xl p-4 font-bold shadow-[0_0_20px_rgba(0,255,150,0.7)] transition transform hover:scale-[1.02]"
        >
          🔍 VOLTAR E CONTINUAR INVESTIGAÇÃO
          <div className="text-xs opacity-80">Finalize o processo iniciado</div>
        </button>

        {/* ALERTA FINAL */}

        <div className="border border-red-500 rounded-xl p-4 text-sm text-orange-300">
          ⚡ <b>ATENÇÃO:</b> Se você fechar esta página, toda a investigação
          será perdida e você terá que começar do zero!
        </div>
      </div>

      {/* TOASTS */}

      <div className="fixed top-5 right-5 flex flex-col gap-2">
        {toasts.map((msg, i) => (
          <div
            key={i}
            className="bg-red-600 px-4 py-3 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.6)] animate-bounce"
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
