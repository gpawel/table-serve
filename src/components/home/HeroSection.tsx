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
      {/* Left: text + buttons */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "2.2rem",
            lineHeight: 1.2,
            marginBottom: "1rem",
            color: "#1F1F1F",
          }}
        >
          Learn table serving the simple, visual way.
        </h1>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
            color: "#3A3A3A",
          }}
        >
          Short lessons, drag-and-drop practice, and stories that make etiquette
          easy to remember.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <button
            onClick={onStartLesson}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#F5DBD6", // blush pink
              color: "#1F1F1F",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            Start with Lesson 1
          </button>

          <button
            onClick={onTryPractice}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              border: "1px solid #C8B89F", // subtle accent
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "#1F1F1F",
              fontSize: "1rem",
            }}
          >
            Try practice first
          </button>
        </div>
      </div>

      {/* Right: simple placeholder illustration */}
      <div
        style={{
          flex: 1,
          minHeight: "220px",
          borderRadius: "16px",
          border: "1px solid #E5E5E5",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 40%, #F5DBD6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <div>
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "4px solid white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              margin: "0 auto 0.75rem",
            }}
          />
          <p
            style={{
              fontSize: "0.95rem",
              color: "#3A3A3A",
            }}
          >
            Imagine a simple, elegant place setting here:
            <br />
            plate, fork, knife, glass, napkin.
          </p>
        </div>
      </div>
    </section>
  );
};
