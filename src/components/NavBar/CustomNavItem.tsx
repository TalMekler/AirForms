import { Box, Stack, Typography, type SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";

interface CustomNavItemProps {
  label: string;
  MuiIcon: ComponentType<SvgIconProps>;
  navigateToPath?: string;
  selected?: boolean;
}

const CustomNavItem = ({ label, MuiIcon, navigateToPath = "/", selected = false }: CustomNavItemProps) => {
  return (
    <Box component={Link} to={navigateToPath} sx={{ textDecoration: "none", color: "inherit" }}>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          gap: "12px",
          p: "12px",
          borderRadius: "20px",
          boxShadow: selected ? "0 2px 10px 0 #001C553a" : 0,
          transition: "0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0 2px 10px 0 #001C553a",
            bgcolor: "#EDEDED",
          },
        }}
      >
        <Box
          sx={{
            bgcolor: selected ? "#EDF5FE" : "#F4F4F4",
            boxShadow: "0 2px 4 0 #0A24721A",
            borderRadius: "12px",
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
