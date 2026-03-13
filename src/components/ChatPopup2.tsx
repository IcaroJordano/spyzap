export default function ChatPopup({
  id,
  close,
  ddd,
}: {
  id: number;
  close: () => void;
  ddd: string | number;
}) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-[360px] rounded-xl overflow-hidden">
        <div className="flex items-center p-4 border-b">
          <button onClick={close} className="text-xl mr-4">
            ×
          </button>

          <img
            src={`/imgs/pm0${id}.jpg`}
            className="w-10 h-10 rounded-full mr-3"
          />

          <span className="font-semibold">+55 {ddd} 9XXXX</span>
        </div>

        <div className="p-4 space-y-3 bg-gray-100">
          <div className="bg-white p-2 rounded max-w-[70%]">Oi, tudo bem?</div>

          <div className="bg-green-200 p-2 rounded ml-auto max-w-[70%]">
            Tudo sim e você?
          </div>

          <div className="bg-white p-2 rounded max-w-[70%] text-red-500 font-semibold">
            Conteúdo bloqueado
          </div>
        </div>

        <div className="p-4">
          <button className="bg-green-500 text-white w-full py-3 rounded-lg font-bold">
            DESBLOQUEAR CONVERSAS
          </button>
        </div>
      </div>
    </div>
  );
}
