import { Store } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-700 flex flex-col items-center justify-center p-4 gap-2">
      <Store size={32} color="white" />
      <h1 className="text-white text-lg font-bold">Products Store</h1>
    </header>
  );
};
