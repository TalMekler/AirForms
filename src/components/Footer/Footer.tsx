import { Box, Typography } from "@mui/material";
import FooterLogo from "../../assets/FooterLogo.svg";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: "205px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "1663px",
          alignItems: "center",
          flexDirection: "row-reverse",
          direction: "rtl",
          justifyContent: "space-between",
          gap: "124px",
        }}
      >
        <Box sx={{ width: "342px" }}>
          <Typography
            sx={{
              fontFamily: "assistant",
              color: "#77829E",
              fontSize: "16px",
              whiteSpace: "pre-line",
              direction: "ltr",
            }}
          >
            הממשק הדיגיטלי החדש של חיל האוויר הוא קפיצת{"\n"}
            המדרגה בעולם הניהול והבקשות. כל הטפסים במקום אחד.
          </Typography>
        </Box>

        <Box sx={{ width: "233.45px", height: "50.6px" }}>
          <img src={FooterLogo} alt="AirForms Logo" style={{ height: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
