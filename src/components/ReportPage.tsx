import { useState, useEffect } from "react";
import ChatPopup from "../components/ChatPopup";
import WhatsToast from "./WhatsToast";
import ConversationCard2 from "./ConversationCard2";

export default function ReportPage2() {
  const [popup, setPopup] = useState<string | null>(null);
  const [ddd, setDDD] = useState("48");

  useEffect(() => {
    const savedDDD = localStorage.getItem("ddd") || "48";
    setDDD(savedDDD);
  }, []);

  // função que redireciona para VSL
  // função que redireciona para VSL
  const goToVSL = () => {
    window.location.href = "/no-img/vsl"; // <-- alterado aqui
  };

  return (
    <div className="bg-[#0f172a] min-h-screen font-sans text-white">
      {/* HEADER */}
      <header className="text-center py-8 bg-gradient-to-r from-green-600 to-green-400 shadow-lg">
        <h1 className="text-2xl font-bold">Relatório de Acesso ao WhatsApp</h1>
        <p className="mt-2 text-sm">
          Confira abaixo os principais dados recuperados da análise do número
          informado.
        </p>
      </header>

      <main className="max-w-lg mx-auto p-4 space-y-6">
        {/* Conversas */}
        <section className="glass-panel rounded-3xl p-6 bg-white/10 backdrop-blur-md">
          <ConversationCard2 {...({ ddd, openPopup: setPopup } as any)} />
        </section>

        {/* FOTOS */}
        <div className="glass-panel rounded-3xl p-6 bg-white/10 backdrop-blur-md text-center">
          <p className="text-lg font-semibold mb-2">
            <b>58</b> fotos apagadas
          </p>
          <img
            src="https://detetiveonlinebr.com/spyzp/no-img/assets/img/homem-fotos.jpeg"
            className="rounded-lg mx-auto"
          />
        </div>

        {/* AUDIOS */}
        <div className="glass-panel rounded-3xl p-6 bg-white/10 backdrop-blur-md text-center">
          <p className="text-lg font-semibold">
            <b>4 áudios</b> comprometedores encontrados...
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={goToVSL}
          className="block w-full text-center bg-green-500 hover:bg-green-600 rounded-xl shadow-lg py-3 font-bold transition"
        >
          <span className="block font-extrabold text-sm">
            FINALIZE SEU CADASTRO
          </span>
          <span className="block text-xs opacity-90">
            E TENHA ACESSO TOTAL AO WHATSAPP
          </span>
        </button>

        {/* MENSAGENS E PALAVRAS-CHAVE */}
        <div className="glass-panel rounded-3xl p-6 bg-white/10 backdrop-blur-md">
          <p>
            O sistema escaneou <b className="text-red-500">4.327 mensagens</b> e
            identificou várias palavras-chave que podem indicar comportamento
            suspeito.
          </p>

          <div className="mt-4 space-y-2">
            {[
              ["Gostosa", 13],
              ["Amor", 9],
              ["Segredo", 8],
              ["Escondido", 6],
              ["Não conta", 5],
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between bg-white/20 p-2 rounded"
              >
                <span>"{item[0]}"</span>
                <span className="font-bold">{item[1]}</span>
              </div>
            ))}
          </div>

          <button
            onClick={goToVSL}
            className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg font-bold"
          >
            VER TODAS AS MENSAGENS
          </button>

          <p className="my-6 text-sm">
            <b className="text-red-500">2 Localizações Suspeitas</b> encontradas
            nos últimos 14 dias perto de Moteis, Casas de Massagem e Pontos de
            Prostituição
          </p>

          <button
            onClick={goToVSL}
            className="block w-full text-center bg-green-500 hover:bg-green-600 rounded-xl shadow-lg py-3 font-bold transition"
          >
            FINALIZE SEU CADASTRO
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-400 mt-8 space-y-3">
        <p>Ferramenta Atualizada: Sexta-Feira, 13 de Março de 2026</p>
        <p>© 2024 Espião Invisível. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4">
          <button onClick={goToVSL} className="hover:underline">
            Termos de Uso
          </button>
          <button onClick={goToVSL} className="hover:underline">
            Política de Privacidade
          </button>
        </div>
      </footer>

      {popup && (
        <ChatPopup
          {...({ id: popup, close: () => setPopup(null), ddd } as any)}
        />
      )}
      <WhatsToast />
    </div>
  );
}
