import { useLocation, useNavigate } from "react-router-dom";

export default function Step01() {
  const location = useLocation();
  const navigate = useNavigate();

  function goNext(device: string) {
    const params = new URLSearchParams(location.search);

    navigate(`/pre/step-02?device=${device}&${params.toString()}`);
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/imgs/bg.webp)" }}
    >
      <header className="flex items-center justify-center p-4 bg-white">
        <img src="/assets/imgs/logoEspiaZap.png" className="h-8" />
        <h2 className="ml-2 text-2xl text-green-500 font-bold">SpyZap</h2>
      </header>

      <div className="max-w-xl mx-auto mt-16 bg-white/95 p-8 rounded-2xl shadow-xl text-center">
        <div className="bg-green-500 text-white font-bold px-6 py-2 rounded-full inline-block mb-4">
          1º PASSO
        </div>

        <h1 className="text-3xl font-bold mb-8">
          Que tipo de dispositivo você quer investigar?
        </h1>

        <div className="flex flex-col gap-6">
          <button
            onClick={() => goNext("iphone")}
            className="bg-green-500 text-white py-5 rounded-xl text-2xl font-bold"
          >
            IPHONE
          </button>

          <button
            onClick={() => goNext("android")}
            className="bg-green-500 text-white py-5 rounded-xl text-2xl font-bold"
          >
            ANDROID
          </button>
        </div>
      </div>
    </div>
  );
}
