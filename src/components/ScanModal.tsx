import { useEffect, useState } from "react";

interface Props {
  phone: string;
}

export default function ScanModal({ phone }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            const onlyNumbers = phone.replace(/\D/g, "");
            const allNine =
              onlyNumbers.length > 0 &&
              onlyNumbers.split("").every((d) => d === "9");

            if (allNine) {
              window.location.href = "/vsl";
            } else {
              window.location.href = "no-img/verificacao";
            }
          }, 500);

          return 100;
        }

        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [phone]);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-xl w-[90%] max-w-[500px] p-8 text-center">
        <img
          src="https://detetiveonlinebr.com/spyzp/assets/imgs/perfil.png"
          className="w-[200px] h-[200px] mx-auto rounded-full border-2 border-red-600 mb-6 animate-pulse"
        />

        <div className="text-xl mb-6">+55 {phone}</div>

        <div className="w-full h-5 bg-gray-800 rounded-xl overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-green-400 to-green-700 transition-all"
          />
        </div>

        <div className="mt-2 font-bold text-red-500">{progress}%</div>

        <h2 className="mt-6 tracking-widest font-bold">
          INVESTIGAÇÃO EM ANDAMENTO
        </h2>
      </div>
    </div>
  );
}
