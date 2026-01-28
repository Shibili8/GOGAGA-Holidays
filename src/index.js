import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UIProvider } from "./context/UIContext";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <UIProvider>
    <App />
  </UIProvider>
);
