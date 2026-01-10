// src/pages/StoriesPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { stories } from "../data/stories";
import { readStoredProgress } from "../data/progress";

export const StoriesPage: React.FC = () => {
  const completed = new Set(readStoredProgress().completedLessonIds);

  return (
    <div style={{ padding: "1rem 1.5rem", maxWidth: 960, margin: "0 auto" }}>
      <h1>Stories</h1>

      <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}>
        {stories.map((s) => {
          const unlocked = completed.has(s.requiredLessonId);

          return (
            <div
              key={s.id}
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: 12,
                padding: "0.9rem 1rem",
                opacity: unlocked ? 1 : 0.55,
                background: "white",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <div style={{ fontWeight: 700 }}>
                  {s.title} {!unlocked && "🔒"}
                </div>
                {!unlocked && (
                  <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Unlock by completing Lesson #{s.requiredLessonId}
                  </div>
                )}
              </div>

              {s.excerpt && <p style={{ marginTop: "0.5rem" }}>{s.excerpt}</p>}

              {unlocked ? (
                <Link to={`/stories/${s.id}`} style={{ display: "inline-block", marginTop: "0.5rem" }}>
                  Read story →
                </Link>
              ) : (
                <div style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.8 }}>
                  Complete Lesson #{s.requiredLessonId} to unlock.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
