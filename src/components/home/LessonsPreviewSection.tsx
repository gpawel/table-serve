// src/components/home/LessonsPreviewSection.tsx
import React from "react";

type LessonSummary = {
  id: string;
  number: number;
  title: string;
  summary: string;
  level: string;
  minutes: string;
};

type LessonsPreviewSectionProps = {
  onOpenLesson: (lessonId: string) => void;
};

export const LessonsPreviewSection: React.FC<LessonsPreviewSectionProps> = ({
  onOpenLesson,
}) => {
  // For now: hardcoded demo lessons
  const lessons: LessonSummary[] = [
    {
      id: "lesson-1",
      number: 1,
      title: "Basics of Table Setting",
      summary: "Plate, cutlery, glass, napkin — the foundation of every place.",
      level: "Beginner",
      minutes: "5–7 min",
    },
    {
      id: "lesson-2",
      number: 2,
      title: "Plates & Napkins",
      summary: "Different plate types and simple napkin placement rules.",
      level: "Beginner",
      minutes: "5–7 min",
    },
    {
      id: "lesson-3",
      number: 3,
      title: "Cutlery Basics",
      summary: "Where forks, knives, and spoons live around the plate.",
      level: "Beginner",
      minutes: "7–10 min",
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
      {/* Section header */}
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "0.5rem",
          color: "#1F1F1F",
        }}
      >
        Start learning
      </h2>

      <p
        style={{
          marginBottom: "2rem",
          fontSize: "1rem",
          color: "#3A3A3A",
        }}
      >
        Choose your first lesson.
      </p>

      {/* Lessons grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onOpenLesson={() => onOpenLesson(lesson.id)}
          />
        ))}
      </div>

      {/* View all link */}
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
            console.log("View all lessons clicked");
            // later: navigate("/learn")
          }}
        >
          View all lessons →
        </button>
      </div>
    </section>
  );
};

type LessonCardProps = {
  lesson: LessonSummary;
  onOpenLesson: () => void;
};

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onOpenLesson }) => {
  return (
    <article
      style={{
        flex: "1 1 260px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E5E5E5",
        padding: "1.5rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "190px",
      }}
    >
      <div>
        {/* Lesson number */}
        <div
          style={{
            fontSize: "0.85rem",
            color: "#777777",
            marginBottom: "0.25rem",
          }}
        >
          Lesson {lesson.number}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "0.5rem",
            color: "#1F1F1F",
          }}
        >
          {lesson.title}
        </h3>

        {/* Summary */}
        <p
          style={{
            fontSize: "0.95rem",
            color: "#3A3A3A",
            marginBottom: "0.75rem",
          }}
        >
          {lesson.summary}
        </p>
      </div>

      <div
        style={{
          marginTop: "0.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {/* Level + time */}
        <div
          style={{
            fontSize: "0.85rem",
            color: "#555555",
          }}
        >
          <span>{lesson.level}</span>
          <span style={{ margin: "0 0.35rem" }}>·</span>
          <span>{lesson.minutes}</span>
        </div>

        {/* Open button */}
        <button
          onClick={onOpenLesson}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#F5DBD6",
            color: "#1F1F1F",
            fontSize: "0.9rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          Open lesson
        </button>
      </div>
    </article>
  );
};
