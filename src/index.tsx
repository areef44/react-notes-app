import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/style.css";
import App from "./App";

// Non-null assertion untuk memastikan elemen root ada
const root = createRoot(document.getElementById("root")!);

// Render elemen React ke dalam root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
