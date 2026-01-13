// src/layout/Layout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { useProgress } from "../hooks/useProgress";
import { lessons } from "../data/lessons";


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
        <div className="ts-layout-header-inner">
          <Link to="/" className="ts-layout-logo">
            TableServing.app
          </Link>

          <nav className="ts-layout-nav">
            <Link to="/learn" className="ts-layout-nav-link">Learn</Link>
            <Link to="/practice" className="ts-layout-nav-link">Practice</Link>
            <Link to="/stories" className="ts-layout-nav-link">Stories 🔒</Link>
          </nav>
        </div>

        {/* ✅ ADD THIS */}
        <div className="ts-layout-progress">
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
