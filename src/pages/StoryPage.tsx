import React from "react";
import { Link, useParams } from "react-router-dom";
import { stories } from "../data/stories";
import { readStoredProgress } from "../data/progress";
import { isStoryUnlocked } from "../data/stories";

export const StoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const story = stories.find((s) => s.id === id);

  if (!story) {
    return (
      <div style={{ padding: "1rem 1.5rem", maxWidth: 960, margin: "0 auto" }}>
        <h1>Story not found</h1>
        <Link to="/stories">← Back to stories</Link>
      </div>
    );
  }

  const completedLessons = readStoredProgress().completedLessonIds;
  const unlocked = isStoryUnlocked(story, completedLessons);

  if (!unlocked) {
    return (
      <div style={{ padding: "1rem 1.5rem", maxWidth: 960, margin: "0 auto" }}>
        <h1>{story.title} 🔒</h1>
        <p>
          This story unlocks after completing Lesson{" "}
          <strong>{story.requiredLessonId}</strong>.
        </p>
        <Link to="/stories">← Back to stories</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem 1.5rem", maxWidth: 960, margin: "0 auto" }}>
      <Link to="/stories">← Back to stories</Link>

      <h1 style={{ marginTop: "0.75rem" }}>{story.title}</h1>

      <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}>
        {story.content.map((paragraph, index) => (
          <p key={index} style={{ lineHeight: 1.6 }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
