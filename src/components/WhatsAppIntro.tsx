import { useEffect, useState } from "react";

interface WhatsAppIntroProps {
  onFinish: () => void;
}

export default function WhatsAppIntro({ onFinish }: WhatsAppIntroProps) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  const steps = [
    "Carregando mensagens",
    "Carregando mídias",
    "Baixando áudios",
    "Acessando WhatsApp Dele(a)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 800);
          return 100;
        }

        if (p % 25 === 0 && p !== 0) {
          setStep((s) => Math.min(s + 1, steps.length - 1));
        }

        return p + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#f0f0f0] flex items-center justify-center z-[9999]">
      <div className="w-[375px] h-[812px] bg-[#f0f0f0] rounded-[40px] shadow-xl overflow-hidden flex flex-col items-center justify-center p-10">
        {/* LOGO */}
        <div className="w-28 h-28 mb-16 animate-pulse">
          <svg viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-52 mb-10">
          <div className="h-1 bg-green-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* STATUS */}
        <div className="space-y-4 w-64 mb-16">
          {steps.map((text, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-sm transition ${
                index === step
                  ? "text-green-500 font-medium"
                  : index < step
                    ? "text-green-500"
                    : "text-gray-400"
              }`}
            >
              <div className="w-4 h-4 flex items-center justify-center">
                {index < step ? (
                  <svg viewBox="0 0 24 24" fill="#25D366">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                ) : index === step ? (
                  <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                ) : null}
              </div>

              {text}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-16 flex flex-col items-center gap-2">
          <p className="text-gray-400 text-sm">from</p>

          <div className="flex items-center gap-2">
            <span className="text-green-500 font-semibold text-lg">Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
