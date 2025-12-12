// src/components/home/StoriesTeaserSection.tsx
import React from "react";

type StoriesTeaserSectionProps = {
  onGoToStories?: () => void;
  hasAnyUnlockedStory?: boolean;
};

export const StoriesTeaserSection: React.FC<StoriesTeaserSectionProps> = ({
  onGoToStories,
  hasAnyUnlockedStory = false,
}) => {
  const stories = [
    {
      id: "story-knife-inward",
      title: "Why the knife faces inward",
      isLocked: true,
    },
    {
      id: "story-fork-journey",
      title: "The journey of the fork from right to left",
      isLocked: true,
    },
    {
      id: "story-glass-placement",
      title: "Why the glass sits above the knife",
      isLocked: true,
    },
  ];

  return (
    <section
      style={{
        padding: "3rem 1.5rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "0.75rem",
          color: "#1F1F1F",
        }}
      >
        Unlock stories & etiquette
      </h2>

      <p
        style={{
          marginBottom: "2rem",
          fontSize: "1rem",
          color: "#3A3A3A",
        }}
      >
        Complete lessons to unlock short stories and etiquette insights that
        make table rules easier to remember.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {stories.map((story) => (
          <article
            key={story.id}
            style={{
              flex: "1 1 260px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: story.isLocked ? "1px solid #F5DBD6" : "1px solid #E5E5E5",
              padding: "1.25rem",
              opacity: story.isLocked ? 0.85 : 1,
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                color: "#777777",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <span>{story.isLocked ? "🔒 Locked" : "🔓 Unlocked"}</span>
            </div>

            <h3
              style={{
                fontSize: "1.1rem",
                color: "#1F1F1F",
              }}
            >
              {story.title}
            </h3>
          </article>
        ))}
      </div>

      <div
        style={{
          marginTop: "2rem",
          textAlign: "right",
        }}
      >
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
          onClick={() => {
            console.log("Go to Stories page");
            onGoToStories?.();
          }}
        >
          View all stories →
        </button>
      </div>
    </section>
  );
};
