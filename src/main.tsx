import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Rtl from "./components/RTL.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Rtl>
        <App />
      </Rtl>
    </ThemeProvider>
  </StrictMode>
);
