import { BadgeOutlined, EditNoteOutlined, GroupsOutlined, HomeOutlined } from "@mui/icons-material";
import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import AppLogo from "../../assets/appLogo.svg";
import CustomNavItem from "./CustomNavItem";

const NavBar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={2}>
          <CustomNavItem label="דף הבית" MuiIcon={HomeOutlined} selected />
          <CustomNavItem label="ניהול קבוצות" MuiIcon={GroupsOutlined} />
          <CustomNavItem label="ניהול טופס" MuiIcon={EditNoteOutlined} />
          <CustomNavItem label="אזור אישי" MuiIcon={BadgeOutlined} />
        </Stack>
        <Box component={Link} to={"/"}>
          <img src={AppLogo} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
