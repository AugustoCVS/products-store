import { InputProps } from "./input.types";

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`text-gray-300 bg-gray-900 p-4 flex items-center w-full text-sm rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500
        `}
    />
  );
};
