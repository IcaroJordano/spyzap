import { useEffect, useState } from "react";

export default function WhatsappToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-green-500 text-white p-5 rounded-xl shadow-xl w-[320px] text-center">
      <p className="font-bold text-lg">WhatsApp Desbloqueado!</p>

      <p className="text-sm mb-3">
        Acesse as mensagens dele dentro do WhatsApp
      </p>

      <button className="bg-white text-green-600 px-4 py-2 rounded-full font-bold">
        Acessar WhatsApp
      </button>
    </div>
  );
}
