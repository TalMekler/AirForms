import { Box, Typography } from "@mui/material";
import { categories } from "./Categories";

const FilterCategories = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        width: "100%",
        maxWidth: "100%",
        flexWrap: "nowrap",
        overflow: "hidden",
        alignItems: "center",
        py: 1,
      }}
    >
      {categories.map((category, index) => (
        <Box
          key={index}
          sx={{
            px: 5,
            width: "100%",
            minWidth: 0,
            height: 60,
            backgroundColor: "#eaf4ff",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            textAlign: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#d2ebff",
            },
          }}
        >
          <Box sx={{ mb: 0.2 }}>{category.icon}</Box>
          <Typography variant="caption">{category.title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FilterCategories;
