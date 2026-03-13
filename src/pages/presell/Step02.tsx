import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Activity = {
  id: string;
  label: string;
};

export default function Step02() {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const activities: Activity[] = [
    { id: "whatsapp", label: "WhatsApp e mensagens" },
    { id: "calls", label: "Chamadas" },
    { id: "location", label: "Localização GPS" },
  ];

  function toggle(id: string) {
    if (selected.includes(id)) {
      setSelected(selected.filter((a) => a !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  function goNext() {
    const params = new URLSearchParams(location.search);
    const device = params.get("device");

    navigate(
      `/pre/step-03?device=${device}&activities=${selected.join(",")}&${params.toString()}`,
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/imgs/bg.webp)" }}
    >
      <header className="flex items-center justify-center p-4 bg-white">
        <h2 className="text-green-500 text-2xl font-bold">SpyZap</h2>
      </header>

      <div className="max-w-xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <div className="bg-green-500 text-white px-6 py-2 rounded-full inline-block">
            2º PASSO
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-6">
          Quais atividades deseja monitorar?
        </h1>

        <div className="space-y-4">
          {activities.map((act) => (
            <div
              key={act.id}
              onClick={() => toggle(act.id)}
              className={`p-4 border rounded-lg cursor-pointer ${
                selected.includes(act.id) ? "bg-green-200 border-green-500" : ""
              }`}
            >
              {act.label}
            </div>
          ))}
        </div>

        <button
          disabled={!selected.length}
          onClick={goNext}
          className="mt-8 w-full bg-green-500 text-white py-4 rounded-xl font-bold disabled:opacity-40"
        >
          PRÓXIMO
        </button>
      </div>
    </div>
  );
}
