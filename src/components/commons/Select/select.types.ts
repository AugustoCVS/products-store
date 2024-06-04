import { ChangeEventHandler } from "react";

export type SelectProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>
  children: React.ReactNode;
  label: string;
};
