import { FilterSection } from "./components/FilterSection/filter-section.component";
import { ProductCard } from "./components/ProductCard/product-card.component";
import { useHome } from "./home.hook";
import { ModalProductInfo } from "@/components/commons/ModalProductInfo/modal-product-info.component";
import { EmptyList } from "@/components/commons/EmptyList/empty-list.component";
import { Skeleton } from "./components/Skeleton/skeleton.component";

export const Home: React.FC = () => {
  const { states, actions } = useHome();

  const renderContent = () => {
    if (states.isLoading || states.isProductLoading) {
      return <Skeleton />;
    }

    if (states.products?.length === 0) {
      return <EmptyList />;
    }

    return (
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {states.products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleOpenModal={actions.handleToggleModal}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="w-full h-full min-h-screen flex flex-col items-center bg-gray-800">
        <FilterSection
          filter={states.filter}
          setFilter={actions.setFilter}
          search={states.search}
          setSearch={actions.setSearch}
          refetch={actions.refetch}
        />

        {renderContent()}
      </div>

      <ModalProductInfo
        isOpen={states.isModalOpen}
        onClose={actions.handleToggleModal}
      />
    </>
  );
};
