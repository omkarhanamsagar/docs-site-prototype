import React from "react";

interface DocsWrapperProps {
  children: React.ReactNode;
}

const DD_PURPLE = "#632CA6";

function DatadogLogo() {
  return (
    <svg width="130" height="28" viewBox="0 0 800 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M140.858 82.4646C137.191 79.1196 133.361 76.0521 131.054 73.4521C128.449 70.5246 127.862 67.8396 128.164 65.1096C128.571 61.4646 131.191 58.6671 134.634 58.0146C138.781 57.2271 143.026 59.2746 144.821 63.0546C146.651 66.9246 146.401 71.2221 145.244 73.7571L140.858 82.4646ZM156.496 110.677C155.146 111.622 153.841 112.522 152.731 113.032C150.706 113.977 148.861 114.252 146.836 113.872C144.326 113.392 142.151 111.832 140.701 109.747C138.319 106.282 137.561 101.572 137.754 97.6422L137.791 96.9822L138.421 96.6072L147.761 91.1847L151.564 89.0922L159.091 84.9522C159.574 83.5947 159.979 82.0947 160.234 80.4147C161.504 72.1947 159.751 65.4147 155.101 60.7347C150.116 55.7247 143.116 53.7522 136.701 55.0347C128.434 56.6847 122.779 63.5397 122.964 71.8497C123.034 75.0222 124.081 78.0297 126.819 81.2847C128.311 83.0547 130.684 85.2597 133.951 88.1172L132.704 90.5322L120.311 98.7222L112.756 103.727L104.716 109.042C103.474 107.972 102.266 107.062 100.906 106.307C94.7762 102.917 87.4262 102.807 81.8162 106.647C77.3912 109.682 74.8262 114.262 74.5937 119.477C74.2862 126.427 78.6562 132.607 85.3712 135.082C91.4312 137.332 98.0312 136.122 103.164 131.842C105.421 129.967 107.119 127.537 108.651 124.702L118.144 118.432L130.171 110.312L134.646 107.432C136.016 109.832 138.064 111.892 140.634 113.182C142.389 114.067 144.281 114.592 146.226 114.702C149.249 114.897 152.131 114.207 155.391 112.312C155.699 112.132 156.539 111.622 156.861 111.382L156.496 110.677ZM99.7262 127.792C95.4812 131.582 89.6912 132.382 85.0262 130.662C80.2412 128.897 76.9712 124.327 76.6562 119.222C76.4312 115.102 78.1212 111.442 81.6062 108.952C86.3612 105.552 92.7162 105.637 97.7862 108.437C100.039 109.687 101.769 111.472 103.879 114.447L104.329 115.112L99.7262 127.792Z"
        fill="#632CA6"
      />
      <text x="180" y="130" fontFamily="'Noto Sans', -apple-system, sans-serif" fontSize="110" fontWeight="700" fill="#1c2b34">
        Docs
      </text>
    </svg>
  );
}

function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "#f3f4f6",
        borderRadius: 8,
        padding: "8px 16px",
        width: 320,
        maxWidth: "100%",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(28,43,52,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <span style={{ color: "rgba(28,43,52,0.4)", fontSize: 14, fontFamily: "'Noto Sans', sans-serif" }}>
        Search docs...
      </span>
      <span style={{ marginLeft: "auto", color: "rgba(28,43,52,0.25)", fontSize: 12, fontFamily: "monospace" }}>
        /
      </span>
    </div>
  );
}

const NAV_ITEMS = ["Essentials", "In The App", "Infrastructure", "Applications", "Security", "Administration"];

export function DocsWrapper({ children }: DocsWrapperProps) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#fff",
          borderBottom: "1px solid rgba(28,43,52,0.08)",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            height: 64,
            gap: 32,
          }}
        >
          <DatadogLogo />
          <div style={{ flex: 1 }} />
          <SearchBar />
        </div>
      </header>

      {/* Secondary nav */}
      <nav
        style={{
          borderBottom: "1px solid rgba(28,43,52,0.06)",
          padding: "0 24px",
          background: "#fafafa",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            gap: 0,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                padding: "12px 16px",
                fontSize: 14,
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 500,
                color: "rgba(28,43,52,0.6)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderBottom: "2px solid transparent",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = DD_PURPLE;
                e.currentTarget.style.borderBottomColor = DD_PURPLE;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(28,43,52,0.6)";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Getting Started steps (simplified replica) */}
      <div style={{ background: "#fff", padding: "48px 24px 40px" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: 1, title: "Install the Agent", desc: "Collect events and metrics from your hosts that send data to Datadog." },
            { num: 2, title: "Set Up Integrations", desc: "Gather metrics, traces, and logs with over 1,000+ built-in integrations." },
            { num: 3, title: "Get Started in App", desc: "Visualize the data collected in Datadog and create dashboards, alerts, and more." },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                flex: "1 1 280px",
                display: "flex",
                gap: 16,
                padding: "20px 24px",
                background: "#fafafa",
                borderRadius: 8,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(99,44,166,0.08)",
                  color: DD_PURPLE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "'Noto Sans', sans-serif",
                }}
              >
                {step.num}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "#1c2b34", fontFamily: "'Noto Sans', sans-serif", marginBottom: 4 }}>
                  {step.title}
                </div>
                <div style={{ fontSize: 13, color: "rgba(28,43,52,0.6)", fontFamily: "'Noto Sans', sans-serif", lineHeight: 1.5 }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products section (the prototype) */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#1c2b34",
          color: "rgba(255,255,255,0.5)",
          padding: "48px 24px",
          marginTop: 0,
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: 13 }}>
            &copy; Datadog 2026
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Terms", "Privacy", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  fontSize: 13,
                  fontFamily: "'Noto Sans', sans-serif",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
