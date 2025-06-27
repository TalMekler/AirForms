import {
  Typography,
  type TypographyProps
} from "@mui/material";

type EllipsisTextProps = {
  text: string;
  numOfRows?: number;
  maxChars?: number;
};
const EllipsisText = ({
  text,
  numOfRows,
  maxChars,
  ...typographyProps

}: EllipsisTextProps & Omit<TypographyProps, "children">) => {
  if (numOfRows && numOfRows < 1) {
    throw new Error("numOfRows must be at least 1");
  }
  const { sx, ...otherTypographyProps } = typographyProps;

  const truncatedText =
    maxChars && text.length > maxChars
      ? text.slice(0, maxChars) + "…"
      : text;

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
      {truncatedText}
    </Typography>
  ) : (
    <Typography {...typographyProps}> {truncatedText}  </Typography>
  );
};

export default EllipsisText;
