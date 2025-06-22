import { Box, Stack, Typography, type SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import { Link, useLocation } from "react-router-dom";

interface CustomNavItemProps {
  label: string;
  MuiIcon: ComponentType<SvgIconProps>;
  navigateToPath?: string;
}

const CustomNavItem = ({ label, MuiIcon, navigateToPath = "/" }: CustomNavItemProps) => {
  const location = useLocation();
  const isSelected = location.pathname === navigateToPath;
  return (
    <Box component={Link} to={navigateToPath} sx={{ textDecoration: "none", color: "inherit" }}>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          gap: "0.75rem",
          p: "0.75rem",
          borderRadius: "1.25rem",
          boxShadow: isSelected ? "0 0.125rem 0.625rem 0 #001C553a" : 0,
          transition: "0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0 0.125rem 0.625rem 0 #001C553a",
            bgcolor: "#EDEDED",
          },
        }}
      >
        <Box
          sx={{
            bgcolor: isSelected ? "#EDF5FE" : "#F4F4F4",
            boxShadow: "0 0.125rem 0.25rem 0 #0A24721A",
            borderRadius: "0.75rem",
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MuiIcon />
        </Box>
        <Typography variant="body1">{label}</Typography>
      </Stack>
    </Box>
  );
};

export default CustomNavItem;
