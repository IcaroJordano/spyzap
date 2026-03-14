import { useEffect, useState } from "react";

export default function TrackerCard() {
  const [number, setNumber] = useState("");
  const [operator, setOperator] = useState("Detectando...");
  const [location, setLocation] = useState("Localizando...");

  useEffect(() => {
    const savedNumber = localStorage.getItem("phone");

    if (savedNumber) {
      setNumber(savedNumber);
    }

    setTimeout(() => {
      setOperator("Vivo / WhatsApp ativo");
    }, 2500);

    setTimeout(() => {
      setLocation("Brasil • atividade recente");
    }, 4000);
  }, []);

  return (
    <div className=" rounded-2xl shadow-md p-4 mt-6 space-y-3">
      <h3 className="font-bold text-lg text-center">Análise do número</h3>

      <div className="flex justify-between text-sm">
        <span className="font-semibold">Número</span>
        <span>{number || "Carregando..."}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="font-semibold">Operadora</span>
        <span className="text-green-600">{operator}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="font-semibold">Localização</span>
        <span>{location}</span>
      </div>

      <div className="flex items-center gap-2 mt-3 text-green-600 text-sm">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Analisando dados do dispositivo...
      </div>
    </div>
  );
}
