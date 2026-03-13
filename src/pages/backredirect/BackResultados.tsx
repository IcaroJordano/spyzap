import { useParams } from "react-router-dom";

export default function BackResultsPage() {
  const { number } = useParams();

  function comprar() {
    window.location.href = `/checkout/${number}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0c0c0c] to-[#1a1a1a] text-white flex justify-center">
      <div className="max-w-lg w-full p-6 flex flex-col gap-6">
        {/* ALERTA */}

        <div className="bg-red-700 p-6 rounded-xl text-center shadow-[0_0_25px_rgba(255,0,0,0.7)]">
          <div className="text-3xl mb-2">⚠️</div>

          <b>
            O NÚMERO VAI RECEBER UM ALERTA DIZENDO QUE VOCÊ ESTÁ MONITORANDO
            ELE!
          </b>
        </div>

        {/* MODAL ALERTA */}

        <div className="border border-red-500 rounded-xl p-6 text-center bg-black">
          <b className="text-red-400">🚨 ESPERE! VOCÊ VAI SER DESCOBERTO!</b>

          <p className="text-sm mt-2">
            Se você sair agora, vai usar a versão gratuita e correr o risco de
            ser descoberto!
          </p>

          <p className="text-sm mt-3">
            Última chance: desconto especial de 50% OFF
          </p>

          <p className="line-through text-red-400">De R$ 49,90</p>

          <p className="text-green-400 text-xl font-bold">
            Por apenas R$ 27,90
          </p>

          <button
            onClick={comprar}
            className="bg-red-600 mt-4 w-full p-3 rounded-lg font-bold"
          >
            SIM, QUERO FICAR ANÔNIMO
          </button>

          <button className="text-gray-400 text-sm mt-2">
            Não, vou arriscar ser descoberto
          </button>
        </div>

        {/* RESULTADOS */}

        <div className="border border-red-500 rounded-xl p-5">
          <h3 className="text-center text-red-400 mb-4">
            📊 RESULTADOS DA ANÁLISE COMPLETA
          </h3>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-black p-3 rounded">
              <div className="text-xl">💬</div>
              <b className="text-red-400">47</b>
              <p className="text-xs">Mensagens suspeitas</p>
            </div>

            <div className="bg-black p-3 rounded">
              <div className="text-xl">📷</div>
              <b className="text-red-400">23</b>
              <p className="text-xs">Fotos comprometedoras</p>
            </div>

            <div className="bg-black p-3 rounded">
              <div className="text-xl">📍</div>
              <b className="text-red-400">2</b>
              <p className="text-xs">Localizações suspeitas</p>
            </div>
          </div>
        </div>

        {/* OFERTA */}

        <div className="bg-green-800 rounded-xl p-6 text-center shadow-[0_0_20px_rgba(0,255,100,0.5)]">
          <b>🎯 OFERTA ESPECIAL PARA VOCÊ</b>

          <p className="text-sm mt-2">Desconto exclusivo por tempo limitado</p>

          <p className="line-through text-red-400">De R$ 79,00</p>

          <p className="text-3xl font-bold text-green-400">R$ 6,29</p>

          <button
            onClick={comprar}
            className="bg-green-500 w-full p-3 mt-4 rounded-lg font-bold"
          >
            🔒 SIM, QUERO MONITORAR SEM SER DESCOBERTO
          </button>
        </div>

        {/* BENEFÍCIOS */}

        <div className="bg-[#222] rounded-xl p-5">
          <h3 className="text-red-400 mb-4">
            🚨 SE VOCÊ QUER TER ACESSO A TODAS ESSAS EVIDÊNCIAS
          </h3>

          <ul className="text-sm space-y-2">
            <li>✅ Acesso completo ao WhatsApp sem alertas</li>

            <li>✅ Localização em tempo real</li>

            <li>✅ Fotos íntimas detectadas</li>

            <li>✅ Conversas deletadas recuperadas</li>

            <li>✅ TOTAL ANONIMATO</li>
          </ul>
        </div>

        {/* DECISÃO */}

        <div className="border border-red-500 rounded-xl p-4 text-center">
          ⚡ <b>A DECISÃO ESTÁ NAS SUAS MÃOS...</b>
          <p className="text-sm mt-2">
            Você pode continuar arriscando ser descoberto ou garantir total
            anonimato.
          </p>
        </div>

        {/* ÚLTIMA CHANCE */}

        <div className="bg-orange-500 rounded-xl p-6 text-center">
          <b>⏳ ÚLTIMA OPORTUNIDADE</b>

          <button
            onClick={comprar}
            className="bg-red-600 w-full p-4 mt-3 rounded-lg font-bold"
          >
            🔒 GARANTIR ANONIMATO TOTAL AGORA
          </button>
        </div>

        {/* RISCO */}

        <div className="bg-red-700 p-6 rounded-xl text-center">
          <b>🚨 RISCO DE SER DESCOBERTO</b>

          <p className="text-sm mt-2">
            “Alguém está tentando acessar suas conversas do WhatsApp”
          </p>
        </div>
      </div>
    </div>
  );
}
