import { Select } from "@/components/commons/Select/select.component";
import { FilterSectionProps } from "./filter-section.types";
import { useFilterSection } from "./filter-section.hook";
import { Input } from "@/components/commons/Input/input.component";
import { Button } from "@/components/commons/Button/button.component";

export const FilterSection: React.FC<FilterSectionProps> = ({
  search,
  filter,
  setSearch,
  setFilter,
  refetch,
}) => {
  const { states, actions } = useFilterSection({
    filter,
    search,
    setFilter,
    setSearch,
    refetch,
  });

  return (
    <div className="w-full gap-4 mt-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={!!filter.category}
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

      <div className="flex flex-row gap-1">
        <Select
          label="Rating"
          onChange={actions.handleRatingChange}
          value={states.rating}
        >
          {states.ratingOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>

        <Button onClick={actions.handleClearFilter}>Clear</Button>
      </div>
    </div>
  );
};
