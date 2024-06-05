import { ProductsService } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { OrderOptions } from "../../home.types";
import { FilterSectionProps } from "./filter-section.types";
import { useDispatch } from "react-redux";
import { filterByRating } from "@/store/slices/Products/products.slices";
import { useCallback, useState } from "react";

export const useFilterSection = ({
  filter,
  setFilter,
  refetch,
  setSearch,
}: FilterSectionProps) => {
  const [rating, setRating] = useState<string>("");

  const dispatch = useDispatch();

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

    const handleClearFilter = (): void => {
      setFilter({
        sortBy: "",
        order: OrderOptions.DESC,
        category: "",
      });
      setSearch("");
      setRating("");
      refetch(); 
    };

  const ratingOptions = [
    { id: 0, name: "5 stars", value: 5 },
    { id: 1, name: "4 stars", value: 4 },
    { id: 2, name: "3 stars", value: 3 },
    { id: 3, name: "2 stars", value: 2 },
    { id: 4, name: "1 star", value: 1 },
  ];

  const handleRatingChange = useCallback(async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRating = e.target.value;
    setRating(selectedRating);
  
    await refetch(); 
  
    dispatch(filterByRating(selectedRating));
  }, [refetch, dispatch]);

  return {
    states: {
      categories,
      OrderByList,
      orderByValue,
      ratingOptions,
      rating,
    },
    actions: {
      handleOrderChange,
      handleClearFilter,
      handleRatingChange,
    }
  };
};
