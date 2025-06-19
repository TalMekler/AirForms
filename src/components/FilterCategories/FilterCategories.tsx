import { Stack, Typography } from "@mui/material";
import type { TFilterCategory } from "../../types/TFilterCategory";

type FilterCategoriesProps = {
  filterCategories: TFilterCategory[];
};
const FilterCategories = ({ filterCategories }: FilterCategoriesProps) => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"20px"} flexWrap={"nowrap"}>
      {filterCategories.map((filterCategory, index) => (
        <Stack
          key={`filter_category_${index}`}
          bgcolor={"#EDF5FE"}
          px={3}
          py={1}
          flex={1}
          borderRadius={2}
          alignItems={"center"}
          textAlign={"center"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#0E6BA8",
              transition: "300ms ease-in-out",
              "& > *": {
                color: "white",
              },
            },
          }}
        >
          <filterCategory.muiIcon sx={{ fontSize: 24 }} />
          <Typography variant="caption" fontSize={18}>
            {filterCategory.title}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default FilterCategories;
