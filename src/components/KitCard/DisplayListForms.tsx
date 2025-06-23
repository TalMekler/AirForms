import { Box } from "@mui/material";
import type { TKit } from "../../types/TKit";
import EllipsisText from "../EllipsisText/EllipsisText";

interface Props {
    kit: TKit;
    start: number;
    end: number;
}

const DisplayListForms = ({ kit, start, end }: Props) => {
    return (
        <Box display="flex" flexDirection="column" >
            {kit.forms.slice(start, end).map((formItem) => (
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
    );
}
export default DisplayListForms;