import { Image } from "./components/Image/image.component";
import { Content } from "./components/Content/content.component";
import { ProductCardProps } from "./product-cart.types";

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleOpenModal,
}) => {
  return (
    <div
      className="w-[300px] flex flex-col items-center gap-2 bg-gray-700 shadow shadow-gray-900 rounded-lg overflow-hidden"
      onClick={handleOpenModal}
    >
      <Image src={product.thumbnail} alt={product.title} />

      <Content
        price={product.price}
        rating={product.rating}
        title={product.title}
      />
    </div>
  );
};
