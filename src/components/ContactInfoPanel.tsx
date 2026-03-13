export default function ContactInfoPanel() {
  return (
    <div className="w-[320px] bg-[#111b21] border-l border-[#202c33] flex flex-col text-gray-200">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#202c33]">
        <h5 className="font-semibold">Contact info</h5>

        <button className="text-gray-400 hover:text-white">✕</button>
      </div>

      {/* BODY */}
      <div className="p-4 space-y-4 overflow-y-auto">
        {/* AVATAR */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="images/result.svg"
            className="w-24 h-24 rounded-full blur-sm"
            alt=""
          />

          <h4 className="font-semibold text-lg">Bloqueado 🔒</h4>
        </div>

        <hr className="border-[#202c33]" />

        {/* INFO */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-gray-400">
            📱 <span>+55 *******</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            📍 <span>- / ()</span>
          </div>
        </div>

        <hr className="border-[#202c33]" />

        {/* MEDIA */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              📷 <span>Photos & Media</span>
            </div>

            <span className="text-xs bg-[#00a884] px-2 py-1 rounded">26</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <img src="images/01.jpg" className="rounded" />
            <img src="images/02.jpg" className="rounded" />
            <img src="images/03.jpg" className="rounded" />
            <img src="images/04.jpg" className="rounded" />
            <img src="images/05.jpg" className="rounded" />
            <img src="images/06.jpg" className="rounded" />
          </div>
        </div>

        <hr className="border-[#202c33]" />

        {/* SETTINGS */}
        <div className="space-y-4">
          <h4 className="font-semibold text-sm text-gray-300">Settings</h4>

          {[
            "Media Auto Download",
            "Mute Conversation",
            "Notifications",
            "Block",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between text-sm"
            >
              <span>{item}</span>

              <input type="checkbox" className="accent-[#00a884]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
