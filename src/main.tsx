// This file is kept for dev-server compatibility.
// Production uses entry-client.tsx (hydration) and entry-server.tsx (SSG).
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
