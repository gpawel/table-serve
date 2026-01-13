// src/components/home/HeroSection.tsx
import React from "react";

type HeroSectionProps = {
  onStartLesson: () => void;
  onTryPractice: () => void;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLesson,
  onTryPractice,
}) => {
  return (
    <section
      className="ts-hero-section"
    >
      {/* Left: text + buttons */}
      <div className="ts-hero-content">
        <h1 className="ts-hero-title">
          Learn table serving the simple, visual way.
        </h1>

        <p className="ts-hero-description">
          Short lessons, drag-and-drop practice, and stories that make etiquette
          easy to remember.
        </p>

        <div className="ts-hero-actions">
          <button
            onClick={onStartLesson}
            className="ts-hero-primary"
          >
            Start with Lesson 1
          </button>

          <button
            onClick={onTryPractice}
            className="ts-hero-secondary"
          >
            Try practice first
          </button>
        </div>
      </div>

      {/* Right: simple placeholder illustration */}
      <div
        className="ts-hero-visual"
      >
        <div>
          <div
            className="ts-hero-visual-circle"
          />
          <p className="ts-hero-visual-text">
            Imagine a simple, elegant place setting here:
            <br />
            plate, fork, knife, glass, napkin.
          </p>
        </div>
      </div>
    </section>
  );
};
