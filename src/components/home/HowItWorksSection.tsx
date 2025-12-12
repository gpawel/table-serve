// src/components/home/HowItWorksSection.tsx
import React from "react";

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      style={{
        padding: "3rem 1.5rem",
        maxWidth: "960px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Section title */}
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "1rem",
          color: "#1F1F1F",
        }}
      >
        How it works
      </h2>

      <p
        style={{
          marginBottom: "2.5rem",
          fontSize: "1rem",
          color: "#3A3A3A",
        }}
      >
        A simple three-step learning flow.
      </p>

      {/* Three steps container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
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
    style={{
      flex: "1 1 220px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E5E5E5",
      borderRadius: "12px",
      padding: "1.5rem",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    }}
  >
    <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>

    <h3
      style={{
        fontSize: "1.2rem",
        marginBottom: "0.5rem",
        color: "#1F1F1F",
      }}
    >
      {title}
    </h3>

    <p
      style={{
        fontSize: "0.95rem",
        color: "#3A3A3A",
        lineHeight: 1.4,
      }}
    >
      {description}
    </p>
  </div>
);
