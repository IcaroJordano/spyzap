import { useEffect, useState } from "react";

export default function useProgressScanner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return progress;
}
