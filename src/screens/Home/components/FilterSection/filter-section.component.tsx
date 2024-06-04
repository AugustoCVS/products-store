import { Select } from "@/components/commons/Select/select.component";
import { FilterSectionProps } from "./filter-section.types";
import { useFilterSection } from "./filter-section.hook";

export const FilterSection: React.FC<FilterSectionProps> = ({
  search,
  filter,
  setSearch,
  setFilter,
}) => {
  const { states } = useFilterSection();

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = states.OrderByList.find(
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

  return (
    <div className="flex flex-row items-center mt-4 gap-4">
      <Select
        label="Category"
        onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        value={filter.category}
      >
        {states.categories?.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </Select>

      <Select
        label="Order"
        onChange={handleOrderChange}
        value={
          states.OrderByList.find(
            (option) =>
              option.value === filter.sortBy && option.order === filter.order
          )?.id.toString() || ""
        }
      >
        {states.OrderByList.map((option) => (
          <option key={option.id} value={option.id.toString()}>
            {option.name}
          </option>
        ))}
      </Select>
    </div>
  );
};
