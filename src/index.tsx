import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import "./App.scss";

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
