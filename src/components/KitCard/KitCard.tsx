import { Box, Stack, Typography } from "@mui/material";
import { dateFormat, isoDateToDate } from "../../utils/datetime";
import UserCard from "../UserCard/UserCard";
import { form } from "../../mockData/forms";
import FormCard from "../FormCard/FormCard";
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import type { TKit } from "../../types/TKit";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EllipsisText from "../EllipsisText/EllipsisText";

interface Props {
    kit: TKit;
}

const KitCard = ({ kit }: Props) => {

    return (
        <>
            <Box p={5} bgcolor={"#FFFFFF"}>
                <FormCard form={form}>
                    <Box position="relative" p={5} bgcolor="#FFFFFF">
                        <Box width={400} borderRadius={2} overflow={"hidden"}>
                            <Stack p={1} gap={2}>
                                <Box>
                                    <AttachFileIcon
                                        sx={{
                                            color: "#001C55",
                                            fontSize: 24,
                                            cursor: "default",
                                            transform: "rotate(200deg)"
                                        }}
                                    />
                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                                        <FormCard.Title fontSize={20} fontWeight={600} />
                                        <Box display="flex" gap={1}>
                                            <ShareIcon sx={{ fontSize: 24, color: "black", cursor: "pointer" }} />
                                            <BookmarkIcon sx={{ fontSize: 24, color: "#A3DEFF", cursor: "pointer" }} />
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack direction={"row"} justifyContent={"space-between"}>
                                        <Typography fontSize={15} fontWeight={500} color="#727272">
                                            {kit.forms.length} מסמכים
                                        </Typography>
                                        <Typography fontSize={15} fontWeight={300} color="black">
                                            {dateFormat(isoDateToDate(form.createdAt))}
                                        </Typography>
                                    </Stack>
                                    <Box display="flex" flexDirection="row" gap={2}>
                                        <Box display="flex" flexDirection="column" >
                                            {kit.forms.slice(0, 3).map((formItem) => (
                                                <Box
                                                    component="li"
                                                    key={formItem.id}
                                                    sx={{
                                                        listStyleType: 'disc',
                                                        ml: 2,
                                                        display: 'list-item',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                    }}
                                                >
                                                    <EllipsisText
                                                        text={formItem.title}
                                                        maxChars={15}
                                                        fontSize={15}
                                                        component="span"
                                                    />
                                                </Box>
                                            ))}
                                        </Box>
                                        <Box display="flex" flexDirection="column" >
                                            {kit.forms.slice(3, 6).map((formItem) => (
                                                <Box
                                                    component="li"
                                                    key={formItem.id}
                                                    sx={{
                                                        listStyleType: 'disc',
                                                        ml: 2,
                                                        display: 'list-item',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                    }}
                                                >
                                                    <EllipsisText
                                                        text={formItem.title}
                                                        maxChars={15}
                                                        fontSize={15}
                                                        component="span"
                                                    />
                                                </Box>

                                            ))}
                                        </Box>
                                    </Box>
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
                    </Box>
                </FormCard>
            </Box>
        </>
    )
}

export default KitCard;
