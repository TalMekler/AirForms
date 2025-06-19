import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import type { TFilterCategory } from "../../../types/TFilterCategory";

export const filterCategories: TFilterCategory[] = [
  { title: "לוגיסטיקה", muiIcon: LocalShippingOutlinedIcon },
  { title: "שלישות", muiIcon: GroupsOutlinedIcon },
  { title: "רכב", muiIcon: DirectionsCarFilledOutlinedIcon },
  { title: "פטורים", muiIcon: LogoutIcon },
  { title: "קורסים", muiIcon: ChromeReaderModeOutlinedIcon },
  { title: "סיווג", muiIcon: EditCalendarOutlinedIcon },
];
