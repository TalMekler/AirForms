import {
  CollectionsBookmarkOutlined,
  DirectionsCarFilled,
  Diversity3,
  FactCheckOutlined,
  Insights,
} from "@mui/icons-material";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import type { TFilterCategory } from "../../../types/TFilterCategory";

export const filterCategories: TFilterCategory[] = [
  { title: "לוגיסטיקה", muiIcon: Insights },
  { title: "שלישות", muiIcon: Diversity3 },
  { title: "רכב", muiIcon: DirectionsCarFilled },
  { title: "פטורים", muiIcon: FactCheckOutlined },
  { title: "קורסים", muiIcon: CollectionsBookmarkOutlined },
  { title: "סיווג", muiIcon: EditCalendarOutlinedIcon },
];
