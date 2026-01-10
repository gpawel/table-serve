// src/pages/LessonPage.tsx
import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getLessonById } from "../data/lessons";
import { markLessonComplete, readStoredProgress } from "../data/progress";





export const LessonPage: React.FC = () => {
  
  const { id } = useParams<{ id: string }>();
  if (!id) {
  return (
    <div style={{ padding: "1rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
      <h1>Invalid lesson</h1>
      <p>Lesson id is missing.</p>
      <Link to="/learn">Back to Learn</Link>
    </div>
  );
}
const lessonId = Number(id);
  
  if (!Number.isFinite(lessonId)) {
  return (
    <div style={{ padding: "1rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
      <h1>Invalid lesson</h1>
      <p>Lesson id must be a number.</p>
      <Link to="/learn">Back to Learn</Link>
    </div>
  );
}



  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(() =>
    readStoredProgress().completedLessonIds.includes(lessonId)
  );

  useEffect(() => {
  const sync = () => {
    setCompleted(readStoredProgress().completedLessonIds.includes(lessonId));
  };

  // keep in sync in the same tab when progress changes
  window.addEventListener("progress:updated", sync);

  // also sync once when lessonId changes (navigation)
  sync();

  return () => window.removeEventListener("progress:updated", sync);
}, [lessonId]);


  if (!lesson) {
    return (
      <div style={{ padding: "1rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
        <h1>Lesson not found</h1>
        <p>
          <Link to="/learn">Back to Learn</Link>
        </p>
      </div>
    );
  }

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

  return (
    <div style={{ padding: "1rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem", color: "#777" }}>
        <Link to="/learn" style={{ color: "#1F1F1F" }}>
          ← Back to Learn
        </Link>
      </div>

      {completed && (
        <div
          style={{
            border: "1px solid #C8B89F",
            background: "#FFF7F5",
            padding: "1rem",
            borderRadius: "12px",
            marginBottom: "1.25rem",
          }}
        >
          ✅ Lesson completed. Stories related to this lesson can be unlocked in V2 (or demo unlock next).
        </div>
      )}

      <h1 style={{ marginBottom: "0.25rem" }}>{lesson.title}</h1>
      <p style={{ color: "#555", marginTop: 0 }}>{lesson.summary}</p>

      <section style={{ marginTop: "1.5rem" }}>
        {lesson.content.map((p, idx) => (
          <p key={idx} style={{ lineHeight: 1.6, color: "#333" }}>
            {p}
          </p>
        ))}
      </section>

      <hr style={{ margin: "2rem 0", border: "none", borderTop: "1px solid #E5E5E5" }} />

      <section>
        <h2 style={{ marginBottom: "0.75rem" }}>Quick Quiz (5 questions)</h2>

        {lesson.quiz.map((q, idx) => (
          <div
            key={q.id}
            style={{
              border: "1px solid #E5E5E5",
              borderRadius: "12px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
              {idx + 1}. {q.text}
            </div>

            <div style={{ display: "grid", gap: "0.5rem" }}>
              {q.choices.map((c) => (
                <label
                  key={c.id}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
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

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={submit}
            disabled={!canSubmit || completed}
            style={{
              padding: "0.75rem 1.25rem",
              borderRadius: "999px",
              border: "none",
              cursor: !canSubmit || completed ? "not-allowed" : "pointer",
              backgroundColor: "#F5DBD6",
              color: "#1F1F1F",
              fontWeight: 600,
              opacity: !canSubmit || completed ? 0.6 : 1,
            }}
          >
            Submit
          </button>

          <div style={{ color: "#555" }}>
            Answered: {answered}/{total} • Score: {score}/{total}
          </div>
        </div>
      </section>
    </div>
  );
};
