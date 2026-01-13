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
      <div className="ts-page-container">
        <h1>Story not found</h1>
        <Link to="/stories">← Back to stories</Link>
      </div>
    );
  }

  const completedLessons = readStoredProgress().completedLessonIds;
  const unlocked = isStoryUnlocked(story, completedLessons);

  if (!unlocked) {
    return (
      <div className="ts-page-container">
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
    <div className="ts-page-container">
      <Link to="/stories">← Back to stories</Link>

      <h1 className="ts-story-title">{story.title}</h1>

      <div className="ts-story-content">
        {story.content.map((paragraph, index) => (
          <p key={index} className="ts-story-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
