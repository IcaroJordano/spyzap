type ConversationCardProps = {
  ddd: string | number;
  openPopup: (id: number) => void;
};

export default function ConversationCard2({
  ddd,
  openPopup,
}: ConversationCardProps) {
  const contacts = [
    {
      id: 1,
      text: "Mensagem apagada recuperada",
      time: "Ontem",
      img: "https://detetiveonlinebr.com/spyzp/no-img/marido/imgs/pm01.jpg",
    },
    {
      id: 2,
      text: "Áudio suspeito detectado",
      time: "3 dias",
      img: "https://detetiveonlinebr.com/spyzp/no-img/marido/imgs/pm02.jpg",
    },
    {
      id: 3,
      text: "Fotos suspeitas encontradas",
      time: "1 semana",
      img: "https://detetiveonlinebr.com/spyzp/no-img/marido/imgs/pm03.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-3 mb-4 mx-auto justify-center">
        <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 rounded-lg">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-emerald-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </div>

        <h2 className="text-lg font-semibold text-emerald-700">
          Análise de Conversas
        </h2>
      </div>

      <p className="mt-2 text-gray-600">
        <b className="text-red-500">148 conversas suspeitas</b> foram
        encontradas durante a análise. O sistema conseguiu recuperar{" "}
        <b className="text-yellow-400">mensagens apagadas</b> e algumas foram
        classificadas como <b className="text-red-500">críticas</b> com base no
        conteúdo.
      </p>
      <p className="my-10 text-gray-600 ">
        Toque em uma conversa abaixo para visualizar os detalhes.
      </p>
      <div className="mt-6 space-y-4">
        {contacts.map((c) => (
          <button
            key={c.id}
            onClick={() => openPopup(c.id)}
            className="flex items-center border-gray-200 border py-4 justify-between w-full hover:bg-gray-100 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <img src={c.img} className="w-14 h-14 rounded-full" />

              <div className="text-left">
                <div className="font-semibold">+55 {ddd} 9XXXX</div>

                <div className="text-sm text-gray-500 max-w-[200px]">
                  {c.text}
                </div>
              </div>
            </div>

            <span className="text-sm text-gray-400">{c.time}</span>
          </button>
        ))}
      </div>
      <img
        src="https://detetiveonlinebr.com/spyzp/no-img/assets/img/fundocheck.png"
        alt=""
      />
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

      <p className="text-center">
        <b> conversas apagadas</b> foram marcadas como <b>Suspeitas</b>.
      </p>

      <img
        src="https://detetiveonlinebr.com/spyzp/no-img/assets/img/etapafinal002.png"
        alt=""
      />
    </div>
  );
}
