type Props = {
  title: string;
  description: string;
  icon: string;
  result: string;
  show: boolean;
};

export default function AnalysisCard({
  title,
  description,
  icon,
  result,
  show,
}: Props) {
  return (
    <div className="bg-white text-black p-4 rounded-xl flex gap-3 items-start">
      <div className="text-2xl">{icon}</div>

      <div>
        {!show && (
          <>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </>
        )}

        {show && <p className="font-bold text-red-600">⚠ {result}</p>}
      </div>
    </div>
  );
}
