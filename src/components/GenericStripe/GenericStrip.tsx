import { Box, Grid, Typography } from "@mui/material";
import type { GenericStripProps } from "./GenericStrip.types";

const GenericStrip = <T,>({
  title,
  items,
  renderItem,
  gridProps,
  itemGridProps,
  maxItemsToShow,
  emptyMessage = "אין פריטים להצגה",
  actionButton,
  actionButtonText,
}: GenericStripProps<T>) => {
  const itemsToRender = maxItemsToShow ? items.slice(0, maxItemsToShow) : items;

  return (
    <Box mb={4} px={6}>
      {/* כותרת הסטריפ */}
      <Box display="flex" justifyContent="center" mb={2}>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
      </Box>

      {itemsToRender.length === 0 ? (
        <Typography color="textSecondary" align="center">
          {emptyMessage}
        </Typography>
      ) : (
        <Grid container spacing={2} {...gridProps}>
          {itemsToRender.map((item, index) => (
            <Grid item key={index} {...itemGridProps}>
              {renderItem(item)}
            </Grid>
          ))}

          {(actionButton || actionButtonText) && (
            <Grid item {...itemGridProps}>
              {actionButton ?? (
                <Typography
                                      variant="body2"
                                      justifyContent={"flex-end"}
                  sx={{
                    cursor: "pointer",
                    color: "primary.main",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {actionButtonText}
                  <Box component="span" ml={1} fontSize="small">
                    {">"}
                  </Box>
                </Typography>
              )}
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default GenericStrip;
