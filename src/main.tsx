import App from "./App.js";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";




const rootElement: HTMLElement = document.getElementById('root') ?? document.body;
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

