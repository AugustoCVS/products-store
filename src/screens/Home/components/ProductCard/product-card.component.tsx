import { ProductProps } from "@/services/interfaces/products";

import { Image } from "./components/Image/image.component";
import { Content } from "./components/Content/content.component";

export const ProductCard: React.FC<{ product: ProductProps }> = ({
  product,
}) => {
  return (
    <div className="w-[300px] flex flex-col items-center gap-2 bg-gray-700 shadow shadow-gray-900 rounded-lg overflow-hidden">
      <Image src={product.thumbnail} alt={product.title} />

      <Content
        price={product.price}
        rating={product.rating}
        title={product.title}
      />
    </div>
  );
};
