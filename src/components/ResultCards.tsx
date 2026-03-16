export default function ResultCards() {
  return (
    <div className="bg-white/5  border border-white/10 backdrop-blur-md bg-opacity-70  p-4 rounded-2xl mt-6 space-y-4">
      <div className="border p-3 rounded-xl flex gap-3">
        {/* <img className="w-8 h-8 rounded-full " src="https://placehold.co/120" /> */}
        <img
          src="https://detetiveonlinebr.com/spyzp/assets/imgs/perfil.png"
          className="w-10 h-10  rounded-full border-2 border-red-600 mb-6 animate-pulse"
        />
        <div className="mx-auto">
          <h4 className="font-bold">Mensagens suspeitas</h4>

          <p>Mensagens contendo contexto sexual</p>
        </div>
      </div>

      <div className="border p-3 rounded-xl flex gap-3">
        <img
          src="https://detetiveonlinebr.com/spyzp/assets/imgs/perfil.png"
          className="w-10 h-10  rounded-full border-2 border-red-600 mb-6 animate-pulse"
        />
        <div className="mx-auto">
          <h4 className="font-bold">Fotos suspeitas</h4>

          <p>Possíveis nudes detectados</p>
        </div>
      </div>

      <div className="border p-3 rounded-xl flex gap-3">
        <img
          src="https://detetiveonlinebr.com/spyzp/assets/imgs/perfil.png"
          className="w-10 h-10  rounded-full border-2 border-red-600 mb-6 animate-pulse"
        />
        <div className="mx-auto">
          <h4 className="font-bold">Localizações suspeitas</h4>

          <p>Motel e casas de massagem</p>
        </div>
      </div>
    </div>
  );
}
