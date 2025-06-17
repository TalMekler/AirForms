import CircleIcon from '@mui/icons-material/Circle';
import ShareIcon from '@mui/icons-material/Share';
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { form } from "../../mockData/forms";
// Make sure FormCardComponent.tsx exists in the same folder, or update the path if it's elsewhere.
import FormCard from "./FormCardComponent";
const MyFormCards = () => {
    return (
        <>
            <Box p={5} boxShadow={3}>
                <FormCard form={form}>
                    <Box width={400} borderRadius={2} overflow={"hidden"}>
                        <Stack p={2} gap={2}>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                <Stack alignItems={"center"} direction={"row"} spacing={1}>
                                    <FormCard form={form}>
                                        <FormCard.Image sx={{ width: 24, height: 24 }} />
                                    </FormCard>
                                    <FormCard.Title fontSize={20} fontWeight={600} />
                                </Stack>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <ShareIcon sx={{ fontSize: 20, color: "#5C5C5C", cursor: "pointer" }} />
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        sx={{
                                            backgroundColor: "#ecf9ec",
                                            color: "green",
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: "20px",
                                        }}
                                    >
                                        {form.isPublished === true ?
                                            <Typography fontWeight="bold" fontSize="14px">
                                                פעיל
                                            </Typography> :
                                            <Typography fontWeight="bold" fontSize="14px">
                                                לא פעיל
                                            </Typography>}
                                        <CircleIcon sx={{ fontSize: 12, ml: 1, color: "green" }} />
                                    </Box>
                                </Box>
                            </Stack>
                            <Box>
                                <FormCard.Description fontSize={15} fontWeight={500} color="#727272" />
                            </Box>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                <Stack >
                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                        <Stack direction={"row"} gap={1}>
                                            <FormCard.Categories
                                                renderItem={(st: string) => (
                                                    <Box bgcolor={"white"} py={"3px"} px={"5px"} borderRadius={1} borderColor={"#001c55"} border={1}>
                                                        <Typography fontSize={11} color="#001c55">
                                                            {st}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            />
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Typography color="#727272">זמן מילוי כ-{form.timeToFill}</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </FormCard>
            </Box>
        </>
    );
}

export default MyFormCards;