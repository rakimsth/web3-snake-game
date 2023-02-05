import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
const APP_ID = import.meta.env.VITE_ARCANA_APP_ID;

const provider = new AuthProvider(`${APP_ID}`);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </React.StrictMode>
);
