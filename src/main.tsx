import { MantineProvider } from "@mantine/core";
import { CustomFonts, GlobalStyles, globalTheme } from "config/theme.config";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={globalTheme} withGlobalStyles withNormalizeCSS>
        <CustomFonts />
        <GlobalStyles />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
