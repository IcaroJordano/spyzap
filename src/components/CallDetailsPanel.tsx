export default function CallDetailsPanel({
  phone = "+55 ********",
  onBack,
}: {
  phone?: string;
  onBack?: () => void;
}) {
  type CallType = "incoming" | "outgoing" | "missed";
  type CallAction = "phone" | "video";
  type Call = {
    type: CallType;
    label: string;
    action: CallAction;
  };

  const calls: Call[] = [
    { type: "incoming", label: "Ligação Recebida", action: "video" },
    { type: "outgoing", label: "Ligação Não Atendida", action: "phone" },
    { type: "missed", label: "Ligação Perdida", action: "video" },
    { type: "incoming", label: "Ligação Recebida", action: "video" },
    { type: "incoming", label: "Ligação Recebida", action: "video" },
    { type: "incoming", label: "Ligação Recebida", action: "video" },
    { type: "outgoing", label: "Ligação Não Atendida", action: "phone" },
    { type: "missed", label: "Ligação Perdida", action: "video" },
    { type: "outgoing", label: "Ligação Não Atendida", action: "phone" },
    { type: "missed", label: "Ligação Perdida", action: "video" },
  ];

  const iconColor: Record<CallType, string> = {
    incoming: "text-green-400",
    outgoing: "text-blue-400",
    missed: "text-red-400",
  };

  const iconSymbol: Record<CallType, string> = {
    incoming: "📥",
    outgoing: "📤",
    missed: "❌",
  };

  return (
    <div className="w-[380px] bg-[#111b21] border-l border-[#2a3942] flex flex-col h-full">
      {/* HEADER */}
      <div className="p-4 border-b border-[#2a3942] bg-[#202c33] flex items-center gap-4">
        <button onClick={onBack} className="text-gray-400 hover:text-white">
          ←
        </button>

        <div className="flex items-center gap-3 flex-1">
          <img src="images/result.svg" className="w-12 h-12 rounded-full" />

          <div>
            <div className="font-semibold text-sm">{phone}</div>

            <div className="text-xs text-gray-400">Conectado.</div>
          </div>
        </div>

        <div className="flex gap-2 text-gray-300">
          <button className="p-2 rounded bg-blue-600 hover:bg-blue-500">
            💬
          </button>

          <button className="p-2 rounded bg-green-600 hover:bg-green-500">
            📞
          </button>

          <button className="p-2 rounded bg-cyan-600 hover:bg-cyan-500">
            🎥
          </button>
        </div>
      </div>

      {/* CALL HISTORY */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {calls.map((call, i) => (
          <div
            key={i}
            className="bg-[#202c33] rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#111b21] ${iconColor[call.type]}`}
              >
                {iconSymbol[call.type]}
              </div>

              <div className="text-sm">{call.label}</div>
            </div>

            <div>
              {call.action === "phone" && (
                <button className="p-2 rounded bg-green-600 hover:bg-green-500">
                  📞
                </button>
              )}

              {call.action === "video" && (
                <button className="p-2 rounded bg-cyan-600 hover:bg-cyan-500">
                  🎥
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
