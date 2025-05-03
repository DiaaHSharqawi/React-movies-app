import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router";
import { router } from "./modules/Routes.ts";
import { appTheme } from "./modules/shared/theme/themes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={router} />
      <App />
    </ThemeProvider>
  </StrictMode>
);
