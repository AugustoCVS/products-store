import { SkeletonComponent } from "@/components/commons/Skeleton/skeleton.component";
import { FilterSection } from "./components/FilterSection/filter-section.component";
import { ProductCard } from "./components/ProductCard/product-card.component";
import { useHome } from "./home.hook";

export const Home: React.FC = () => {
  const { states, actions } = useHome();

  const renderContent = () => {
    if (states.isLoading || states.isProductLoading) {
      return (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <SkeletonComponent
              key={index}
              height={375}
              width={300}
              baseColor="#323238"
              borderRadius={8}
              highlightColor="#29292E"
            />
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {states.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-gray-800">
      <FilterSection
        filter={states.filter}
        setFilter={actions.setFilter}
        search={states.search}
        setSearch={actions.setSearch}
      />

      {renderContent()}
    </div>
  );
};
