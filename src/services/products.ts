import { api } from "./api";
import {
  CategoryListResponse,
  CategoryType,
  ProductRequestProps,
  ProductsResponse,
} from "./interfaces/products";

export const ProductsService = {
  getAllProducts: async ({
    order,
    sortBy,
    search,
  }: ProductRequestProps): Promise<ProductsResponse> => {
    const res = await api.get<ProductsResponse>(
      `/products/search?q=${search}&sortBy=${sortBy}&order=${order}`
    );

    return res.data;
  },

  filterByCategory: async ({
    category,
  }: {
    category: string;
  }): Promise<ProductsResponse> => {
    const res = await api.get<ProductsResponse>(
      `/products/category/${category}`
    );

    return res.data;
  },

  getAllCategories: async (): Promise<CategoryListResponse[]> => {
    const res = await api.get<CategoryListResponse[]>(`/products/categories`);

    return res.data;
  },
};
