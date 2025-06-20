import { Box, Typography } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NewFormsFormCard from "./components/FormCard/NewFormsFormCard";
import GenericStrip from "./components/GenericStripe";
import Page from "./components/Page/Page";
import HomePage from "./components/pages/HomePage/HomePage";
import { myForms } from "./mockData/forms";
import type { TForm } from "./types/TForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <HomePage />
            </Page>
          }
        />
        <Route path="*" element={<Typography>Page Not Found</Typography>} />
      </Routes>
      <Box>
        <GenericStrip<TForm>
          title="טפסים חדשים"
          items={myForms}
          maxItemsToShow={10}
          emptyMessage="אין טפסים להצגה"
          actionButtonText="לכל הטפסים"
          renderItem={(form) => <NewFormsFormCard form={form} />}
        />
      </Box>
    </Router>
  );
}

export default App;
