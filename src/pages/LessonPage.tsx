// src/pages/LessonPage.tsx
import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getLessonById } from "../data/lessons";
import { markLessonComplete, readStoredProgress } from "../data/progress";





export const LessonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lessonId = id ? Number(id) : NaN;

  // ✅ hooks must be unconditional
  const lesson = useMemo(
    () => (Number.isFinite(lessonId) ? getLessonById(lessonId) : null),
    [lessonId]
  );

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!Number.isFinite(lessonId)) return;

    const sync = () => {
      setCompleted(readStoredProgress().completedLessonIds.includes(lessonId));
    };

    window.addEventListener("progress:updated", sync);
    sync();

    return () => window.removeEventListener("progress:updated", sync);
  }, [lessonId]);

  // ✅ early returns AFTER hooks
  if (!id) {
    return (
      <div className="ts-page-container">
        <h1>Invalid lesson</h1>
        <p>Lesson id is missing.</p>
        <Link to="/learn">Back to Learn</Link>
      </div>
    );
  }

  if (!Number.isFinite(lessonId)) {
    return (
      <div className="ts-page-container">
        <h1>Invalid lesson</h1>
        <p>Lesson id must be a number.</p>
        <Link to="/learn">Back to Learn</Link>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="ts-page-container">
        <h1>Lesson not found</h1>
        <Link to="/learn">Back to Learn</Link>
      </div>
    );
  }

  // 🔽 rest of your component unchanged


  const total = lesson.quiz.length;
  const answered = Object.keys(answers).length;
  const score = lesson.quiz.reduce((acc, q) => {
    const a = answers[q.id];
    return acc + (a === q.correctChoiceId ? 1 : 0);
  }, 0);

  const canSubmit = answered === total;

  const submit = () => {
    if (!canSubmit) return;

    const passed = score >= Math.max(1, total - 1);

    if (passed) {
      markLessonComplete(lessonId);
      setCompleted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert(`Score ${score}/${total}. Try again 🙂`);
    }
  };

  const isSubmitDisabled = !canSubmit || completed;

  return (
    <div className="ts-page-container">
      <div className="ts-lesson-back">
        <Link to="/learn" className="ts-lesson-back-link">
          ← Back to Learn
        </Link>
      </div>

      {completed && (
        <div
          className="ts-lesson-complete"
        >
          ✅ Lesson completed. Stories related to this lesson can be unlocked in V2 (or demo unlock next).
        </div>
      )}

      <h1 className="ts-lesson-title">{lesson.title}</h1>
      <p className="ts-lesson-summary">{lesson.summary}</p>

      <section className="ts-lesson-content">
        {lesson.content.map((p, idx) => (
          <p key={idx} className="ts-lesson-paragraph">
            {p}
          </p>
        ))}
      </section>

      <hr className="ts-lesson-divider" />

      <section>
        <h2 className="ts-lesson-quiz-title">Quick Quiz (5 questions)</h2>

        {lesson.quiz.map((q, idx) => (
          <div
            key={q.id}
            className="ts-lesson-question-card"
          >
            <div className="ts-lesson-question-title">
              {idx + 1}. {q.text}
            </div>

            <div className="ts-lesson-choices">
              {q.choices.map((c) => (
                <label
                  key={c.id}
                  className="ts-lesson-choice"
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={c.id}
                    checked={answers[q.id] === c.id}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: c.id }))}
                    disabled={completed}
                  />
                  <span>{c.text}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="ts-lesson-actions">
          <button
            onClick={submit}
            disabled={isSubmitDisabled}
            className={
              isSubmitDisabled
                ? "ts-lesson-submit ts-lesson-submit-disabled"
                : "ts-lesson-submit"
            }
          >
            Submit
          </button>

          <div className="ts-lesson-score">
            Answered: {answered}/{total} • Score: {score}/{total}
          </div>
        </div>
      </section>
    </div>
  );
};
