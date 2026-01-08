// src/layout/Layout.tsx
import React from "react";
import { Link } from "react-router-dom";


const navLinkStyle: React.CSSProperties = {
  color: "#1F1F1F",
  textDecoration: "none",
  padding: "0.25rem 0.5rem",
  display: "inline-block",
};


type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              fontWeight: 600,
              whiteSpace: "nowrap",
              color: "#1F1F1F",
              textDecoration: "none",
            }}
          >
            TableServing.app
          </Link>


          <nav
            style={{
              fontSize: "0.95rem",
              display: "flex",
              gap: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            <Link to="/learn" style={navLinkStyle}>
              Learn
            </Link>
            <Link to="/practice" style={navLinkStyle}>
              Practice
            </Link>
            <Link to="/stories" style={navLinkStyle}>
              Stories 🔒
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
};
