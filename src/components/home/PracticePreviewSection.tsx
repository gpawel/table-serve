// src/components/home/PracticePreviewSection.tsx
import React from "react";

type PracticePreviewSectionProps = {
  onTryPractice: () => void;
};

export const PracticePreviewSection: React.FC<PracticePreviewSectionProps> = ({
  onTryPractice,
}) => {
  return (
    <section
      className="ts-practice-section"
    >
      {/* Left: text + button */}
      <div className="ts-practice-content">
        <h2
          className="ts-practice-title"
        >
          Practice by doing
        </h2>

        <p
          className="ts-practice-description"
        >
          Move the fork, knife, glass, and napkin into place using simple
          drag-and-drop exercises. Get instant feedback on each placement.
        </p>

        <button
          onClick={onTryPractice}
          className="ts-practice-button"
        >
          Try a practice round
        </button>
      </div>

      {/* Right: small mock illustration */}
      <div
        className="ts-practice-visual"
      >
        <div>
          <p
            className="ts-practice-visual-title"
          >
            Preview of practice area
          </p>
          <p
            className="ts-practice-visual-text"
          >
            A simple table layout where you drag items to their correct spots.
          </p>
        </div>
      </div>
    </section>
  );
};
