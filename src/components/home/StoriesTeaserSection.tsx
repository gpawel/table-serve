// src/components/home/StoriesTeaserSection.tsx
import React from "react";
import { stories, isStoryUnlocked } from "../../data/stories";

type StoriesTeaserSectionProps = {
  onGoToStories?: () => void;
  completedLessons?: number[];
};


export const StoriesTeaserSection: React.FC<StoriesTeaserSectionProps> = ({
  onGoToStories,
  completedLessons = [],
}) => {
  const preview = stories.slice(0, 3);

  return (
    <section style={{ padding: "3rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "0.75rem", color: "#1F1F1F" }}>
        Unlock stories & etiquette
      </h2>

      <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#3A3A3A" }}>
        Complete lessons to unlock short stories and etiquette insights that make rules easier to remember.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {preview.map((story) => {
          const unlocked = isStoryUnlocked(story, completedLessons);
          return (
            <article
              key={story.id}
              style={{
                flex: "1 1 260px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                border: unlocked ? "1px solid #E5E5E5" : "1px solid #F5DBD6",
                padding: "1.25rem",
                opacity: unlocked ? 1 : 0.85,
              }}
            >
              <div style={{ fontSize: "0.85rem", color: "#777", marginBottom: "0.5rem" }}>
                {unlocked ? "🔓 Unlocked" : "🔒 Locked"} • Unlock after Lesson {story.unlockLessonId}
              </div>

              <h3 style={{ fontSize: "1.1rem", color: "#1F1F1F", marginTop: 0 }}>
                {story.title}
              </h3>
            </article>
          );
        })}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "right" }}>
        <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontSize: "0.95rem",
            color: "#1F1F1F",
            textDecoration: "underline",
          }}
          onClick={() => onGoToStories?.()}
        >
          View all stories →
        </button>
      </div>
    </section>
  );
};
