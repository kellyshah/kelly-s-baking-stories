import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const hasPreRenderedContent = container.children.length > 0;

if (hasPreRenderedContent) {
  hydrateRoot(container, <App />);
} else {
  // Dev mode or no SSR content - clear any comments and do full render
  container.innerHTML = "";
  createRoot(container).render(<App />);
}
