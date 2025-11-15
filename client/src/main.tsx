import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import cacheRtl from "./lib/rtl-cache.ts";

const theme = createTheme({
  direction: "rtl",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <App />
        </div>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
