// import Header from "../components/Header";
// import ConversationCard from "../components/ConversationCard";
// import WhatsappToast from "../components/WhatsappToast";

import ConversationCard from "../../../components/ConversationCard";
import Header from "../../../components/Header2";
import WhatsappToast from "../../../components/WhatsappToast";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e8e0d4] flex justify-center">
      <div className="max-w-[420px] w-full">
        <Header />

        <div className="p-4 space-y-4">
          <ConversationCard />
        </div>
      </div>

      <WhatsappToast />
    </div>
  );
}
