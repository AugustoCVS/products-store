import { Select } from "@/components/commons/Select/select.component";
import { FilterSectionProps } from "./filter-section.types";
import { useFilterSection } from "./filter-section.hook";
import { Input } from "@/components/commons/Input/input.component";

export const FilterSection: React.FC<FilterSectionProps> = ({
  search,
  filter,
  setSearch,
  setFilter,
}) => {
  const { states, actions } = useFilterSection({
    filter,
    search,
    setFilter,
    setSearch,
  });

  return (
    <div className="flex flex-row items-center mt-4 gap-4 w-3/4">
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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
        onChange={actions.handleOrderChange}
        value={states.orderByValue}
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
