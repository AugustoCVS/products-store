import { ProductsService } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useHome = () => {
  const [sortBy, setSortBy] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [search, setSearch] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () =>
      await ProductsService.getAllProducts({
        sortBy: sortBy,
        order: order,
        search: search,
      }),
  });

  const products = data?.products;

  return {
    states: {
      products,
      isLoading,
      search,
    },
  };
};
