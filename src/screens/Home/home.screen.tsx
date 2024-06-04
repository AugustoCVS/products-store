import { ProductCard } from "./components/ProductCard/product-card.component";
import { useHome } from "./home.hook";

export const Home: React.FC = () => {
  const { states } = useHome();

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-gray-800">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {states.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
