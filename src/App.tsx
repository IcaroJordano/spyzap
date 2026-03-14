import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VSL from "./pages/VSL";
import Step01 from "./pages/presell/Step01";
import Step02 from "./pages/presell/Step02";
// import WhatsWeb from "./pages/WhatsWeb";

// /* presell */
// // import Step01 from "./pages/presell/Step01";
// import Step02 from "./pages/presell/Step02";
import Step03 from "./pages/presell/Step03";
import Step04 from "./pages/presell/Step04";
import VerificacaoNoImg from "./pages/no-img/verificacao";
import EsposaNoImg from "./pages/no-img/esposa/EsposaNoImg";
import ReportPage from "./components/ReportPage";
import WhatsAppPage from "./pages/WhatsAppPage";
import BackRedirectPage from "./pages/backredirect/BackNumber";
import BackResultsPage from "./pages/backredirect/BackResultados";
import BackVSLPage from "./pages/backredirect/BackVsl";
import AnalysisPage from "./pages/AnalysisPage";
import TesteNewPage from "./pages/TesteNewPage";
import VersaoWhite from "./pages/VersaoWhite";
import SpyZapLanding from "./pages/TesteNewPage";
import ReportPage2 from "./components/ProgressBar2";

// /* fluxo sem foto */
// import VerificacaoNoImg from "./pages/noimg/Verificacao";
// import EsposaNoImg from "./pages/noimg/Esposa";
// import MaridoNoImg from "./pages/noimg/Marido";
// import VSLNoImg from "./pages/noimg/VSL";
// import WhatsWebNoImg from "./pages/noimg/WhatsWeb";

// /* back redirect */
// import BackNumber from "./pages/backredirect/Number";
// import BackResultados from "./pages/backredirect/Resultados";
// import BackVSL from "./pages/backredirect/VSL";
// import Step01 from "./pages/presell/Step01";

export default function App() {
  return (
    <Routes>
      {/* principal */}
      <Route path="/" element={<TesteNewPage />} />
      <Route path="/whatsapp" element={<WhatsAppPage />} />

      {/* Fluxo sem foto */}
      <Route path="/no-img/vsl" element={<VSL />} />
      <Route path="/no-img/verificacao" element={<VerificacaoNoImg />} />
      <Route path="/no-img/marido" element={<ReportPage />} />
      <Route path="/no-img/esposa" element={<ReportPage2 />} />

      {/* Fluxo com foto */}
      <Route path="/vsl" element={<VSL />} />
    </Routes>
  );
}
