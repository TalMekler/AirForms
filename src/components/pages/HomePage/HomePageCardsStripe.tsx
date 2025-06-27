import { Stack, Typography } from "@mui/material";
import React, { type ComponentProps, type ReactNode } from "react";
import GridItems from '../../GridItems/GridItems';

type HomePageCardsStripeProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  title: string;
  buttonText: string;
  buttonOnClick: ComponentProps<"button">["onClick"];
};
const HomePageCardsStripe = <T,>({ items, renderItem, title, buttonText, buttonOnClick }: HomePageCardsStripeProps<T>) => {
  return (
    <Stack>
      <Typography component={"h2"} fontSize={40} fontWeight={600} color="#100f18">
        {title}
      </Typography>
      
    </Stack>
  );
};

export default HomePageCardsStripe;
