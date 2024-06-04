import { ProductsService } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { OrderOptions, filterProps } from "./home.types";

export const useHome = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<filterProps>({
    sortBy: "",
    order: OrderOptions.DESC,
    category: "",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["products", filter],
    queryFn: async () =>
      await ProductsService.getAllProducts({
        sortBy: filter.sortBy,
        order: filter.order,
        search: search,
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

  console.log("PRODUTOS FILTRADOS", test?.products)

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
