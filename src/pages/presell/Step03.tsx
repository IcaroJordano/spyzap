import { useLocation, useNavigate } from "react-router-dom";

export default function Step03() {
  const navigate = useNavigate();
  const location = useLocation();

  function next(): void {
    navigate("/pre/step-04" + location.search);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Ativar modo invisível?</h1>

        <div className="flex gap-4 justify-center">
          <button onClick={next} className="bg-gray-300 px-8 py-4 rounded-xl">
            NÃO
          </button>

          <button
            onClick={next}
            className="bg-green-500 text-white px-8 py-4 rounded-xl"
          >
            SIM
          </button>
        </div>
      </div>
    </div>
  );
}
