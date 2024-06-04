import { ProductsService } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { OrderOptions } from "../../home.types";

export const useFilterSection = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await ProductsService.getAllCategories(),
  });

  const OrderByList = [
    { id: 0, name: "A - Z", value: "title", order: OrderOptions.ASC },
    { id: 1, name: "Z - A", value: "title", order: OrderOptions.DESC },
    { id: 2, name: "Greater price", value: "price", order: OrderOptions.DESC },
    { id: 3, name: "Lower price", value: "price", order: OrderOptions.ASC },
  ];

  return {
    states: {
      categories,
      OrderByList,
    },
  };
};
