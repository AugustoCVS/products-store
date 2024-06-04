import { ProductsService } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { OrderOptions, filterProps } from "./home.types";
import { useDebounce } from "@/utils/debounce";

export const useHome = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<filterProps>({
    sortBy: "",
    order: OrderOptions.DESC,
    category: "",
  });

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useQuery({
    queryKey: ["products", filter, debouncedSearch],
    queryFn: async () =>
      await ProductsService.getAllProducts({
        sortBy: filter.sortBy,
        order: filter.order,
        search: debouncedSearch,
      }),
  });

  const { data: test } = useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      await ProductsService.filterByCategory({
        category: filter.category,
      }),
    enabled: filter.category !== "",
  });

  const handleClearFilter = (): void => {
    setFilter({
      sortBy: "",
      order: OrderOptions.DESC,
      category: "",
    });
  };

  const products = data?.products;

  return {
    states: {
      filter,
      products,
      isLoading,
      search,
    },
    actions: {
      setSearch,
      setFilter,
      handleClearFilter,
    },
  };
};
