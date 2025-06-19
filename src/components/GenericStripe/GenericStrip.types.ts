import type { GridProps } from "@mui/material";
import type { ReactNode } from "react";

export type GenericStripProps<T> = {
  title: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
  gridProps?: GridProps;
  itemGridProps?: GridProps;
  maxItemsToShow: number;
  emptyMessage?: string;
  actionButton?: ReactNode;
  actionButtonText?: string;
};
