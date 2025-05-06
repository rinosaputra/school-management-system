import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./features/_theme/provider.tsx";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { Buffer } from "buffer/"; 
import process from "process";

if (window) {
  window.Buffer = window.Buffer || Buffer;
  window.process = window.process || process;
}


if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
