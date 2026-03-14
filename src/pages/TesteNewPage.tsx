import React, { useState } from "react";
import ScanModal from "../components/ScanModal";

export default function SpyZapLanding() {
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);

  function maskPhone(value: string): string {
    value = value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    return value;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const masked = maskPhone(e.target.value);
    setPhone(masked);
  }

  function extractDDD(phone: string) {
    const numbers = phone.replace(/\D/g, "");
    return numbers.slice(0, 2);
  }

  function startScan() {
    const ddd = extractDDD(phone);

    if (ddd) {
      localStorage.setItem("ddd", ddd);
    }

    setOpen(true);
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans flex flex-col">
      {/* HEADER */}
      <header className="py-6 flex justify-center">
        <div className="glass-panel rounded-2xl px-6 py-2">
          <span className="font-bold text-lg">SpyZap</span>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-md mx-auto px-5 text-center">
        <div className="inline-block glass-panel rounded-full px-4 py-1 text-xs font-bold mb-4">
          ACESSO LIBERADO
        </div>

        <h1 className="text-2xl font-bold mb-3">Monitoramento Total</h1>

        <ul className="text-sm space-y-1 mb-6">
          <li>Descubra as mensagens suspeitas</li>
          <li>Fotos questionáveis</li>
          <li>Localizações duvidosas</li>
        </ul>

        <div className="flex justify-center mb-8">
          <div className="glass-panel rounded-3xl p-4 w-56 h-36 flex items-center justify-center">
            <span className="text-xs opacity-60">Imagem ilustrativa</span>
          </div>
        </div>
      </section>

      {/* FORM CARD */}
      <section className="max-w-md mx-auto px-5 mb-6">
        <div className="glass-panel rounded-3xl p-6">
          <h2 className="text-sm font-semibold mb-4">
            Digite o número de quem deseja investigar
          </h2>

          <input
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            className="w-full rounded-xl p-3 text-black mb-4 outline-none"
          />

          <button
            onClick={startScan}
            className="w-full bg-gradient-to-r from-green-400 via-green-600 to-green-400 p-4 rounded-xl text-lg font-bold uppercase shadow-xl hover:scale-[1.02] transition"
          >
            Iniciar Varredura
          </button>
        </div>
      </section>

      {/* STATS CARD */}
      <section className="max-w-md mx-auto px-5 mb-12">
        <div className="glass-panel rounded-3xl p-6 text-center">
          <p className="text-3xl font-bold mb-2">95.166</p>

          <p className="text-sm opacity-80 mb-2">
            Números de WhatsApp Monitorados
          </p>

          <p className="text-xs opacity-50">
            Ferramenta Atualizada: Sexta-feira, 15 de agosto de 2025
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto px-6 pb-12 text-center">
        <p className="text-xs mb-6 opacity-70">
          ©2025 Spyzap - Todos os Direitos Reservados
        </p>

        <div className="max-w-md mx-auto text-[11px] space-y-4 opacity-60 leading-relaxed">
          <p>
            Esta plataforma tem finalidade exclusivamente informativa e é
            voltada para auxiliar pais, responsáveis legais e profissionais
            autorizados a entenderem ferramentas de monitoramento de
            dispositivos, sempre dentro dos limites da legislação vigente e com
            o devido consentimento.
          </p>

          <p>
            Este site não é parte do site do Google ou do Google Inc. Além
            disso, este site não é endossado pelo Google de nenhuma forma.
          </p>

          <p>
            Resultados podem variar de pessoa para pessoa. Nenhuma garantia de
            resultado é feita.
          </p>

          <p>
            O uso deste site implica na aceitação dos nossos
            <span className="underline ml-1 cursor-pointer">
              Termos de Uso
            </span>{" "}
            e
            <span className="underline ml-1 cursor-pointer">
              Política de Privacidade
            </span>
            .
          </p>
        </div>
      </footer>

      {/* MODAL */}
      {open && <ScanModal phone={phone} />}
    </div>
  );
}
