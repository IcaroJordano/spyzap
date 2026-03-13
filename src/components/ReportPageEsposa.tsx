import { useState, useEffect } from "react";
import WhatsToast from "./WhatsToast";
import ChatPopup from "./ChatPopup";
// import ChatPopup from "../../../components/ChatPopup";
// import WhatsToast from "../../../components/WhatsToast";
// import ConversationCard2 from "../../../components/ConversationCard2";

export default function ReportPage2() {
  const [popup, setPopup] = useState<string | null>(null);
  const [ddd, setDDD] = useState("34");
  const [date, setDate] = useState("");

  useEffect(() => {
    const savedDDD = localStorage.getItem("ddd") || "34";
    setDDD(savedDDD);

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

    const formatted = `${days[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;

    setDate(formatted);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-[Poppins] bg-[url('https://detetiveonlinebr.com/spyzp/no-img/assets/img/bg.webp')]">
      {/* HEADER */}

      <header className="text-center py-8 bg-green-500 text-white shadow">
        <h1 className="text-2xl font-bold">Relatório de Acesso ao WhatsApp</h1>

        <p className="mt-2">
          Confira abaixo os principais dados recuperados da análise do número
          informado.
        </p>
      </header>

      <main className="max-w-lg mx-auto p-4 space-y-6">
        {/* CONVERSAS */}

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-3">Análise de Conversas</h2>

          <p className="text-sm text-gray-600 mb-4">
            <b>148 conversas suspeitas</b> foram encontradas durante a análise.
            O sistema conseguiu recuperar mensagens apagadas e algumas foram
            classificadas como críticas com base no conteúdo.
          </p>

          <p className="text-sm mb-4">
            Toque em uma conversa abaixo para visualizar os detalhes.
          </p>

          <div className="space-y-3">
            <div
              onClick={() => setPopup("1")}
              className="p-3 rounded-lg border cursor-pointer hover:bg-gray-100"
            >
              <p className="font-bold">+55 34 9XXXX-8392</p>
              <p className="text-sm text-red-500">
                Mensagem apagada recuperada
              </p>
              <p className="text-xs text-gray-500">Ontem</p>
            </div>

            <div
              onClick={() => setPopup("2")}
              className="p-3 rounded-lg border cursor-pointer hover:bg-gray-100"
            >
              <p className="font-bold">+55 34 9XXXX-7381</p>
              <p className="text-sm text-red-500">Áudio suspeito detectado</p>
              <p className="text-xs text-gray-500">3 dias</p>
            </div>

            <div
              onClick={() => setPopup("3")}
              className="p-3 rounded-lg border cursor-pointer hover:bg-gray-100"
            >
              <p className="font-bold">+55 34 9XXXX-0032</p>
              <p className="text-sm text-red-500">
                Fotos suspeitas encontradas
              </p>
              <p className="text-xs text-gray-500">1 semana</p>
            </div>
          </div>

          <p className="text-xs text-center mt-4 text-gray-500">
            <b>Conversas apagadas</b> foram marcadas como <b>Suspeitas</b>.
          </p>
        </div>

        {/* FOTOS */}

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-lg">
            <b>58</b> fotos apagadas.
          </p>

          <img
            src="https://detetiveonlinebr.com/spyzp/no-img/assets/img/mulher-fotos.jpeg"
            className="rounded-lg mt-4"
          />
        </div>

        {/* ÁUDIOS */}

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-lg">
            <b>4 áudios</b> comprometedores encontrados...
          </p>
        </div>

        {/* PALAVRAS SUSPEITAS */}

        <div className="bg-white p-6 rounded-xl shadow">
          <p>
            O sistema escaneou <b className="text-red-500">4.327 mensagens</b> e
            identificou várias palavras-chave que podem indicar comportamento
            suspeito.
          </p>

          <div className="mt-4 space-y-2">
            {[
              ["Gostoso", 13],
              ["Amor", 9],
              ["Segredo", 8],
              ["Escondido", 6],
              ["Não conta", 5],
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between bg-gray-100 p-2 rounded"
              >
                <span>"{item[0]}"</span>
                <span className="font-bold">{item[1]}</span>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg font-bold">
            VER TODAS AS MENSAGENS
          </button>
        </div>

        {/* LOCALIZAÇÃO */}

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-red-500 font-bold">2 Localizações Suspeitas</p>

          <p className="text-sm mt-2">
            encontradas nos últimos 14 dias perto de Moteis, Casas de Massagem e
            Pontos de Prostituição
          </p>
        </div>

        {/* CTA */}

        <div className="bg-green-500 text-white p-6 rounded-xl text-center shadow">
          <h3 className="text-lg font-bold mb-2">WhatsApp Desbloqueado!</h3>

          <p className="text-sm mb-4">
            Acesse as mensagens dela dentro do WhatsApp
          </p>

          <button className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg">
            Acessar WhatsApp
          </button>
        </div>
      </main>

      {/* FOOTER */}

      <footer className="text-center text-xs text-gray-500 mt-8 space-y-3">
        <div>
          <p className="font-medium text-gray-600">Ferramenta Atualizada:</p>
          <p>{date}</p>
        </div>

        <div className="text-gray-400">
          © 2024 Espião Invisível. Todos os direitos reservados.
        </div>

        <div className="flex justify-center gap-4 text-emerald-600">
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
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
