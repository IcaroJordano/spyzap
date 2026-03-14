import React from "react";

export default function VersaoWhite() {
  return (
    <div className="text-slate-900 min-h-screen pb-40 bg-[#f1f5f9] overflow-x-hidden relative">
      {/* BACKGROUND ORBS */}
      <div className="liquid-orb orb-1"></div>
      <div className="liquid-orb orb-2"></div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 px-6 pt-12 pb-6 glass-panel rounded-b-3xl">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Relatório de Acesso ao WhatsApp
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-medium">
            Confira abaixo os principais dados recuperados da análise do número
            informado.
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-md mx-auto px-5 py-6 space-y-5">
        {/* CARD CONVERSAS */}
        <section className="glass-panel rounded-3xl p-5 relative overflow-hidden">
          <div className="ios-card-highlight"></div>

          <div className="flex items-start justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-800">
              <span className="text-[#25D366]">148</span> conversas suspeitas
              encontradas
            </h2>

            <div className="bg-[#25D366]/15 p-2 rounded-xl backdrop-blur-sm">
              <svg
                className="h-5 w-5 text-[#25D366]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                phone: "+55 34 9XXXX-8392",
                msg: "Mensagem apagada recuperada",
                color: "text-red-500",
                time: "Ontem",
              },
              {
                phone: "+55 34 9XXXX-7381",
                msg: "Áudio suspeito detectado",
                color: "text-orange-600",
                time: "3 dias",
              },
              {
                phone: "+55 34 9XXXX-0032",
                msg: "Fotos suspeitas encontradas",
                color: "text-[#25D366]",
                time: "1 semana",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-2 border-b border-white/30 last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-xs font-bold text-slate-500 backdrop-blur-md">
                  #{i + 1}
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    {item.phone}
                  </p>
                  <p className={`text-xs font-medium ${item.color}`}>
                    {item.msg}
                  </p>
                </div>

                <span className="text-[10px] text-slate-400 font-medium">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4">
          {/* FOTOS */}
          <section className="glass-panel rounded-3xl p-4 flex flex-col items-center text-center relative overflow-hidden">
            <div className="ios-card-highlight"></div>

            <div className="relative w-16 h-16 mb-3">
              <img
                className="rounded-xl blur-md opacity-70 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb9JJ6QQs9lpJ1GvvQKbOWKrQ4_yimL9o5w4bbPuXlg1itRbP-91kih0vF-BMUxKTea1YvKMRTI84A4ya39g56hmFtBvTgYtdOrfNdeDbxGahR6H68-Je0uUxbEd5ga0dA89F63ecMGHCOHp3pzpZqlqL-WvMvBSAN02YKlDFLuPBF5LdL8CnDsTZ7oK8ixdQqUe2xUl15JJF7yOt-ILgWfPxnZi_XyxAcnmdzt8yDLZGyY84UOoQEuhyFmenaqfSJtDWtYa6iIPnj"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-black text-[#25D366]">58</span>
              </div>
            </div>

            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Fotos apagadas
            </p>
          </section>

          {/* AUDIOS */}
          <section className="glass-panel rounded-3xl p-4 flex flex-col items-center text-center relative overflow-hidden">
            <div className="ios-card-highlight"></div>

            <div className="w-16 h-16 mb-3 bg-[#25D366]/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg
                className="h-8 w-8 text-[#25D366]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4"
                />
              </svg>
            </div>

            <span className="text-xl font-black text-[#25D366]">4</span>

            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Áudios suspeitos
            </p>
          </section>
        </div>

        {/* KEYWORDS */}
        <section className="glass-panel rounded-3xl p-5 relative overflow-hidden">
          <div className="ios-card-highlight"></div>

          <div className="mb-4">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Análise de Texto
            </h2>

            <p className="text-base text-slate-800 font-medium">
              O sistema escaneou
              <span className="text-[#25D366] font-bold"> 4.327 </span>
              mensagens
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Gostoso (13)",
              "Amor (9)",
              "Segredo (8)",
              "Escondido (6)",
              "Não conta (5)",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/40 text-slate-700 border border-white/50 px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ALERTA */}
        <section className="glass-panel rounded-3xl p-5 relative overflow-hidden">
          <div className="ios-card-highlight"></div>

          <div className="flex items-start gap-4">
            <div className="bg-red-500 rounded-xl p-3 shadow-lg flex-shrink-0">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24">
                <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
              </svg>
            </div>

            <div>
              <h2 className="text-lg font-bold text-red-500 flex items-center gap-2">
                Alerta de Localização
                <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
              </h2>

              <p className="text-sm text-slate-600 font-medium">
                <span className="font-bold text-slate-800">
                  2 Localizações suspeitas
                </span>{" "}
                encontradas nos últimos 14 dias perto de motéis e casas de
                massagem.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <button className="w-full bg-slate-900 text-white font-bold py-5 rounded-3xl shadow-xl active:scale-[0.98] transition-all text-sm uppercase tracking-widest">
          Ver todas as mensagens
        </button>
      </main>

      {/* FOOTER CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-[60]">
        <div className="max-w-md mx-auto glass-panel p-4 rounded-3xl flex items-center justify-between gap-4 shadow-2xl relative overflow-hidden">
          <div className="ios-card-highlight"></div>

          <div className="flex items-center gap-3">
            <div className="bg-[#25D366] p-2 rounded-xl shadow-lg">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24">
                <path d="M12 2C6 2 2 6 2 12c0 2 .5 3.9 1.5 5.6L2 22l4.6-1.5C8.1 21.5 10 22 12 22c6 0 10-4 10-10S18 2 12 2z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-[#25D366] tracking-wider">
                WhatsApp Desbloqueado
              </span>

              <span className="text-xs text-slate-800 font-bold">
                Acesse as mensagens agora
              </span>
            </div>
          </div>

          <button className="bg-[#25D366] text-white px-5 py-2.5 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
}
