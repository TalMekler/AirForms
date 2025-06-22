import { Bookmark, IosShare } from "@mui/icons-material";
import { Chip, Stack, Typography } from "@mui/material";
import type { TForm } from "../../types/TForm";
import { dateFormat, isoDateToDate } from "../../utils/datetime";
import UserCard from "../UserCard/UserCard";
import FormCard from "./FormCard";

type NewFormsFormCardProps = {
  form: TForm;
};

const NewFormsFormCard = ({ form }: NewFormsFormCardProps) => {
  return (
    <FormCard form={form} width={"100%"} height={"100%"} borderRadius={2} overflow={"hidden"} boxShadow={3} maxWidth={400} bgcolor={"white"}>
      <Stack
        height={160}
        p={"21px"}
        sx={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${form.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction={"row"} gap={1}>
            <FormCard.Categories maxItemsToRender={4} renderItem={(st: string) => <Chip label={st} sx={{ fontSize: 12, color: "#100F18", bgcolor: "#edf5fe" }} />} />
          </Stack>
          <Typography fontSize={14} fontWeight={300} color="white">
            {dateFormat(isoDateToDate(form.createdAt))}
          </Typography>
        </Stack>
      </Stack>
      <Stack p={"21px"} gap={2}>
        <Stack direction={"row"} gap={0.5} justifyContent={"space-between"}>
          <FormCard.Title fontSize={20} fontWeight={600} numOfRows={1} sx={{ color: 'white' }} />
          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <Bookmark sx={{ color: "white", cursor: "pointer", opacity: 0.8 }} />
            <IosShare sx={{ color: "white", cursor: "pointer", opacity: 0.8 }} />
          </Stack>
        </Stack>
        <FormCard.Description
          fontSize={15}
          fontWeight={400}
          color="rgba(255, 255, 255, 0.7)"
          numOfRows={2}
        />
        <Stack mt={"auto"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <UserCard user={form.author}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <UserCard.Avatar sx={{ width: 24, height: 24 }} />
              <UserCard.FullName fontSize={14} sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
            </Stack>
          </UserCard>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 14 }}>
            זמן מילוי כ-{form.timeToFill}
          </Typography>
        </Stack>
      </Stack>
    </FormCard>
  );
};

export default NewFormsFormCard;
