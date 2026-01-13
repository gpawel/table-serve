// src/components/home/HowItWorksSection.tsx
import React from "react";

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="ts-how-section"
    >
      {/* Section title */}
      <h2 className="ts-how-title">
        How it works
      </h2>

      <p className="ts-how-subtitle">
        A simple three-step learning flow.
      </p>

      {/* Three steps container */}
      <div
        className="ts-how-steps"
      >
        {/* Step 1 */}
        <HowItWorksCard
          icon="📘"
          title="Learn"
          description="Read short lessons with clear visuals."
        />

        {/* Step 2 */}
        <HowItWorksCard
          icon="🖱️"
          title="Practice"
          description="Use drag-and-drop exercises to reinforce learning."
        />

        {/* Step 3 */}
        <HowItWorksCard
          icon="🔓"
          title="Unlock stories"
          description="Complete lessons to unlock etiquette insights."
        />
      </div>
    </section>
  );
};

// Small inner component for each card
type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const HowItWorksCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <div
    className="ts-how-card"
  >
    <div className="ts-how-icon">{icon}</div>

    <h3
      className="ts-how-card-title"
    >
      {title}
    </h3>

    <p
      className="ts-how-card-text"
    >
      {description}
    </p>
  </div>
);
