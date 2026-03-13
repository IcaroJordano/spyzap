type Contact = {
  img: string;
  name: string;
};

type ChatPopupProps = {
  contact: Contact;
  close: () => void;
};

export default function ChatPopup({ contact, close }: ChatPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[350px] max-h-[80vh] overflow-hidden">
        <div className="bg-green-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={contact.img} className="w-8 h-8 rounded-full" />

            <span>{contact.name}</span>
          </div>

          <button onClick={close}>✕</button>
        </div>

        <div className="p-4 space-y-3 text-sm">
          <div className="bg-gray-200 p-2 rounded-lg w-fit">Oi, tudo bem?</div>

          <div className="bg-green-200 p-2 rounded-lg ml-auto w-fit">
            Tudo sim e você?
          </div>

          <div className="bg-red-200 p-2 rounded-lg w-fit">
            Conteúdo bloqueado
          </div>
        </div>

        <div className="p-4 text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full">
            DESBLOQUEAR CONVERSAS COMPLETAS
          </button>
        </div>
      </div>
    </div>
  );
}
