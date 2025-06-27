import { ArrowBackIosRounded } from "@mui/icons-material";
import { Box, Button, Stack, Typography, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";
import GridItems from "../../GridItems/GridItems";

type HomePageCardsStripeProps<T> = {
  title: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
  buttonText: string;
  buttonOnClick: ButtonProps["onClick"];
};
const HomePageCardsStripe = <T,>({ title, items, renderItem, buttonText, buttonOnClick }: HomePageCardsStripeProps<T>) => {
  return (
    <Stack>
      <Typography variant="h4" fontSize="2.5rem" fontWeight={600} textAlign={"center"} mb={"1.875rem"}>
        {title}
      </Typography>
      <GridItems items={items} renderItem={renderItem} GridContainerProps={{ spacing: 2 }} GridItemProps={{ size: { xs: 12, sm: 6, md: 4, xl: 3 } }} />
      <Box ml={"auto"} mt={"0.9375rem"}>
        <Button variant="text" onClick={buttonOnClick}>
          <Stack direction={"row"} alignItems={"center"} gap={0.5}>
            <Typography>{buttonText}</Typography>
            <ArrowBackIosRounded sx={{ width: "0.875rem", height: "0.875rem" }} />
          </Stack>
        </Button>
      </Box>
    </Stack>
  );
};

export default HomePageCardsStripe;
