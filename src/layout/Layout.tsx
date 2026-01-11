// src/layout/Layout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { useProgress } from "../hooks/useProgress";
import { lessons } from "../data/lessons";



const navLinkStyle: React.CSSProperties = {
  color: "#1F1F1F",
  textDecoration: "none",
  padding: "0.25rem 0.5rem",
  display: "inline-block",
};


type LayoutProps = {
  children: React.ReactNode;
};

// src/layout/Layout.tsx

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const totalLessonIds = lessons.map((l) => l.id);
  const progress = useProgress(totalLessonIds);

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
          <Link to="/" style={{ fontWeight: 600, textDecoration: "none", color: "#1F1F1F" }}>
            TableServing.app
          </Link>

          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link to="/learn" style={navLinkStyle}>Learn</Link>
            <Link to="/practice" style={navLinkStyle}>Practice</Link>
            <Link to="/stories" style={navLinkStyle}>Stories 🔒</Link>
          </nav>
        </div>

        {/* ✅ ADD THIS */}
        <div style={{ maxWidth: 960, margin: "0.75rem auto" }}>
          <ProgressBar
            completedCount={progress.completedCount}
            totalCount={progress.totalCount}
            percent={progress.percent}
          />
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
};

