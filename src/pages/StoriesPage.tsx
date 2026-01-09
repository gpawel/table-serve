// src/pages/StoriesPage.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { loadCompletedLessons } from "../data/progress";
import { stories, isStoryUnlocked, type Story } from "../data/stories";

export const StoriesPage: React.FC = () => {
  const completedLessons = useMemo(() => loadCompletedLessons(), []);
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const selectedStory: Story | undefined = stories.find(
    (s) => s.id === selectedStoryId
  );

  return (
    <div style={{ padding: "1rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
      <h1>Stories</h1>
      <p style={{ color: "#555" }}>
        Stories are a bonus. Complete lessons to unlock them.
      </p>

      <div style={{ marginBottom: "1rem", color: "#777" }}>
        Completed lessons:{" "}
        {completedLessons.length ? completedLessons.join(", ") : "none yet"}
      </div>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {/* Story list */}
        <div style={{ flex: "1 1 320px" }}>
          {stories.map((story) => {
            const unlocked = isStoryUnlocked(story, completedLessons);

            return (
              <button
                key={story.id}
                onClick={() => setSelectedStoryId(story.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "1rem",
                  marginBottom: "0.75rem",
                  borderRadius: "12px",
                  border: unlocked
                    ? "1px solid #E5E5E5"
                    : "1px solid #F5DBD6",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                  opacity: unlocked ? 1 : 0.85,
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#777",
                    marginBottom: "0.25rem",
                  }}
                >
                  {unlocked ? "🔓 Unlocked" : "🔒 Locked"} • Unlock after Lesson{" "}
                  {story.unlockLessonId}
                </div>
                <div style={{ fontWeight: 600 }}>{story.title}</div>
              </button>
            );
          })}
        </div>

        {/* Story viewer */}
        <div
          style={{
            flex: "2 1 420px",
            border: "1px solid #E5E5E5",
            borderRadius: "12px",
            padding: "1rem",
            backgroundColor: "#FFFFFF",
            minHeight: "220px",
          }}
        >
          {!selectedStory ? (
            <div style={{ color: "#777" }}>
              Select a story to preview it.
            </div>
          ) : (
            <StoryViewer
              story={selectedStory}
              completedLessons={completedLessons}
            />
          )}
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Link to="/learn" style={{ color: "#1F1F1F" }}>
          ← Go to lessons
        </Link>
      </div>
    </div>
  );
};

function StoryViewer({
  story,
  completedLessons,
}: {
  story: Story;
  completedLessons: number[];
}) {
  const unlocked = isStoryUnlocked(story, completedLessons);

  if (!unlocked) {
    return (
      <>
        <h2 style={{ marginTop: 0 }}>{story.title}</h2>
        <p style={{ color: "#555" }}>
          This story is locked. Complete Lesson {story.unlockLessonId} to unlock
          it.
        </p>
        <p style={{ color: "#777" }}>
          (Demo note: this is bonus content unlocked through learning.)
        </p>
      </>
    );
  }

  return (
    <>
      <h2 style={{ marginTop: 0 }}>{story.title}</h2>
      {story.content.map((paragraph, index) => (
        <p key={index} style={{ lineHeight: 1.6, color: "#333" }}>
          {paragraph}
        </p>
      ))}
    </>
  );
}
