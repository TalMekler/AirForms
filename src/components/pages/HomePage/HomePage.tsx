import { Search, Tune } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { myForms } from "../../../mockData/forms";
import FilterCategories from "../../FilterCategories/FilterCategories";
import { filterCategories } from "../../FilterCategories/utils/filterCategories";
import FormCardBackgroundImage from "../../FormCard/FormCardBackgroundImage";
import HeroSection from "../../HeroSection/HeroSection";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Stack mt={"2.5rem"} mb={"3.75rem"} width={"fit-content"} mx={"auto"} direction={"row"} gap={"1.25rem"} alignItems={"center"}>
        <TextField
          placeholder="חיפוש"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: 540, px: 2, py: 1 }}
        />
        <Box>
          <IconButton
            sx={{
              height: 60,
              width: 60,
              borderRadius: 2,
              bgcolor: "#EDF5FE",
              "&:hover": {
                bgcolor: "#D0E4FB",
              },
            }}
          >
            <Tune />
          </IconButton>
        </Box>
      </Stack>
      <FilterCategories filterCategories={filterCategories} />
      <Box>
        <FormCardBackgroundImage form={myForms[0]} />
      </Box>
    </Box>
  );
};

export default HomePage;
