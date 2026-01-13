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
      className="ts-lessons-preview"
    >
      {/* Section header */}
      <h2
        className="ts-lessons-title"
      >
        Start learning
      </h2>

      <p
        className="ts-lessons-subtitle"
      >
        Choose your first lesson.
      </p>

      {/* Lessons grid */}
      <div
        className="ts-lessons-grid"
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
        className="ts-lessons-view-all"
      >
        <button
          className="ts-lessons-view-all-button"
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
      className="ts-lesson-card"
    >
      <div>
        {/* Lesson number */}
        <div
          className="ts-lesson-card-meta"
        >
          Lesson {lesson.number}
        </div>

        {/* Title */}
        <h3
          className="ts-lesson-card-title"
        >
          {lesson.title}
        </h3>

        {/* Summary */}
        <p
          className="ts-lesson-card-summary"
        >
          {lesson.summary}
        </p>
      </div>

      <div
        className="ts-lesson-card-footer"
      >
        {/* Level + time */}
        <div
          className="ts-lesson-card-details"
        >
          <span>{lesson.level}</span>
          <span className="ts-lesson-card-dot">·</span>
          <span>{lesson.minutes}</span>
        </div>

        {/* Open button */}
        <button
          onClick={onOpenLesson}
          className="ts-lesson-card-button"
        >
          Open lesson
        </button>
      </div>
    </article>
  );
};
