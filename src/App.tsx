import { Typography } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Page from "./components/Page/Page";
import HomePage from "./components/pages/HomePage/HomePage";

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
    </Router>
  );
}

export default App;
