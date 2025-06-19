import { Box, Stack, Typography } from "@mui/material";
import { dateFormat, isoDateToDate } from "../../utils/datetime";
import UserCard from "../UserCard/UserCard";
import FormCard from "./FormCard";
import type { TForm } from "../../types/TForm";

type NewFormsFormCardProps = {
  form: TForm;
};
const NewFormsFormCard = ({ form }: NewFormsFormCardProps) => {
  return (
    <FormCard form={form} width={"100%"} height={"100%"} borderRadius={2} overflow={"hidden"} boxShadow={3}>
      <Stack
        justifyContent={"end"}
        height={160}
        p={"21px"}
        sx={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${form.image})`,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction={"row"} gap={1}>
            <FormCard.Categories
              renderItem={(st: string) => (
                <Box bgcolor={"white"} py={"3px"} px={"5px"} borderRadius={1}>
                  <Typography fontSize={11} color="#001c55">
                    {st}
                  </Typography>
                </Box>
              )}
            />
          </Stack>
          <Typography fontSize={15} fontWeight={300} color="white">
            {dateFormat(isoDateToDate(form.createdAt))}
          </Typography>
        </Stack>
      </Stack>
      <Stack p={2} gap={2} flex={1}>
        <FormCard.Title fontSize={20} fontWeight={600} />
        <FormCard.Description fontSize={15} fontWeight={500} color="#727272" />
        <Stack mt={"auto"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <UserCard user={form.author}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <UserCard.Avatar sx={{ width: 24, height: 24 }} />
              <UserCard.FullName fontSize={15} color="#727272" />
            </Stack>
          </UserCard>
          <Typography color="#727272">זמן מילוי כ-{form.timeToFill}</Typography>
        </Stack>
      </Stack>
    </FormCard>
  );
};

export default NewFormsFormCard;
