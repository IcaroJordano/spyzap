type Props = {
  progress: number;
};

export default function ProgressBar2({ progress }: Props) {
  return (
    <div className="w-full bg-gray-800 rounded-xl h-10 relative overflow-hidden">
      <div
        className="bg-green-500 h-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />

      <span className="absolute inset-0 flex items-center justify-center font-bold">
        {progress}%
      </span>
    </div>
  );
}
