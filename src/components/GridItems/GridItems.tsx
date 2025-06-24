import { Grid, Typography, type GridProps } from '@mui/material';
import { type ReactNode } from 'react';
import type { GridItemProps } from '../GenericStripe/GenericStrip.types';

type GridItemsProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  GridContainerProps?: Omit<GridProps, 'container'>;
  GridItemProps?: Omit<GridItemProps, 'container'>;
  emptyMessage?: string;
};
const GridItems = <T,>({ items, renderItem, GridContainerProps, GridItemProps, emptyMessage = 'אין פריטים להצגה' }: GridItemsProps<T>) => {
  return items.length > 0 ? (
    <Grid container {...GridContainerProps}>
      {items.map((item, index) => (
        <Grid key={index} {...GridItemProps} sx={{ ...GridItemProps?.sx, display: 'flex', alignItems: 'stretch' }}>
          {renderItem(item)}
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography>{emptyMessage}</Typography>
  );
};

export default GridItems;
