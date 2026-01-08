// src/layout/Layout.tsx
import React from "react";
import { Link } from "react-router-dom";


type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          padding: "1rem 1.5rem",
          borderBottom: "1px solid #E5E5E5",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 600 }}>TableServing.app</div>

          <nav style={{ fontSize: "0.95rem", display: "flex", gap: "1rem" }}>
            <Link style={{ color: "#1F1F1F", textDecoration: "none" }} to="/learn">
              Learn
            </Link>
            <Link style={{ color: "#1F1F1F", textDecoration: "none" }} to="/practice">
              Practice
            </Link>
            <Link style={{ color: "#1F1F1F", textDecoration: "none" }} to="/stories">
              Stories 🔒
            </Link>
          </nav>

        </div>
      </header>

      <main>{children}</main>

      <footer
        style={{
          marginTop: "2rem",
          borderTop: "1px solid #E5E5E5",
          padding: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto", color: "#777777" }}>
          © {new Date().getFullYear()} TableServing.app
        </div>
      </footer>
    </div>
  );
};
