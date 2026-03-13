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
import ReportPage2 from "./components/ReportPageEsposa";
import AnalysisPage from "./pages/AnalysisPage";

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
      <Route path="/" element={<Home />} />

      {/* presell */}
      <Route path="/pre/step-01" element={<Step01 />} />

      <Route path="/pre/step-02" element={<Step02 />} />

      <Route path="/pre/step-03" element={<Step03 />} />

      <Route path="/pre/step-04" element={<Step04 />} />

      {/* vsl */}
      <Route path="/vsl" element={<VSL />} />

      {/* whatsapp fake */}
      <Route path="/whatsapp-web" element={<WhatsAppPage />} />

      {/* fluxo sem foto */}
      <Route path="/no-img/verificacao" element={<VerificacaoNoImg />} />
      <Route path="/no-img/esposa" element={<ReportPage2 />} />
      <Route path="/no-img/marido" element={<ReportPage />} />

      {/* <Route path="/no-img/marido" element={<MaridoNoImg />} /> */}
      <Route path="/no-img/vsl" element={<AnalysisPage />} />
      {/* <Route path="/no-img/whats-web" element={<WhatsWebNoImg />} /> */}

      {/* backredirect */}
      <Route path="/backredirect/number" element={<BackRedirectPage />} />
      <Route path="/backredirect/resultados" element={<BackResultsPage />} />
      <Route path="/backredirect/vsl" element={<BackVSLPage />} />
    </Routes>
  );
}
