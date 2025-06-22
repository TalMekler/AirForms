import { Stack, Typography } from "@mui/material";
import type { TFilterCategory } from "../../types/TFilterCategory";

type FilterCategoriesProps = {
  filterCategories: TFilterCategory[];
};
const FilterCategories = ({ filterCategories }: FilterCategoriesProps) => {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} gap={"1.25rem"} flexWrap={"wrap"}>
        {filterCategories.map((filterCategory, index) => (
          <Stack
            key={`filter_category_${index}`}
            bgcolor={"#EDF5FE"}
            px={"1.875rem"}
            py={"0.625rem"}
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
            <filterCategory.muiIcon sx={{ fontSize: "1.5rem" }} />
            <Typography variant="caption" fontSize={"1.125rem"}>
              {filterCategory.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default FilterCategories;
