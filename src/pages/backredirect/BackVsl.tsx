import { useEffect, useState } from "react";

export default function BackVSLPage() {
  const [toasts, setToasts] = useState<string[]>([]);

  const toastMessages = [
    "🚨 Maria de São Paulo foi descoberta usando a versão gratuita!",
    "⚠️ João do Rio de Janeiro recebeu alerta de monitoramento!",
    "🔒 Ana de Belo Horizonte garantiu anonimato com versão paga!",
    "💥 Carlos de Salvador foi flagrado investigando!",
    "🎯 Fernanda de Brasília evitou ser descoberta!",
  ];

  function showToast(msg: string) {
    setToasts((prev) => [...prev.slice(-2), msg]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 5000);
  }

  useEffect(() => {
    setTimeout(() => {
      showToast("🚨 CUIDADO: Versão gratuita pode alertar o número!");
    }, 4000);

    const interval = setInterval(() => {
      const random =
        toastMessages[Math.floor(Math.random() * toastMessages.length)];
      showToast(random);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  function redirectCheckout() {
    window.location.href =
      "https://checkout.payt.com.br/475529bd4946b904f22238e480559124";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white flex justify-center">
      <div className="w-full max-w-xl p-4 space-y-6">
        {/* HEADER */}

        <header className="flex items-center justify-center bg-white py-3 rounded-lg shadow">
          <img src="/assets/imgs/whatsapp.png" className="h-7" />
          <h2 className="ml-2 font-bold text-green-500 text-xl">WhatsApp</h2>
        </header>

        {/* ALERTA PRINCIPAL */}

        <div className="bg-red-600 rounded-2xl p-6 text-center shadow-lg border-2 border-red-400 animate-pulse">
          <div className="text-5xl mb-3">⚠️</div>

          <h1 className="font-extrabold text-lg leading-snug">
            O NÚMERO VAI RECEBER UM ALERTA DIZENDO QUE VOCÊ ESTÁ MONITORANDO
            ELE!
          </h1>

          <div className="bg-orange-500 inline-block px-4 py-2 rounded-full mt-4 font-bold">
            ⚠️ CUIDADO ⚠️
          </div>
        </div>

        {/* MENSAGEM */}

        <div className="border-2 border-red-500 rounded-xl p-6 bg-[#1a1a1a]">
          <p className="mb-4 font-semibold">
            Na versão gratuita o número que você está investigando pode receber
            uma notificação falando que você está investigando ele.
          </p>

          <p className="mb-4 font-semibold">
            Não deixe isso acontecer. Assine a versão paga do aplicativo e não
            deixe que o número receba uma notificação falando que você tentou
            monitorar ele.
          </p>

          <p className="bg-green-500/10 border-l-4 border-green-500 p-3 rounded mb-4">
            Continue monitorando e vendo todo conteúdo sem que ela seja
            notificada.
          </p>

          <p className="text-orange-400 font-bold text-center border border-orange-400 p-3 rounded">
            Veja conversas, mensagens, prints, fotos apagadas e localização!
          </p>
        </div>

        {/* RESULTADOS */}

        <div className="border border-red-500 rounded-xl p-6 bg-black">
          <h2 className="text-red-500 font-bold text-center mb-4">
            📊 RESULTADOS DA ANÁLISE COMPLETA
          </h2>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#222] p-4 rounded text-center border border-red-500">
              <div className="text-2xl">💬</div>
              <p className="text-red-400 font-bold text-xl">47</p>
              <p className="text-xs">Mensagens suspeitas</p>
            </div>

            <div className="bg-[#222] p-4 rounded text-center border border-red-500">
              <div className="text-2xl">📸</div>
              <p className="text-red-400 font-bold text-xl">23</p>
              <p className="text-xs">Fotos comprometedoras</p>
            </div>

            <div className="bg-[#222] p-4 rounded text-center border border-red-500">
              <div className="text-2xl">📍</div>
              <p className="text-red-400 font-bold text-xl">2</p>
              <p className="text-xs">Localizações suspeitas</p>
            </div>
          </div>
        </div>

        {/* OFERTA */}

        <div className="bg-green-800 border-2 border-green-400 rounded-2xl p-6 text-center shadow-lg">
          <h2 className="font-bold text-green-400 text-lg">
            🎯 OFERTA ESPECIAL PARA VOCÊ
          </h2>

          <p className="text-sm opacity-80 mb-4">
            Desconto exclusivo por tempo limitado
          </p>

          <p className="line-through text-red-400">De R$ 79,00</p>

          <p className="text-4xl font-extrabold text-green-400">R$ 6,29</p>

          <p className="text-sm text-green-200 mb-4">ou R$ 49,00 à vista</p>

          <button
            onClick={redirectCheckout}
            className="bg-green-500 hover:bg-green-600 transition w-full p-4 rounded-xl font-bold shadow-lg"
          >
            🔒 SIM, QUERO MONITORAR SEM SER DESCOBERTO
          </button>

          <div className="flex items-center justify-center mt-4 text-sm opacity-80">
            🛡️ Garantia de 7 dias
          </div>
        </div>

        {/* BENEFÍCIOS */}

        <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
          <h3 className="text-red-400 font-bold mb-4">
            🚨 ACESSE TODAS ESSAS EVIDÊNCIAS
          </h3>

          <ul className="space-y-3 text-sm">
            <li>✅ Acesso completo ao WhatsApp sem alertas</li>
            <li>✅ Localização em tempo real</li>
            <li>✅ Fotos íntimas detectadas</li>
            <li>✅ Conversas deletadas recuperadas</li>
            <li>✅ TOTAL ANONIMATO</li>
          </ul>
        </div>

        {/* DECISÃO */}

        <div className="border border-red-500 rounded-xl p-6 text-center">
          <h3 className="text-red-400 font-bold mb-2">
            ⚡ A DECISÃO ESTÁ NAS SUAS MÃOS
          </h3>

          <p className="text-sm">
            Você pode continuar arriscando ser descoberto ou garantir anonimato.
          </p>
        </div>

        {/* CTA FINAL */}

        <div className="bg-orange-500 p-6 rounded-xl text-center">
          <h3 className="font-bold mb-3">🚨 ÚLTIMA OPORTUNIDADE</h3>

          <button
            onClick={redirectCheckout}
            className="bg-red-600 hover:bg-red-700 w-full p-4 rounded-xl font-bold"
          >
            🛡️ GARANTIR ANONIMATO TOTAL AGORA
          </button>
        </div>

        {/* RISCO */}

        <div className="bg-red-700 rounded-xl p-6 text-center border-2 border-red-400">
          <h4 className="font-bold mb-3">🚨 RISCO DE SER DESCOBERTO</h4>

          <p className="italic bg-black/40 p-3 rounded">
            "Alguém está tentando acessar suas conversas do WhatsApp"
          </p>
        </div>
      </div>

      {/* TOASTS */}

      <div className="fixed top-5 right-5 space-y-2">
        {toasts.map((t, i) => (
          <div
            key={i}
            className="bg-red-600 px-4 py-3 rounded shadow-lg text-sm max-w-xs"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
