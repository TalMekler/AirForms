import { IosShare } from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Box, Chip, Stack, Typography } from "@mui/material";
import type { TKit } from "../../types/TKit";
import { dateFormat, isoDateToDate } from "../../utils/datetime";
import UserCard from "../UserCard/UserCard";
import DisplayListForms from './DisplayListForms';
import KitCard from "./KitCard";

interface Props {
    kit: TKit;
}

const MyFolder = ({ kit }: Props) => {

    if (kit.forms.length === 0) {
        return (
            <Box p={5} bgcolor={"#FFFFFF"}>
                <Typography variant="h6" color="textSecondary">
                    אין מסמכים בתיקייה זו
                </Typography>
            </Box>
        );
    }

    return (
        <>
            <Box position="relative" width="100%" maxWidth={400}>
                <AttachFileIcon
                    sx={{
                        position: "absolute",
                        top: -14,
                        left: 12,
                        color: "#001C55",
                        fontSize: 30,
                        transform: "rotate(200deg)",
                        zIndex: 2,
                        borderRadius: "50%",
                    }}
                />
                <KitCard kit={kit} width={"100%"} height={"100%"} borderRadius={2} overflow={"hidden"} boxShadow={3} maxWidth={400}>
                    <Stack bgcolor={"white"} gap={"1.25rem"} p={"1.25rem"}>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                            <KitCard.Title fontSize={20} fontWeight={600} />
                            <IosShare sx={{ cursor: "pointer" }} />
                        </Stack>
                        <Box>
                            <Stack direction={"row"} justifyContent={"space-between"}>
                                <Typography fontSize={15} fontWeight={500} color="#727272">
                                    {kit.forms.length} מסמכים
                                </Typography>
                                <Typography fontSize={15} fontWeight={300} color="black">
                                    {dateFormat(isoDateToDate(kit.createdAt))}
                                </Typography>
                            </Stack>
                            <Box display="flex" flexDirection="row" gap={2}>
                                <DisplayListForms kit={kit} start={0} end={3} />
                                <DisplayListForms kit={kit} start={3} end={6} />
                            </Box>
                        </Box>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <Stack direction={"row"} gap={"0.3125rem"}>
                                <KitCard.Categories maxItemsToRender={3} renderItem={(st: string) => <Chip label={st} sx={{ bgcolor: "#def5fe" }} />} />
                            </Stack>
                            <UserCard user={kit.author}>
                                <Stack direction={"row"} alignItems={"center"} gap={1}>
                                    <UserCard.Avatar sx={{ width: 24, height: 24 }} />
                                    <UserCard.FullName fontSize={15} color="#727272" />
                                </Stack>
                            </UserCard>
                        </Stack>
                    </Stack>
                </KitCard>
            </Box>
        </>
    )
}

export default MyFolder;
