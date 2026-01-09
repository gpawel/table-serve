// src/pages/LearnPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";

export const LearnPage: React.FC = () => {
  return (
    <div style={{ padding: "1rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
      <h1>Learn</h1>
      <p>Start with Lesson 1, then continue to unlock the full experience.</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginTop: "1.5rem" }}>
        {lessons.map((l) => (
          <article
            key={l.id}
            style={{
              flex: "1 1 260px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "1px solid #E5E5E5",
              padding: "1.5rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "0.85rem", color: "#777", marginBottom: "0.25rem" }}>
              Lesson {l.id}
            </div>

            <h3 style={{ marginTop: 0, marginBottom: "0.5rem" }}>{l.title}</h3>
            <p style={{ color: "#3A3A3A", marginTop: 0 }}>{l.summary}</p>

            <Link
              to={`/lesson/${l.id}`}
              style={{
                display: "inline-block",
                marginTop: "0.75rem",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                backgroundColor: "#F5DBD6",
                color: "#1F1F1F",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Open lesson
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
