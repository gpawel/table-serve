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
      style={{
        padding: "3rem 1.5rem",
        maxWidth: "960px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      {/* Left: text + button */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "0.75rem",
            color: "#1F1F1F",
          }}
        >
          Practice by doing
        </h2>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
            color: "#3A3A3A",
          }}
        >
          Move the fork, knife, glass, and napkin into place using simple
          drag-and-drop exercises. Get instant feedback on each placement.
        </p>

        <button
          onClick={onTryPractice}
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#F5DBD6",
            color: "#1F1F1F",
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          Try a practice round
        </button>
      </div>

      {/* Right: small mock illustration */}
      <div
        style={{
          flex: 1,
          minHeight: "190px",
          borderRadius: "16px",
          border: "1px dashed #C8B89F",
          backgroundColor: "#F7F7F7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#555555",
              marginBottom: "0.5rem",
            }}
          >
            Preview of practice area
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#777777",
            }}
          >
            A simple table layout where you drag items to their correct spots.
          </p>
        </div>
      </div>
    </section>
  );
};
