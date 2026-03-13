import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";

export default function WhatsAppLayout() {
  return (
    <div className="h-screen w-screen flex bg-[#111b21]">
      <Sidebar />

      <ChatArea />
    </div>
  );
}
