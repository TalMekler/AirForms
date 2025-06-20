import { BadgeOutlined, EditNoteOutlined, GroupsOutlined, HomeOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AppLogo from "../../assets/appLogo.svg";
import CustomNavItem from "./CustomNavItem";

const NavBar = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Stack direction="row" spacing={2}>
        <CustomNavItem label="דף הבית" MuiIcon={HomeOutlined} navigateToPath="/" />
        <CustomNavItem label="ניהול קבוצות" MuiIcon={GroupsOutlined} navigateToPath="/manage_groups" />
        <CustomNavItem label="ניהול טופס" MuiIcon={EditNoteOutlined} navigateToPath="/manage_form" />
        <CustomNavItem label="אזור אישי" MuiIcon={BadgeOutlined} navigateToPath="/personal_area" />
      </Stack>
      <Box component={Link} to={"/"}>
        <img src={AppLogo} />
      </Box>
    </Stack>
  );
};

export default NavBar;
