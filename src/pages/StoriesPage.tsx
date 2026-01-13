// src/pages/StoriesPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { stories } from "../data/stories";
import { readStoredProgress } from "../data/progress";

export const StoriesPage: React.FC = () => {
  const completed = new Set(readStoredProgress().completedLessonIds);

  return (
    <div className="ts-page-container">
      <h1>Stories</h1>

      <div className="ts-stories-grid">
        {stories.map((s) => {
          const unlocked = completed.has(s.requiredLessonId);

          return (
            <div
              key={s.id}
              className={
                unlocked ? "ts-stories-card" : "ts-stories-card ts-stories-card-locked"
              }
            >
              <div className="ts-stories-card-header">
                <div className="ts-stories-card-title">
                  {s.title} {!unlocked && "🔒"}
                </div>
                {!unlocked && (
                  <div className="ts-stories-card-lock">
                    Unlock by completing Lesson #{s.requiredLessonId}
                  </div>
                )}
              </div>

              {s.excerpt && <p className="ts-stories-card-excerpt">{s.excerpt}</p>}

              {unlocked ? (
                <Link to={`/stories/${s.id}`} className="ts-stories-card-link">
                  Read story →
                </Link>
              ) : (
                <div className="ts-stories-card-locked-note">
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
