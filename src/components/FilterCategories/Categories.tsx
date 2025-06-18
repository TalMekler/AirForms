import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import type { Category } from "../../types/Category";

export const categories: Category[] = [
  { title: "לוגיסטיקה", icon: <LocalShippingOutlinedIcon fontSize="small" /> },
  { title: "שלישות", icon: <GroupsOutlinedIcon fontSize="small" /> },
  { title: "רכב", icon: <DirectionsCarFilledOutlinedIcon fontSize="small" /> },
  { title: "פטורים", icon: <LogoutIcon fontSize="small" /> },
  { title: "קורסים", icon: <ChromeReaderModeOutlinedIcon fontSize="small" /> },
  { title: "סיווג", icon: <EditCalendarOutlinedIcon fontSize="small" /> },
];
