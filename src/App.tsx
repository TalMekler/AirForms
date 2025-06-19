import { Box, Typography } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FormCard from "./components/FormCard/FormCard";
import GenericStrip from "./components/GenericStripe";
import HomePage from "./components/pages/HomePage/HomePage";
import { myForms } from "./mockData/forms";
import type { TForm } from "./types/TForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Typography>Page Not Found</Typography>} />
      </Routes>
      <Box>
        <GenericStrip<TForm>
          title="טפסים חדשים"
          items={myForms}
          gridProps={{ spacing: 2 }}
          itemGridProps={{ xs: 12, sm: 6, md: 3 }}
          maxItemsToShow={4}
          actionButtonText="לכל הטפסים"
          actionButton={
            <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                color: "primary.main",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box component="span">לכל הטפסים</Box>
              <Box component="span" ml={0.5} fontSize="small">
                {">"}
              </Box>
            </Typography>
          }
          renderItem={(form) => (
            <FormCard
              form={form}
              spacing={1}
              padding={1}
              borderRadius={2}
              boxShadow={1}
            >
              <Box height={150}>
                <FormCard.Image />
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="caption">תאריך פרסום</Typography>
                <FormCard.IsPublishedChip size="small" />
              </Box>

              <Box display="flex" gap={0.5} flexWrap="wrap">
                <FormCard.Categories maxItemsToRender={3} />
              </Box>

              <FormCard.Title fontWeight="bold" />
              <FormCard.Description
                variant="body2"
                color="text.secondary"
                noWrap
              />

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={1}
              >
                <Typography variant="caption">
                  זמן מילוי: {form.timeToFill}
                </Typography>
                <Typography variant="caption">יוצר הטופס</Typography>
              </Box>
            </FormCard>
          )}
        />
      </Box>
    </Router>
  );
}

export default App;
