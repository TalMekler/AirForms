import { Bookmark, IosShare } from "@mui/icons-material";
import { Box, Chip, Stack, Typography } from "@mui/material";
import type { TForm } from "../../types/TForm";
import FormCard from "./FormCard";

type MyFormsFormCardProps = {
  form: TForm;
};
const MyFormsFormCard = ({ form }: MyFormsFormCardProps) => {
  return (
    <>
      <FormCard form={form} width={"100%"} height={"100%"} borderRadius={2} overflow={"hidden"} boxShadow={3} maxWidth={400}>
        <Stack bgcolor={"white"} gap={"1.25rem"} p={"1.25rem"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"} gap={"0.5625rem"}>
              <Box>
                <FormCard.Image width={32} height={32} />
              </Box>
              <FormCard.Title variant="h3" fontSize={20} fontWeight={600} numOfRows={1} />
            </Stack>
            <FormCard.IsPublishedChip />
            <Stack direction={"row"} alignItems={"center"} gap={"0.5625rem"}>
              <Stack direction={"row"} gap={"0.3125rem"}>
                <Bookmark />
                <IosShare sx={{ cursor: "pointer" }} />
              </Stack>
            </Stack>
          </Stack>
          <FormCard.Description fontSize={15} fontWeight={500} color="#727272" numOfRows={2} />
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={"0.3125rem"}>
              <FormCard.Categories maxItemsToRender={3} renderItem={(st: string) => <Chip label={st} sx={{ bgcolor: "#def5fe" }} />} />
            </Stack>
            <Typography variant="body2" fontSize={15} color="#727272">
              זמן מילוי כ-{form.timeToFill}
            </Typography>
          </Stack>
        </Stack>
      </FormCard>
    </>
  );
};

export default MyFormsFormCard;
