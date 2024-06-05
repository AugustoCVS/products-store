import { CircleOff } from "lucide-react";

export const EmptyList: React.FC = () => {
  return (
    <div className="w-full h-full min-w-screen mt-20 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <CircleOff size={160} color="#7C7C8A" />
        <h1 className="text-3xl font-bold text-gray-500">No results found</h1>
      </div>
    </div>
  );
};
