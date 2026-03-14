import { Routes, Route } from "react-router-dom";

import VSL from "./pages/VSL";
import VerificacaoNoImg from "./pages/no-img/verificacao";
import ReportPage from "./components/ReportPage";
import WhatsAppPage from "./pages/WhatsAppPage";
import TesteNewPage from "./pages/TesteNewPage";
import ReportPage2 from "./components/ProgressBar2";

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
