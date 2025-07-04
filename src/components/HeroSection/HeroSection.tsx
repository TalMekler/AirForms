import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeroSectionImage from "../../assets/heroSectionImage.svg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 12, lg: 6 }} display={"flex"} justifyContent={{ xs: "center", lg: "start" }}>
        <Stack gap={"60px"}>
          <Box>
            <Typography variant="h6" fontSize={77.5} fontFamily={"Karantina"}>
              לא צריך לחפש ..
            </Typography>
            <Typography variant="h3" fontSize={147.5} fontFamily={"Karantina"}>
              הכל במקום אחד!
            </Typography>
          </Box>

          <Typography variant="body1" color="text.secondary" mb={4} sx={{ maxWidth: 570 }}>
            הממשק הדיגיטלי החדש של חיל האוויר הוא קפיצת מדרגה בעולם הניהול והבקשות. כל הטפסים במקום אחד, עם חווית שימוש פשוטה, נוחה וידידותית מאי פעם. פחות בירוקרטיה, יותר יעילות – הטכנולוגיה שמעצימה אתכם!
          </Typography>
          <Box>
            <Button onClick={() => navigate("/new_form")} variant="contained" color="secondary" sx={{ px: "2.5rem", borderRadius: 2, fontSize: 24 }}>
              צרו טופס חדש
            </Button>
          </Box>
        </Stack>
      </Grid>
      <Grid size={{ md: 12, lg: 6 }} display={"flex"} justifyContent={{ xs: "center", lg: "start" }}>
        <img src={HeroSectionImage} width={"100%"} height={700} style={{ maxWidth: "35.625rem" }} />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
