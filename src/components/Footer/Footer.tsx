import { Stack, Typography } from "@mui/material";
import FooterLogo from "../../assets/FooterLogo.svg";

const Footer = () => {
  return (
    <Stack component="footer" px={"7.5rem"} py={"4.6875rem"} bgcolor={"white"} width={"100%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <Typography variant="body1" maxWidth={"21.375rem"} fontFamily={"Assistant"} color="#77829E" whiteSpace={"pre-line"}>
        הממשק הדיגיטלי החדש של חיל האוויר הוא קפיצת המדרגה בעולם הניהול והבקשות. כל הטפסים במקום אחד.
      </Typography>
      <img src={FooterLogo} alt="AirForms Logo" style={{ height: "100%" }} />
    </Stack>
  );
};

export default Footer;
