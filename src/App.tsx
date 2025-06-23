import { Box, Typography } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyFormsFormCard from "./components/FormCard/MyFormsFormCard";
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
        <Route
          path="*"
          element={
            <Page>
              <Typography>Page Not Found</Typography>
            </Page>
          }
        />
      </Routes>
      <Box>
        <GenericStrip<TForm> title="טפסים חדשים" items={myForms} maxItemsToShow={10} emptyMessage="אין טפסים להצגה" actionButtonText="לכל הטפסים" renderItem={(form) => <NewFormsFormCard form={form} />} />
      </Box>
      <Box mt={10}>
        <GenericStrip<TForm> title="טפסים שיצרתי" items={myForms} maxItemsToShow={5} emptyMessage="אין טפסים להצגה" actionButtonText="לכל הטפסים" renderItem={(form) => <MyFormsFormCard form={form} />} />
      </Box>
    </Router>
  );
}

export default App;
