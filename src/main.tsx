import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Rtl from "./components/RTL.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Rtl>
      <App />
    </Rtl>
  </StrictMode>
);
