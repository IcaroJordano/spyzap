import { useEffect } from "react";

export default function VSLPlayer() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="scripts.converteai.net"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.src =
        "https://scripts.converteai.net/9581cd38-0dee-4366-bfd7-eeb983591eda/players/6982bef69a64dd1a27bdf286/v4/player.js";

      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-black rounded-xl p-6 mt-4">
      <h3 className="text-white text-xl font-bold">ASSISTA O VÍDEO ENQUANTO</h3>

      <p className="text-white mb-4">
        o número é rastreado e as conversas são processadas
      </p>

      <div
        dangerouslySetInnerHTML={{
          __html: `<vturb-smartplayer id="vid-6982bef69a64dd1a27bdf286" style="width:100%"></vturb-smartplayer>`,
        }}
      />
    </div>
  );
}
