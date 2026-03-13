import { useEffect, useState } from "react";

export default function Sidebar() {
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("profilePic="));

    if (cookie) {
      setProfilePic(cookie.split("=")[1]);
    }
  }, []);

  return (
    <div className="w-[420px] bg-[#111b21] border-r border-[#222e35] flex flex-col">
      {/* HEADER */}
      <div className="h-[60px] flex items-center justify-between px-4 bg-[#202c33]">
        {/* PROFILE */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={profilePic || "/logoEspiaZap.png"}
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-6 text-gray-300">
          {/* SEARCH */}
          <button className="hover:text-white">🔍</button>

          {/* NOTIFICATION */}
          <button className="hover:text-white">🔔</button>

          {/* MENU */}
          <button className="hover:text-white">⋮</button>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="p-3 bg-[#111b21]">
        <div className="bg-[#202c33] rounded-lg flex items-center px-3">
          <span className="text-gray-400 mr-2">🔍</span>

          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-transparent w-full py-2 text-sm text-white outline-none"
          />
        </div>
      </div>

      {/* CHAT LIST */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 text-gray-400 text-sm">
          Nenhuma conversa carregada
        </div>
      </div>
    </div>
  );
}
