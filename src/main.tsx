import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootNode = document.getElementById("root");
if (!rootNode) {
  throw new Error("Root node not found!");
}
const root = createRoot(rootNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
