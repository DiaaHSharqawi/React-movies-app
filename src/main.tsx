import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";
import { router } from "./modules/Routes.ts";
import { appTheme } from "./modules/shared/theme/themes.ts";

const quertyClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={quertyClient}>
      <ThemeProvider theme={appTheme}>
        <RouterProvider router={router} />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
