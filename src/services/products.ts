import { api } from "./api";
import { CategoryType, ProductRequestProps, ProductsResponse } from "./interfaces/products";

export const ProductsService = {
  getAllProducts: async ({order, sortBy, search}: ProductRequestProps): Promise<ProductsResponse> => {
    const res = await api.get<ProductsResponse>(`/products/search?q=${search}&sortBy=${sortBy}&order=${order}`);

    return res.data;
  },

  filterByCategory: async ({category}: {category: CategoryType}): Promise<ProductsResponse> => {
    const res = await api.get<ProductsResponse>(`/products/category/${category}`);

    return res.data;
  }
};
