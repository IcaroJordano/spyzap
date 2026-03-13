import { useState } from "react";
import WhatsAppIntro from "../components/WhatsAppIntro";
import WhatsAppLayout from "../components/WhatsAppLayout";
// import WhatsAppIntro from "./components/WhatsAppIntro";
// import WhatsAppLayout from "./components/WhatsAppLayout";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <WhatsAppIntro onFinish={() => setLoading(false)} />}
      {!loading && <WhatsAppLayout />}
    </>
  );
}
