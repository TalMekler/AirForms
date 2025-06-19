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
    <Box padding={gridProps?.padding || 0} mb={4}>
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
        <>
          <Grid container justifyContent="center" {...gridProps}>
            {itemsToRender.map((item, index) => (
              <Grid item key={index} {...itemGridProps}>
                {renderItem(item)}
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            {actionButton ??
              (actionButtonText && (
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    color: "primary.main",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {actionButtonText}
                  <Box component="span" ml={1} fontSize="small">
                    {"<"}
                  </Box>
                </Typography>
              ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default GenericStrip;
