export default function ResultCards() {
  return (
    <div className="bg-zinc-100 p-4 rounded-2xl mt-6 space-y-4">
      <div className="border p-3 rounded-xl flex gap-3">
        <img src="/assets/imgs/icon-msg.png" />

        <div>
          <h4 className="font-bold">Mensagens suspeitas</h4>

          <p>Mensagens contendo contexto sexual</p>
        </div>
      </div>

      <div className="border p-3 rounded-xl flex gap-3">
        <img src="/assets/imgs/icon-img.png" />

        <div>
          <h4 className="font-bold">Fotos suspeitas</h4>

          <p>Possíveis nudes detectados</p>
        </div>
      </div>

      <div className="border p-3 rounded-xl flex gap-3">
        <img src="/assets/imgs/icon-loc.png" />

        <div>
          <h4 className="font-bold">Localizações suspeitas</h4>

          <p>Motel e casas de massagem</p>
        </div>
      </div>
    </div>
  );
}
