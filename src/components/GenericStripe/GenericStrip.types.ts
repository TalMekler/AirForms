import type { GridProps } from "@mui/material";
import type { ReactNode } from "react";

export type GridItemProps = Omit<GridProps, "container"> & { item?: true };

export type GenericStripProps<T> = {
  title: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
  gridProps?: GridProps;
  itemGridProps?: GridItemProps;
  maxItemsToShow: number;
  emptyMessage?: string;
  actionButton?: ReactNode;
  actionButtonText?: string;
};
