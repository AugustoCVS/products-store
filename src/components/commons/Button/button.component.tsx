import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      className={
        className
          ? className
          : "w-80 items-center justify-center p-2.5 border border-gray-500 bg-gray-700 text-gray-100 font-regular hover:bg-gray-500 hover:text-gray-700 rounded-lg disabled:bg-gray-500 disabled:hover:text-gray-100 disabled:cursor-not-allowed"
      }
      onClick={onClick}
      disabled={loading}
      type={type}
    >
      {children}
    </button>
  );
};
