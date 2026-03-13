import { useEffect } from "react";
import Footer from "../components/Footer";
import InfoBox from "../components/InfoBox";
import ScanForm from "../components/ScanForm";
import Header from "../components/Header";

export default function Home() {
  useEffect(() => {
    const redirectUrl = "/backredirect/number";

    const handleBack = () => {
      window.location.href = redirectUrl;
    };

    const handleBeforeUnload = () => {
      window.location.href = redirectUrl;
    };

    // captura botão voltar
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBack);

    // captura fechar aba / sair
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handleBack);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://detetiveonlinebr.com/spyzp/assets/imgs/bg.webp)",
      }}
    >
      <Header />

      <main className="text-center p-6">
        <div className="bg-green-500 text-white px-6 py-2 rounded-full inline-block shadow-lg uppercase tracking-widest font-bold mb-4">
          Acesso liberado
        </div>

        <h1 className="text-3xl font-bold mb-4">Monitoramento Total</h1>

        <ul className="inline-block text-left font-extrabold text-xl mb-4">
          <li>⭘ Descubra as mensagens suspeitas</li>
          <li>⭘ Fotos questionáveis</li>
          <li>⭘ Localizações duvidosas</li>
        </ul>

        <img
          src="https://detetiveonlinebr.com/spyzp/assets/imgs/bg-new.png"
          className="w-[350px] mx-auto rounded-xl"
        />

        <ScanForm />

        <InfoBox />
      </main>

      <Footer />
    </div>
  );
}
