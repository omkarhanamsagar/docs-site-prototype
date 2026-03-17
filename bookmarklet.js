// Docs Site Prototype Injector
// This bookmarklet replaces the Products section on docs.datadoghq.com
// with an iframe showing the locally running prototype.
//
// Usage: minify and prefix with `javascript:` to create a bookmarklet,
// or use the bookmarklet.html installer page.

(function () {
  var IFRAME_SRC = "http://localhost:5173";
  var TOGGLE_ID = "__docs-prototype-toggle";
  var IFRAME_ID = "__docs-prototype-iframe";
  var WRAPPER_ID = "__docs-prototype-wrapper";

  // If already injected, toggle visibility
  var existing = document.getElementById(WRAPPER_ID);
  if (existing) {
    var hidden = existing.style.display === "none";
    existing.style.display = hidden ? "block" : "none";
    var originals = document.querySelectorAll("[data-docs-prototype-original]");
    originals.forEach(function (el) {
      el.style.display = hidden ? "none" : "";
    });
    var btn = document.getElementById(TOGGLE_ID);
    if (btn) btn.textContent = hidden ? "Restore Original" : "Show Prototype";
    return;
  }

  // The docs homepage structure is:
  //   <main class="container pb-2">
  //     <section class="row guides ...">  ← steps 1,2,3
  //     <section class="row nav-tiles ..."> ← Observability products
  //     <section class="row nav-tiles ..."> ← AI products
  //     ...more product sections...
  //   </main>
  //
  // Strategy: find the <main>, hide all product <section>s (nav-tiles),
  // then insert the iframe wrapper AFTER <main> so it's unconstrained.

  var main = document.querySelector("main.container");
  if (!main) {
    alert("Could not find <main> on this page.\nMake sure you are on docs.datadoghq.com homepage.");
    return;
  }

  // Hide all product tile sections (they have class "nav-tiles")
  var tileSections = main.querySelectorAll("section.nav-tiles");
  tileSections.forEach(function (sec) {
    sec.setAttribute("data-docs-prototype-original", "true");
    sec.style.display = "none";
  });

  // Also remove the bottom padding from <main> so there's no gap
  main.style.paddingBottom = "0";
  main.style.marginBottom = "0";

  // Remove margin-bottom from the steps section (the last visible section in <main>)
  var guides = main.querySelector("section.guides");
  if (guides) {
    guides.style.marginBottom = "0";
    guides.style.paddingBottom = "0";
  }

  // Create wrapper — inserted AFTER <main>, so no container constraints
  var wrapper = document.createElement("div");
  wrapper.id = WRAPPER_ID;
  wrapper.style.cssText = "width:100%;overflow:hidden;padding:0;margin:0;";

  // Create iframe
  var iframe = document.createElement("iframe");
  iframe.id = IFRAME_ID;
  iframe.src = IFRAME_SRC;
  iframe.style.cssText =
    "width:100%;border:none;display:block;min-height:800px;overflow:hidden;";
  iframe.setAttribute("scrolling", "no");

  wrapper.appendChild(iframe);

  // Insert wrapper right after <main>
  main.parentNode.insertBefore(wrapper, main.nextSibling);

  // Listen for height messages from the iframe
  window.addEventListener("message", function (e) {
    if (e.data && e.data.type === "docs-prototype-height") {
      iframe.style.height = e.data.height + "px";
    }
  });

  // Create floating toggle button
  var toggle = document.createElement("button");
  toggle.id = TOGGLE_ID;
  toggle.textContent = "Restore Original";
  toggle.style.cssText = [
    "position:fixed",
    "bottom:24px",
    "right:24px",
    "z-index:99999",
    "padding:10px 18px",
    "background:#632CA6",
    "color:white",
    "border:none",
    "border-radius:8px",
    "font-family:-apple-system,BlinkMacSystemFont,sans-serif",
    "font-size:14px",
    "font-weight:600",
    "cursor:pointer",
    "box-shadow:0 4px 16px rgba(0,0,0,0.15)",
    "transition:background 0.15s ease",
  ].join(";");

  toggle.addEventListener("mouseenter", function () {
    toggle.style.background = "#4e2287";
  });
  toggle.addEventListener("mouseleave", function () {
    toggle.style.background = "#632CA6";
  });

  toggle.addEventListener("click", function () {
    var showing = wrapper.style.display !== "none";
    wrapper.style.display = showing ? "none" : "block";
    var originals = document.querySelectorAll(
      "[data-docs-prototype-original]"
    );
    originals.forEach(function (el) {
      el.style.display = showing ? "" : "none";
    });
    toggle.textContent = showing ? "Show Prototype" : "Restore Original";
  });

  document.body.appendChild(toggle);
})();
