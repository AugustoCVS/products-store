import { ProductsService } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { OrderOptions } from "../../home.types";
import { FilterSectionProps } from "./filter-section.types";

export const useFilterSection = ({
  filter,
  setFilter,
}: FilterSectionProps) => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await ProductsService.getAllCategories(),
    refetchOnWindowFocus: false,
  });

  const OrderByList = [
    { id: 0, name: "A - Z", value: "title", order: OrderOptions.ASC },
    { id: 1, name: "Z - A", value: "title", order: OrderOptions.DESC },
    { id: 2, name: "Greater price", value: "price", order: OrderOptions.DESC },
    { id: 3, name: "Lower price", value: "price", order: OrderOptions.ASC },
  ];

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedOption = OrderByList.find(
      (option) => option.id.toString() === e.target.value
    );
    if (selectedOption) {
      setFilter({
        ...filter,
        sortBy: selectedOption.value,
        order: selectedOption.order,
      });
    }
  };

  const orderByValue =
    OrderByList.find(
      (option) =>
        option.value === filter.sortBy && option.order === filter.order
    )?.id.toString() || "";

  return {
    states: {
      categories,
      OrderByList,
      orderByValue,
    },
    actions: {
      handleOrderChange,
    }
  };
};
