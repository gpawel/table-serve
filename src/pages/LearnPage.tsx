// src/pages/LearnPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";

export const LearnPage: React.FC = () => {
  return (
    <div className="ts-page-container">
      <h1>Learn</h1>
      <p>Start with Lesson 1, then continue to unlock the full experience.</p>

      <div className="ts-learn-grid">
        {lessons.map((l) => (
          <article
            key={l.id}
            className="ts-learn-card"
          >
            <div className="ts-learn-card-meta">
              Lesson {l.id}
            </div>

            <h3 className="ts-learn-card-title">{l.title}</h3>
            <p className="ts-learn-card-summary">{l.summary}</p>

            <Link
              to={`/lesson/${l.id}`}
              className="ts-learn-card-link"
            >
              Open lesson
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
