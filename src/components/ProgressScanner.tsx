import { useEffect, useState } from "react";

export default function ProgressScanner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900 p-4 rounded-2xl mt-6">
      <div className="w-full bg-black rounded-full h-6">
        <div
          className="bg-green-500 h-6 rounded-full transition-all"
          style={{ width: progress + "%" }}
        />
      </div>

      <p className="text-green-400 mt-2 text-center">{progress}%</p>
    </div>
  );
}
