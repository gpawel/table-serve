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
    <section className="ts-stories-teaser">
      <h2 className="ts-stories-teaser-title">
        Unlock stories & etiquette
      </h2>

      <p className="ts-stories-teaser-description">
        Complete lessons to unlock short stories and etiquette insights that make rules easier to remember.
      </p>

      <div className="ts-stories-teaser-grid">
        {preview.map((story) => {
          const unlocked = isStoryUnlocked(story, completedLessons);
          return (
            <article
              key={story.id}
              className={
                unlocked
                  ? "ts-stories-teaser-card ts-stories-teaser-card-unlocked"
                  : "ts-stories-teaser-card ts-stories-teaser-card-locked"
              }
            >
              <div className="ts-stories-teaser-meta">
                {unlocked ? "🔓 Unlocked" : "🔒 Locked"} • Unlock after Lesson {story.requiredLessonId}
              </div>

              <h3 className="ts-stories-teaser-card-title">
                {story.title}
              </h3>
            </article>
          );
        })}
      </div>

      <div className="ts-stories-teaser-actions">
        <button
          className="ts-stories-teaser-button"
          onClick={() => onGoToStories?.()}
        >
          View all stories →
        </button>
      </div>
    </section>
  );
};
