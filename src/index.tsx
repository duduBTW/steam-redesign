import { createRoot } from "react-dom/client";

// Pages
import HomePage from "./presentation/home";

import "sanitize.css";
import "./index.css";

function App() {
  return <HomePage />;
}

const containerElement = document.getElementById("root");

if (!containerElement) {
  throw new Error("div with `root` id not found on public `index.html`");
}

const root = createRoot(containerElement);
root.render(<App />);
