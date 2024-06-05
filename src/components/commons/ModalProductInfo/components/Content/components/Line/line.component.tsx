export const Line: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-row justify-between mt-1">
      <p className="text-lg text-gray-300 font-bold">{label}</p>
      <p className="text-lg text-gray-400">{value}</p>
    </div>
  );
};
