import {
    Typography,
    type TypographyProps
} from "@mui/material";

type EllipsisTextProps = {
  text: string;
  numOfRows?: number;
};
const EllipsisText = ({
  text,
  numOfRows,
  ...typographyProps
}: EllipsisTextProps & Omit<TypographyProps, "children">) => {
  if (numOfRows && numOfRows < 1) {
    throw new Error("numOfRows must be at least 1");
  }
  const { sx, ...otherTypographyProps } = typographyProps;
  return numOfRows ? (
    <Typography
      {...otherTypographyProps}
      sx={{
        ...sx,
        display: "-webkit-box",
        WebkitLineClamp: numOfRows, // מספר השורות
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {text}
    </Typography>
  ) : (
    <Typography {...typographyProps}> {text} </Typography>
  );
};

export default EllipsisText;
