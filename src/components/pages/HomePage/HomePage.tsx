import { Search, Tune } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { kit1, myForms } from "../../../mockData/forms";
import type { TForm } from "../../../types/TForm";
import FilterCategories from "../../FilterCategories/FilterCategories";
import { filterCategories } from "../../FilterCategories/utils/filterCategories";
import MyFormsFormCard from "../../FormCard/MyFormsFormCard";
import NewFormsFormCard from "../../FormCard/NewFormsFormCard";
import HeroSection from "../../HeroSection/HeroSection";
import HomePageCardsStripe from "./HomePageCardsStripe";
import type { TKit } from "../../../types/TKit";

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
          sx={{ width: "33.75rem", px: 2, py: 1 }}
        />
        <Box>
          <IconButton sx={{ height: "3.75rem", width: "3.75rem", borderRadius: 2, bgcolor: "#EDF5FE", "&:hover": { bgcolor: "#D0E4FB" } }}>
            <Tune />
          </IconButton>
        </Box>
      </Stack>
      <FilterCategories filterCategories={filterCategories} />

      <Stack gap={"9.375rem"} mt={"7.5rem"}>
        <HomePageCardsStripe title="טפסים חדשים" items={myForms.slice(0, 4) as TForm[]} renderItem={(form) => <NewFormsFormCard form={form as TForm} />} buttonText="לכל הטפסים" buttonOnClick={() => {}} />
        <HomePageCardsStripe title="טפסים שיצרתי" items={myForms.slice(0, 8) as TForm[]} renderItem={(form) => <MyFormsFormCard displayStatus form={form as TForm} />} buttonText="לכל היצירות" buttonOnClick={() => {}} />
        <HomePageCardsStripe title="התיקיות שלי" items={[]} renderItem={(form) => <MyFormsFormCard form={form as TForm} />} buttonText="לכל התיקיות" buttonOnClick={() => {}} />
        <HomePageCardsStripe title="מועדפים" items={[...myForms.slice(0, 4), kit1, kit1, kit1, kit1]} renderItem={(item: TForm | TKit) => ("forms" in item ? <Typography>TKit</Typography> : <MyFormsFormCard form={item} />)} buttonText="מועדפים נוספים" buttonOnClick={() => {}} />
      </Stack>
    </Box>
  );
};

export default HomePage;
