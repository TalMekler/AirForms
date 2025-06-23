import { Bookmark, IosShare } from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Box, Stack, Typography } from "@mui/material";
import type { TKit } from "../../types/TKit";
import { dateFormat, isoDateToDate } from "../../utils/datetime";
import UserCard from "../UserCard/UserCard";
import DisplayListForms from './DisplayListForms';
import KitCard from "./KitCard";

interface Props {
    kit: TKit;
}

const SearchKitCard = ({ kit }: Props) => {

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
            <Box position="relative" width="100%" >
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
                <KitCard kit={kit} width={"100%"} height={"100%"} borderRadius={2} overflow={"hidden"} boxShadow={3} maxWidth={800}>
                    <Stack direction="row">
                        <Box position="relative" width="50%" height={250}>
                            <KitCard.Image
                                width="100%"
                                height="100%"
                                sx={{ objectFit: "cover" }}
                            />
                            <Box
                                position="absolute"
                                top={20}
                                left={8}
                                borderRadius={2}
                                px={1}
                                py={0.5}

                            >
                                <Typography fontSize={15} fontWeight={300} color="#FFFFFF">
                                    {dateFormat(isoDateToDate(kit.createdAt))}
                                </Typography>
                            </Box>
                            <Box
                                position="absolute"
                                bottom={8}
                                left={8}
                                borderRadius={2}
                                px={1}
                                py={0.5}

                            >
                                <UserCard user={kit.author}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <UserCard.Avatar sx={{ width: 24, height: 24 }} />
                                        <UserCard.FullName fontSize={15} color="#FFFFFF" />
                                    </Stack>
                                </UserCard>
                            </Box>
                        </Box>
                        <Stack bgcolor={"white"} gap={"1.25rem"} p={"1.25rem"} flex={1}>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                                <KitCard.Title fontSize={20} fontWeight={600} />
                                <Stack direction="row">
                                    <Bookmark sx={{ cursor: "pointer", color: "#A6E1FA" }} />
                                    <IosShare sx={{ cursor: "pointer" }} />
                                </Stack>
                            </Stack>
                            <Box>
                                <Typography fontSize={15} fontWeight={500} color="#727272">
                                    {kit.forms.length} מסמכים
                                </Typography>
                                <Box display="flex" flexDirection="row" gap={2}>
                                    <DisplayListForms kit={kit} start={0} end={3} />
                                    <DisplayListForms kit={kit} start={3} end={6} />
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>
                </KitCard>
            </Box>
        </>
    )
}

export default SearchKitCard;