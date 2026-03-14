import { useEffect, useState } from "react";

export default function WhatsToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-green-600 text-white p-5 rounded-xl shadow-xl w-[320px] text-center z-50">
      <h3 className="font-bold text-lg">WhatsApp Desbloqueado!</h3>

      <p className="text-sm mt-1">
        Acesse as mensagens dela dentro do WhatsApp
      </p>

      <button
        className="bg-white text-green-600 mt-3 px-4 py-2 rounded-full font-bold"
        onClick={() => (window.location.href = "/no-img/vsl")}
      >
        Acessar WhatsApp
      </button>
    </div>
  );
}
