import { Dispatch, SetStateAction } from "react";
import { filterProps } from "../../home.types";

export type FilterSectionProps = {
  filter: filterProps;
  setFilter: ({sortBy, order, category}: filterProps) => void;

  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}