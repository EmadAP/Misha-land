import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { faIR } from "@clerk/localizations";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./app/providers/queryClient.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider
        appearance={{
          theme: "simple",
        }}
        localization={faIR}
        publishableKey={PUBLISHABLE_KEY}
      >
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
