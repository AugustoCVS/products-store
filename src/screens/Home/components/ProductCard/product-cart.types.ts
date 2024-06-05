import { ProductProps } from "@/services/interfaces/products";

export type ProductCardProps = {
  product: ProductProps;
  handleOpenModal: () => void;
};
