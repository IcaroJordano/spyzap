import { useState, type ChangeEvent } from "react";
import { extractDDD } from "../hooks/useDDD";
import ScanModal from "./ScanModal";

export default function ScanForm() {
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);

  function maskPhone(value: string): string {
    value = value.replace(/\D/g, ""); // remove tudo que não é número

    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    return value;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const masked = maskPhone(e.target.value);
    setPhone(masked);
  }

  function startScan() {
    const ddd = extractDDD(phone);

    if (ddd) {
      localStorage.setItem("ddd", ddd);
    }

    setOpen(true);
  }

  return (
    <>
      <div className="bg-black text-white p-6 rounded-3xl flex flex-col gap-4 w-[95%] max-w-[440px] mx-auto my-8">
        <label className="text-2xl font-bold">
          Digite o número de quem deseja investigar
        </label>

        <input
          value={phone}
          onChange={handleChange}
          placeholder="(99) 99999-9999"
          className="p-3 rounded-md text-black"
        />

        <button
          onClick={startScan}
          className="bg-gradient-to-r from-green-400 via-green-600 to-green-400 p-5 rounded-xl text-xl font-bold uppercase shadow-xl hover:scale-[1.02] transition"
        >
          Iniciar Varredura
        </button>
      </div>

      {open && <ScanModal phone={phone} />}
    </>
  );
}
