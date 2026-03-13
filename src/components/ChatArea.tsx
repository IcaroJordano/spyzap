import { useState } from "react";
import ContactInfoPanel from "./ContactInfoPanel";
import CallDetailsPanel from "./CallDetailsPanel";

export default function ChatArea() {
  const [panel, setPanel] = useState(null);

  return (
    <div className="flex flex-1 flex-col justify-end bg-[#0b141a] text-gray-200">
      {/* ÁREA DE MENSAGENS */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* DATA */}
        <div className="flex justify-center">
          <span className="bg-[#202c33] text-xs px-3 py-1 rounded-md text-gray-300">
            Última atualização
          </span>
        </div>

        {/* BOTÃO PAGAMENTO */}
        <div className="flex justify-center">
          <a
            href="https://payt.site/8oCl1RG"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm"
          >
            <b>Liberar acesso completo</b>
            <br />
            R$ 48,90
          </a>
        </div>

        {/* MENSAGEM RECEBIDA */}
        <div className="flex items-end gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold blur-sm">
            ?
          </div>

          <div className="flex flex-col">
            <div className="bg-[#202c33] px-4 py-2 rounded-lg max-w-xs relative">
              <p className="text-sm">Conteúdo Bloqueado 🔒</p>

              <button className="absolute right-1 top-1 text-gray-400 hover:text-white">
                ⋮
              </button>
            </div>

            <div className="text-xs text-gray-400 mt-1">
              Horário Bloqueado 🔒
            </div>
          </div>
        </div>

        {/* MENSAGEM ENVIADA */}
        <div className="flex items-end gap-2 justify-end">
          <div className="flex flex-col items-end">
            <div className="bg-[#005c4b] px-4 py-2 rounded-lg max-w-xs relative">
              <button className="absolute right-1 top-1 text-gray-300 hover:text-white">
                ⋮
              </button>

              <p className="text-sm">Conteúdo Bloqueado 🔒</p>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
              <span>Horário Bloqueado 🔒</span>

              <img src="images/tick-read.svg" className="w-4" alt="" />
            </div>
          </div>

          <img
            src="images/result.svg"
            className="w-8 h-8 rounded-full"
            alt=""
          />
        </div>

        {/* MENSAGEM RECEBIDA */}
        <div className="flex items-end gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold blur-sm">
            ?
          </div>

          <div className="flex flex-col">
            <div className="bg-[#202c33] px-4 py-2 rounded-lg max-w-xs relative">
              <p className="text-sm">Conteúdo Bloqueado 🔒</p>

              <button className="absolute right-1 top-1 text-gray-400 hover:text-white">
                ⋮
              </button>
            </div>

            <div className="text-xs text-gray-400 mt-1">
              Horário Bloqueado 🔒
            </div>
          </div>
        </div>

        {/* MENSAGEM ENVIADA */}
        <div className="flex items-end gap-2 justify-end">
          <div className="flex flex-col items-end">
            <div className="bg-[#005c4b] px-4 py-2 rounded-lg max-w-xs relative">
              <button className="absolute right-1 top-1 text-gray-300 hover:text-white">
                ⋮
              </button>

              <p className="text-sm">Conteúdo Bloqueado 🔒</p>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
              <span>Horário Bloqueado 🔒</span>

              <img src="images/tick-read.svg" className="w-4" alt="" />
            </div>
          </div>

          <img
            src="images/result.svg"
            className="w-8 h-8 rounded-full"
            alt=""
          />
        </div>

        {/* MENSAGEM RECEBIDA */}
        <div className="flex items-end gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold blur-sm">
            ?
          </div>

          <div className="flex flex-col">
            <div className="bg-[#202c33] px-4 py-2 rounded-lg max-w-xs relative">
              <p className="text-sm">Conteúdo Bloqueado 🔒</p>

              <button className="absolute right-1 top-1 text-gray-400 hover:text-white">
                ⋮
              </button>
            </div>

            <div className="text-xs text-gray-400 mt-1">
              Horário Bloqueado 🔒
            </div>
          </div>
        </div>

        {/* MENSAGEM ENVIADA */}
        <div className="flex items-end gap-2 justify-end">
          <div className="flex flex-col items-end">
            <div className="bg-[#005c4b] px-4 py-2 rounded-lg max-w-xs relative">
              <button className="absolute right-1 top-1 text-gray-300 hover:text-white">
                ⋮
              </button>

              <p className="text-sm">Conteúdo Bloqueado 🔒</p>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
              <span>Horário Bloqueado 🔒</span>

              <img src="images/tick-read.svg" className="w-4" alt="" />
            </div>
          </div>

          <img
            src="images/result.svg"
            className="w-8 h-8 rounded-full"
            alt=""
          />
        </div>
      </div>
      {/* FOOTER - COMPOSER */}
      <div className="w-full border-t border-[#202c33] bg-[#202c33] px-4 py-3">
        <div className="flex items-center gap-3">
          {/* LEFT */}
          <div className="flex items-center gap-2 text-gray-400">
            <button className="hover:text-white text-lg">😊</button>
            <button className="hover:text-white text-lg">🧩</button>
          </div>

          {/* INPUT */}
          <div className="flex-1 relative">
            <textarea
              rows={1}
              placeholder="Escreva sua mensagem"
              className="w-full resize-none rounded-lg bg-[#2a3942] text-sm text-gray-200 px-4 py-2 focus:outline-none"
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3 text-gray-400">
              <button className="hover:text-white">📎</button>
              <button className="hover:text-white">📷</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00a884] hover:bg-[#019874] text-white">
              ➤
            </button>

            <button className="text-gray-400 hover:text-white text-lg">
              🎤
            </button>
          </div>
        </div>
      </div>
      {/* PAINEL LATERAL */}
      {/* <ContactInfoPanel /> */}

      {panel === "calls" && (
        <CallDetailsPanel phone="+55 ********" onBack={() => setPanel(null)} />
      )}
    </div>
  );
}
