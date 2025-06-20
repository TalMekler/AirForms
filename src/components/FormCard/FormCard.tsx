/* eslint-disable react-hooks/rules-of-hooks */
import { Circle } from "@mui/icons-material";
import { Avatar, Box, Chip, Stack, Typography, type BoxProps, type ChipProps, type StackProps } from "@mui/material";
import { type ComponentProps, type PropsWithChildren, type ReactNode } from "react";
import { FormCardContext, useFormCardContext } from "../../context/FormCardContext";
import type { TForm } from "../../types/TForm";
import EllipsisText from "../EllipsisText/EllipsisText";

type FormCardProps = {
  form: TForm;
};

const FormCard = ({ children, form, ...stackProps }: PropsWithChildren<FormCardProps> & Omit<StackProps, "children">) => {
  return (
    <FormCardContext.Provider value={form}>
      <Stack {...stackProps}>{children}</Stack>
    </FormCardContext.Provider>
  );
};

export default FormCard;

FormCard.Title = ({ ...props }: Omit<ComponentProps<typeof EllipsisText>, "text">) => {
  const { title } = useFormCardContext();
  return <EllipsisText {...props} text={title} />;
};

FormCard.Description = ({ ...props }: Omit<ComponentProps<typeof EllipsisText>, "text">) => {
  const { description } = useFormCardContext();
  return <EllipsisText {...props} text={description} />;
};

FormCard.Image = ({ ...props }: Omit<BoxProps, "children">) => {
  const { image } = useFormCardContext();
  return (
    <Box {...props}>
      <Avatar src={image} style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

type FormCardCategoriesProps = {
  renderItem?: (category: string) => ReactNode;
  maxItemsToRender?: number;
};
FormCard.Categories = ({ renderItem, maxItemsToRender }: FormCardCategoriesProps) => {
  if (maxItemsToRender && maxItemsToRender < 1) throw new Error("maxItemsToRender must be at least 1");

  const { categories } = useFormCardContext();
  const limitedCategories = maxItemsToRender ? categories.slice(0, maxItemsToRender) : categories;

  return limitedCategories.length > 0 ? renderItem ? limitedCategories.map((category) => renderItem(category)) : limitedCategories.map((category) => <Chip label={category} />) : <></>;
};

FormCard.Tags = ({ renderItem, ...props }: Omit<BoxProps, "children"> & { renderItem?: (tag: string) => ReactNode }) => {
  const { tags } = useFormCardContext();
  return <Box {...props}>{renderItem ? tags.map((tag) => renderItem(tag)) : tags.map((tag) => <Chip label={tag} />)}</Box>;
};

FormCard.IsPublishedChip = ({ ...chipProps }: Omit<ChipProps, "label">) => {
  const { isPublished } = useFormCardContext();
  const { sx, ...otherChipProps } = chipProps;
  return (
    <Chip
      {...otherChipProps}
      label={
        <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
          <Circle sx={{ width: 9, height: 9 }} />
          <Typography variant="caption" fontSize={15}>
            {isPublished ? "פעיל" : "לא פעיל"}
          </Typography>
        </Stack>
      }
      sx={{
        ...sx,
        bgcolor: isPublished ? "#f0feed" : "#feeded",
        color: isPublished ? "#259800" : "#DC0004",
      }}
    />
  );
};
