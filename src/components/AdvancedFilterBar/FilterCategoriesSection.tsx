import { Stack } from "@mui/material";
import AdvancedFilterBar from "./AdvancedFilterBar";
import FilterCategories from "../FilterCategories/FilterCategories";
import { filterCategories } from "../FilterCategories/utils/filterCategories";

const FilterCategoriesSection = () => {
  return (
    <Stack>
      <FilterCategories filterCategories={filterCategories} />
      <AdvancedFilterBar />
    </Stack>
  );
};

export default FilterCategoriesSection;
