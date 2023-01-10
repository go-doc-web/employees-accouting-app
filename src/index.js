import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componets/app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
