import { Box, Stack, Typography } from "@mui/material";
import FormCard from "../FormCard";
import { dateFormat, isoDateToDate } from "../../utils/datetime";
import UserCard from "../UserCard/UserCard";
import { form } from "../../mockData/forms";


const KitCard = () => {

    return (
        <>
            <Box p={5}>
                <FormCard form={form}>
                    <Box width={400} borderRadius={2} overflow={"hidden"}>
                        <Stack
                            justifyContent={"end"}
                            height={160}
                            p={"21px"}
                        >
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            </Stack>
                        </Stack>
                        <Stack p={2} gap={2}>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                <FormCard.Title fontSize={20} fontWeight={600} />
                                <Typography fontSize={15} fontWeight={300} color="black">
                                    {dateFormat(isoDateToDate(form.createdAt))}
                                </Typography>
                            </Stack>
                            <Box>
                                <Typography fontSize={15} fontWeight={500} color="#727272">
                                    תיאור הטופס
                                </Typography>
                                <FormCard.Description fontSize={15} fontWeight={500} color="#727272" />
                            </Box>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                <Stack direction={"row"} gap={1}>
                                    <FormCard.Categories
                                        renderItem={(st: string) => (
                                            <Box bgcolor={"white"} py={"3px"} px={"5px"} borderRadius={1}>
                                                <Typography fontSize={11} color="#001c55" sx={{ backgroundColor: "#EDF5FE" }} padding={1} borderRadius={2}>
                                                    {st}
                                                </Typography>
                                            </Box>
                                        )}
                                    />
                                </Stack>
                                <UserCard user={form.author}>
                                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                                        <UserCard.Avatar sx={{ width: 24, height: 24 }} />
                                        <UserCard.FullName fontSize={15} color="#727272" />
                                    </Stack>
                                </UserCard>
                            </Stack>
                        </Stack>
                    </Box>
                </FormCard>
            </Box>
        </>
    )
}

export default KitCard;