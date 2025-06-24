import { Bookmark, IosShare } from "@mui/icons-material";
import { Box, Chip, Stack, Typography } from "@mui/material";
import type { TForm } from "../../types/TForm";
import { dateFormat, isoDateToDate } from "../../utils/datetime";
import FormCard from "./FormCard";

type FormCardBackgroundImageprops = {
  form: TForm;
};

const FormCardBackgroundImage = ({ form }: FormCardBackgroundImageprops) => {
  return (
    <FormCard form={form}>
      <Box sx={{ width: 829.5, height: 338.3, borderRadius: "8px", overflow: "hidden", backgroundImage: `url(${form.image})`, backgroundSize: "cover", backgroundPosition: "center", flexDirection: "column", display: "flex", justifyContent: "space-between" }}>
        <Box padding="18px 20px">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1}>
              <FormCard.Categories maxItemsToRender={3} renderItem={(st: string) => <Chip label={st} sx={{ fontSize: 12, color: "#100F18", bgcolor: "#edf5fe" }} />} />
            </Stack>
            <Typography color="white" fontSize={14}>
              {dateFormat(isoDateToDate(form.createdAt))}
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))", borderRadius: "0 0 8px 8px" }}>
          <Box padding="18px 20px" display="flex" justifyContent="space-between" alignItems="flex-end">
            <Stack maxWidth="515px">
              <FormCard.Title fontSize={20} fontWeight={600} numOfRows={1} sx={{ color: "white" }} />
              <FormCard.Description fontSize={15} fontWeight={400} numOfRows={2} sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <Bookmark sx={{ color: "#a6e1fa", cursor: "pointer" }} />
              <IosShare sx={{ cursor: "pointer", color: "white" }} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </FormCard>
  );
};

export default FormCardBackgroundImage;
