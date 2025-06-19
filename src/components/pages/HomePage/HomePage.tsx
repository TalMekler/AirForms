import { Search, Tune } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import FilterCategories from "../../FilterCategories/FilterCategories";
import { filterCategories } from "../../FilterCategories/utils/filterCategories";
import HeroSection from "../../HeroSection/HeroSection";

type HomePageProps = {};
const HomePage = ({ }: HomePageProps) => {
  return (
    <Box>
      <HeroSection />
      <Stack
        mt={"40px"}
        mb={"60px"}
        width={"fit-content"}
        mx={"auto"}
        direction={"row"}
        gap={"20px"}
        alignItems={"center"}
      >
        <TextField
          placeholder="חיפוש"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: "540px", px: 2, py: 1 }}
        />
        <Box>
          <IconButton
            sx={{
              height: 60,
              width: 60,
              borderRadius: 2,
              bgcolor: "#EDF5FE",
              "&:hover": {
                bgcolor: "#EDF5FE",
              },
            }}
          >
            <Tune />
          </IconButton>
        </Box>
      </Stack>
      <FilterCategories filterCategories={filterCategories} />
    </Box>
  );
};

export default HomePage;
