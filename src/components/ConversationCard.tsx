import { useState } from "react";
import ChatPopup from "./ChatPopup";

type Contact = {
  id: number;
  name: string;
  text: string;
  time: string;
  img: string;
};

export default function ConversationCard() {
  const [openChat, setOpenChat] = useState<Contact | null>(null);

  const contacts: Contact[] = [
    {
      id: 1,
      name: "+55 48 9XXXX-8392",
      text: "Mensagem apagada recuperada",
      time: "Ontem",
      img: "/imgs/ph01.jpg",
    },
    {
      id: 2,
      name: "+55 48 9XXXX-7381",
      text: "Áudio suspeito detectado",
      time: "3 dias",
      img: "/imgs/ph02.jpg",
    },
    {
      id: 3,
      name: "+55 48 9XXXX-0032",
      text: "Fotos suspeitas encontradas",
      time: "1 semana",
      img: "/imgs/ph03.jpg",
    },
  ];

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-bold text-lg mb-3">Análise de Conversas</h2>

        <p className="text-sm text-gray-600 mb-6">
          <span className="text-red-500 font-semibold">
            148 conversas suspeitas
          </span>{" "}
          foram encontradas durante a análise.
        </p>

        <div className="space-y-3">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setOpenChat(contact)}
              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <img src={contact.img} className="w-10 h-10 rounded-full" />

                <div className="text-left">
                  <p className="font-semibold text-sm">{contact.name}</p>

                  <p className="text-xs text-gray-500">{contact.text}</p>
                </div>
              </div>

              <span className="text-xs text-gray-400">{contact.time}</span>
            </button>
          ))}
        </div>
      </div>

      {openChat && (
        <ChatPopup contact={openChat} close={() => setOpenChat(null)} />
      )}
    </>
  );
}
