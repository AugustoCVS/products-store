import { SelectProps } from "./select.types";

export const Select: React.FC<SelectProps> = ({
  onChange,
  value,
  children,
  label,
}) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className={`flex items-center w-full text-sm text-gray-100 p-4 rounded-lg bg-gray-900 appearance-none
        `}
    >
      <option value="" disabled selected hidden>
        {label}
      </option>
      {children}
    </select>
  );
};
