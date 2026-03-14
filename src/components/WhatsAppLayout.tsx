import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";

export default function WhatsAppLayout() {
  return (
    <div className="h-screen w-screen flex bg-[#111b21]">
      <div className="w-0 lg:w-auto">
        <Sidebar />
      </div>
      <ChatArea />
    </div>
  );
}
