import Header from "../components/Header2";
import ProgressScanner from "../components/ProgressScanner";
import ResultCards from "../components/ResultCards";
import TrackerCard from "../components/TrackerCard";
import VSLPlayer from "../components/VSLPlayer";

export default function VSL() {
  function abrirWhatsApp() {
    window.location.href = "/whatsapp-web";
  }

  return (
    <div className="min-h-screen bg-[url('https://detetiveonlinebr.com/spyzp/assets/imgs/bg.webp')] bg-cover">
      <Header />

      <div className="px-48 mx-auto p-4 text-center ">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">
            ANÁLISE EM TEMPO REAL
          </div>

          <img
            id="profileImage"
            className="w-28 h-28 rounded-full border-4 border-black mt-3"
            src="https://placehold.co/120"
          />
        </div>

        <div className="bg-red-500">
          <VSLPlayer />
        </div>

        <button
          onClick={abrirWhatsApp}
          className="hidden w-full bg-green-500 text-white p-4 rounded-xl mt-4 font-bold"
        >
          Conversas suspeitas encontradas
        </button>

        <ProgressScanner />

        <TrackerCard />

        <ResultCards />
      </div>
    </div>
  );
}
