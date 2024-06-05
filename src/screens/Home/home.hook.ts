import { ProductsService } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { OrderOptions, filterProps } from "./home.types";
import { useDebounce } from "@/utils/debounce";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setProductsList } from "@/store/slices/Products/products.slices";

export const useHome = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<filterProps>({
    sortBy: "",
    order: OrderOptions.DESC,
    category: "",
  });

  const debouncedSearch = useDebounce(search, 500);

  const { isLoading } = useQuery({
    queryKey: ["products", filter.order, filter.sortBy, debouncedSearch],
    queryFn: async () => {
      const res = await ProductsService.getAllProducts({
        sortBy: filter.sortBy,
        order: filter.order,
        search: debouncedSearch,
      });
      dispatch(setProductsList(res.products));

      return null;
    },
    enabled: filter.category === "",
    refetchOnWindowFocus: false,
  });

  const { isLoading: isProductLoading } = useQuery({
    queryKey: ["categories", filter],
    queryFn: async () => {
      const res = await ProductsService.filterByCategory({
        category: filter.category,
        order: filter.order,
        sortBy: filter.sortBy,
      });

      dispatch(setProductsList(res.products));

      return null;
    },
    enabled: filter.category !== "",
  });

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    states: {
      filter,
      products,
      isLoading,
      isProductLoading,
      search,
      isModalOpen,
    },
    actions: {
      setSearch,
      setFilter,
      handleToggleModal
    },
  };
};
