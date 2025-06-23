import { Box, Grid, Typography } from "@mui/material";
import type { GenericStripProps, GridItemProps } from "./GenericStrip.types";

const GenericStrip = <T,>({
  title,
  items,
  renderItem,
  gridProps = {
    spacing: 3,
    container: true,
    justifyContent: "center",
  },
  itemGridProps = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  } as GridItemProps,
  maxItemsToShow,
  emptyMessage = "אין פריטים להצגה",
  actionButton,
  actionButtonText,
}: GenericStripProps<T>) => {
  const itemsToRender = maxItemsToShow ? items.slice(0, maxItemsToShow) : items;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "2000px",
        marginX: "auto",
      }}
    >
      {/* כותרת הסטריפ */}
      <Box display="flex" justifyContent="center" mb={3}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>

      {itemsToRender.length === 0 ? (
        <Typography color="textSecondary" align="center">
          {emptyMessage}
        </Typography>
      ) : (
        <>
          <Grid
            container
            {...gridProps}
            sx={{
              width: "100%",
              margin: "0 auto",
              ...gridProps?.sx,
            }}
          >
            {itemsToRender.map((item, index) => (
              <Grid
                item
                key={index}
                {...itemGridProps}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  ...itemGridProps?.sx,
                }}
              >
                {renderItem(item)}
              </Grid>
            ))}
          </Grid>

          {(actionButton || actionButtonText) && (
            <Box mt={2} display="flex" justifyContent="flex-end">
              {actionButton ?? (
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    color: "primary.main",
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  {actionButtonText}
                  <Box component="span" ml={1} fontSize="small">
                    {">"}
                  </Box>
                </Typography>
              )}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default GenericStrip;
