import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { DocsWrapper } from "./app/components/DocsWrapper.tsx";
import "./styles/index.css";

const params = new URLSearchParams(window.location.search);
const useWrapper = params.get("wrapper") === "true";

const root = useWrapper ? (
  <DocsWrapper>
    <App />
  </DocsWrapper>
) : (
  <App />
);

createRoot(document.getElementById("root")!).render(root);

// When embedded in an iframe, continuously report content height to the parent
// so the iframe can auto-size. Uses ResizeObserver for efficiency.
if (window.parent !== window) {
  let lastHeight = 0;
  const root = document.getElementById("root")!;
  const reportHeight = () => {
    const height = root.scrollHeight;
    if (height !== lastHeight) {
      lastHeight = height;
      window.parent.postMessage({ type: "docs-prototype-height", height }, "*");
    }
  };

  const observer = new ResizeObserver(reportHeight);
  observer.observe(root);
  reportHeight();
}
