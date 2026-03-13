import { useState, useEffect } from "react";
import ConversationCard from "../components/ConversationCard";
import ChatPopup from "../components/ChatPopup";
import WhatsToast from "./WhatsToast";
import ConversationCard2 from "./ConversationCard2";

export default function ReportPage() {
  const [popup, setPopup] = useState<string | null>(null);
  const [ddd, setDDD] = useState("48");
  const [date, setDate] = useState("");

  useEffect(() => {
    const savedDDD = localStorage.getItem("ddd") || "48";
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
    <div className="bg-gray-100 min-h-screen font-[Poppins] bg-[url('https://detetiveonlinebr.com/spyzp/no-img/assets/img/bg.webp')] ">
      <header className=" text-center py-8 bg-green-500  text-white shadow">
        <h1 className="text-2xl font-bold">Relatório de Acesso ao WhatsApp</h1>

        <p className=" mt-2">
          Confira abaixo os principais dados recuperados da análise do número
          informado.
        </p>
      </header>

      <main className=" max-w-lg mx-auto p-4 space-y-6 ">
        <ConversationCard2 {...({ ddd, openPopup: setPopup } as any)} />

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-lg">
            <b>58</b> fotos apagadas
          </p>

          <img
            src="https://detetiveonlinebr.com/spyzp/no-img/assets/img/homem-fotos.jpeg"
            className="rounded-lg mt-4"
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-lg">
            <b>4 áudios</b> comprometedores encontrados...
          </p>
        </div>

        <a
          href="https://rdt.detetiveonlinebr.com/click/2"
          target="_blank"
          rel="noopener noreferrer"
          className="utm_tracker block w-full mt-2 mb-2 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md p-3 transition"
        >
          <span className="block font-extrabold text-sm">
            FINALIZE SEU CADASTRO
          </span>

          <span className="block text-xs opacity-90">
            E TENHA ACESSO TOTAL AO WHATSAPP
          </span>
        </a>

        <div className="bg-white p-6 rounded-xl shadow">
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

          <p className="my-8">
            <b
              className="text-red-500 bg-yellow-100 px-1 rounded2 Localização Suspeitas encontradas nos últimos 14 dias perto de Moteis, Casas de Massagem e Pontos de Prostituição

"
            >
              2 Localizações Suspeitas
            </b>{" "}
            encontradas nos últimos 14 dias perto de Moteis, Casas de Massagem e
            Pontos de Prostituição
          </p>

          <a
            href="https://rdt.detetiveonlinebr.com/click/2"
            target="_blank"
            rel="noopener noreferrer"
            className="utm_tracker block w-full mt-2 mb-2 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md p-3 transition"
          >
            <span className="block font-extrabold text-sm">
              FINALIZE SEU CADASTRO
            </span>

            <span className="block text-xs opacity-90">
              E TENHA ACESSO TOTAL AO WHATSAPP
            </span>
          </a>
        </div>
      </main>
      <footer className="text-center text-xs text-gray-500 mt-8 space-y-3">
        <div>
          <p className="font-medium text-gray-600">Ferramenta Atualizada:</p>
          <p>Quinta-Feira, 12 de Março de 2026</p>
        </div>

        <div className="text-gray-400">
          © 2024 Espião Invisível. Todos os direitos reservados.
        </div>

        <div className="flex justify-center gap-4 text-emerald-600">
          <a href="#" className="hover:underline">
            Termos de Uso
          </a>

          <a href="#" className="hover:underline">
            Política de Privacidade
          </a>
        </div>
      </footer>
      <footer className="text-center py-10 text-sm">
        <p>Ferramenta Atualizada:</p>
        <b>{date}</b>

        <p className="mt-4">© 2024 Espião Invisível</p>
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
