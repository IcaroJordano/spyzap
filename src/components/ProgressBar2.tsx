import { useState, useEffect } from "react";
import ChatPopup from "../components/ChatPopup";
import WhatsToast from "./WhatsToast";

interface Conversation {
  phone: string;
  message: string;
  time: string;
}

export default function ReportPage2() {
  const [popup, setPopup] = useState<string | null>(null);
  const [date, setDate] = useState("");

  const conversations: Conversation[] = [
    {
      phone: "+55 99 9XXXX-8392",
      message: "Mensagem apagada recuperada",
      time: "Ontem",
    },
    {
      phone: "+55 99 9XXXX-7381",
      message: "Áudio suspeito detectado",
      time: "3 dias",
    },
    {
      phone: "+55 99 9XXXX-0032",
      message: "Fotos suspeitas encontradas",
      time: "1 semana",
    },
  ];

  const keywords = [
    ["Gostoso", 13],
    ["Amor", 9],
    ["Segredo", 8],
    ["Escondido", 6],
    ["Não conta", 5],
  ];

  useEffect(() => {
    const days = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ];
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const now = new Date();
    setDate(
      `${days[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`,
    );
  }, []);

  // Função que redireciona para a VSL
  const goToVSL = () => {
    window.location.href = "/no-img/vsl";
  };

  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans">
      {/* HEADER */}
      <header className="text-center py-8 bg-gradient-to-r from-green-600 to-green-400 shadow-lg">
        <h1 className="text-2xl font-bold">Relatório de Acesso ao WhatsApp</h1>
        <p className="mt-2 text-sm">
          Confira abaixo os principais dados recuperados da análise do número
          informado.
        </p>
      </header>

      <main className="max-w-lg mx-auto p-4 space-y-6">
        {/* CONVERSAS */}
        <section className="glass-panel rounded-3xl p-6 space-y-4 bg-white/10 backdrop-blur-md">
          <h2 className="text-lg font-bold mb-2">Análise de Conversas</h2>
          <p className="text-sm mb-4">
            148 conversas suspeitas foram encontradas durante a análise. O
            sistema conseguiu recuperar mensagens apagadas e algumas foram
            classificadas como críticas com base no conteúdo.
            <br />
            Toque em uma conversa abaixo para visualizar os detalhes.
          </p>

          <div className="space-y-3">
            {conversations.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white/10 p-3 rounded-xl"
              >
                <div className="flex-1">
                  <p className="font-semibold">{c.phone}</p>
                  <p className="text-sm">{c.message}</p>
                </div>
                <span className="text-xs text-gray-300">{c.time}</span>
              </div>
            ))}
          </div>

          <p className="mt-2 text-sm">
            Conversas apagadas foram marcadas como <b>Suspeitas</b>.
          </p>
        </section>

        {/* FOTOS */}
        <div className="glass-panel rounded-3xl p-6 text-center bg-white/10 backdrop-blur-md">
          <p className="text-lg font-semibold mb-2">58 fotos apagadas.</p>
          <img
            src="https://detetiveonlinebr.com/spyzp/no-img/assets/img/mulher-fotos.jpeg"
            className="rounded-lg mx-auto"
          />
        </div>

        {/* AUDIOS */}
        <div className="glass-panel rounded-3xl p-6 text-center bg-white/10 backdrop-blur-md">
          <p className="text-lg font-semibold">
            4 áudios comprometedores encontrados...
          </p>
        </div>

        {/* PALAVRAS-CHAVE */}
        <div className="glass-panel rounded-3xl p-6 bg-white/10 backdrop-blur-md">
          <p>
            O sistema escaneou <b className="text-red-500">4.327 mensagens</b> e
            identificou várias palavras-chave que podem indicar comportamento
            suspeito.
          </p>

          <div className="mt-4 space-y-2">
            {keywords.map((k, i) => (
              <div
                key={i}
                className="flex justify-between bg-white/20 p-2 rounded"
              >
                <span>"{k[0]}"</span>
                <span className="font-bold">{k[1]}</span>
              </div>
            ))}
          </div>

          <button
            onClick={goToVSL}
            className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg font-bold"
          >
            VER TODAS AS MENSAGENS
          </button>
        </div>

        {/* LOCALIZAÇÃO */}
        <div className="glass-panel rounded-3xl p-6 bg-white/10 backdrop-blur-md">
          <p className="text-sm">
            <b className="text-red-500">2 Localizações Suspeitas</b> encontradas
            nos últimos 14 dias perto de Moteis, Casas de Massagem e Pontos de
            Prostituição
          </p>
        </div>

        {/* CTA WHATSAPP */}
        <div className="glass-panel rounded-3xl p-6 text-center bg-white/10 backdrop-blur-md">
          <p className="font-bold text-lg">WhatsApp Desbloqueado!</p>
          <p className="text-sm mb-4">
            Acesse as mensagens dele dentro do WhatsApp
          </p>
          <a
            href="/no-img/vsl"
            onClick={goToVSL}
            className="inline-block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition"
          >
            Acessar WhatsApp
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-400 mt-8 space-y-3">
        <p>Ferramenta Atualizada: Sexta-Feira, 13 de Março de 2026</p>
        <p>© 2024 Espião Invisível. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4">
          <a href="/no-img/vsl" onClick={goToVSL} className="hover:underline">
            Termos de Uso
          </a>
          <a href="/no-img/vsl" onClick={goToVSL} className="hover:underline">
            Política de Privacidade
          </a>
        </div>
      </footer>

      {popup && (
        <ChatPopup {...({ id: popup, close: () => setPopup(null) } as any)} />
      )}
      <WhatsToast />
    </div>
  );
}
