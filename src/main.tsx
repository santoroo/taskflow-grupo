import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TarefasProvider } from "./contexts/TarefasContext";
import "./styles/variables.css";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TarefasProvider>
      <App />
    </TarefasProvider>
  </StrictMode>,
);
