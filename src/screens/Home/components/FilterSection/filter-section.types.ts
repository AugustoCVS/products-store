import { Dispatch, SetStateAction } from "react";
import { filterProps } from "../../home.types";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

export type FilterSectionProps = {
  filter: filterProps;
  setFilter: ({sortBy, order, category}: filterProps) => void;

  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<null, Error>>
}