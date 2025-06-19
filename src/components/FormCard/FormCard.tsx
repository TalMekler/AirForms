/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Chip, Typography, type BoxProps, type TypographyProps } from "@mui/material";
import { type PropsWithChildren, type ReactNode } from "react";
import { FormCardContext, useFormCardContext } from "../../context/FormCardContext";
import type { TForm } from "../../types/TForm";

type FormCardProps = {
  form: TForm;
};

const FormCard = ({ children, form }: PropsWithChildren & FormCardProps) => {
  return <FormCardContext.Provider value={form}>{children}</FormCardContext.Provider>;
};

export default FormCard;

FormCard.Title = ({ ...props }: Omit<TypographyProps, "children">) => {
  const { title } = useFormCardContext();
  return <Typography {...props}>{title}</Typography>;
};

FormCard.Description = ({ ...props }: Omit<TypographyProps, "children">) => {
  const { description } = useFormCardContext();
  return <Typography {...props}>{description}</Typography>;
};

FormCard.Image = ({ ...props }: Omit<BoxProps, "children">) => {
  const { image } = useFormCardContext();
  return (
    <Box {...props}>
      <img src={image} style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

FormCard.Categories = ({ renderItem }: { renderItem?: (category: string) => ReactNode }) => {
  const { categories } = useFormCardContext();
  return categories.length > 0 ? (
    renderItem ? (
      categories.map((category) => renderItem(category))
    ) : (
      categories.map((category) => <Chip label={category} />)
    )
  ) : (
    <></>
  );
};

FormCard.Tags = ({
  renderItem,
  ...props
}: Omit<BoxProps, "children"> & { renderItem?: (tag: string) => ReactNode }) => {
  const { tags } = useFormCardContext();
  return (
    <Box {...props}>{renderItem ? tags.map((tag) => renderItem(tag)) : tags.map((tag) => <Chip label={tag} />)}</Box>
  );
};
