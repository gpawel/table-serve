import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../src/App";
import { lessons } from "../src/data/lessons";
import { stories } from "../src/data/stories";
import { readStoredProgress } from "../src/data/progress";
import { renderWithRouter } from "./renderWithRouter";

describe("Stories unlock flow", () => {
  it("after completing Lesson 1, Stories page shows Read story link for stories requiring Lesson 1", async () => {
    const user = userEvent.setup();

    const lessonId = 1;
    const lesson = lessons.find((l) => l.id === lessonId);
    expect(lesson).toBeTruthy();
    if (!lesson) return;

    // 1) Complete lesson 1 via UI (real quiz data)
    renderWithRouter(<App />, [`/lesson/${lessonId}`]);

    for (const [idx, q] of lesson.quiz.entries()) {
      const correct = q.choices.find((c) => c.id === q.correctChoiceId);
      expect(correct).toBeTruthy();
      if (!correct) continue;

      const questionText = q.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const header = screen.getByText(new RegExp(`^${idx + 1}\\.\\s${questionText}$`));
      const card = header.closest("div")?.parentElement;
      expect(card).toBeTruthy();
      if (!card) continue;

      await user.click((card as HTMLElement).querySelector(`input[value="${correct.id}"]`) as HTMLElement);
      // Alternative (slightly more semantic, but can fail if duplicates exist):
      // await user.click(within(card as HTMLElement).getByRole("radio", { name: correct.text }));
    }

    const submitBtn = screen.getByRole("button", { name: /submit/i });
    expect(submitBtn).toBeEnabled();
    await user.click(submitBtn);

    expect(readStoredProgress().completedLessonIds).toContain(lessonId);

    // 2) Open Stories page
    renderWithRouter(<App />, ["/stories"]);

    // 3) Find a story that requires lesson 1 and assert it has a "Read story →" link
    const unlockedStory = stories.find((s) => s.requiredLessonId === lessonId);
    expect(unlockedStory).toBeTruthy();
    if (!unlockedStory) return;

    // Your unlocked state renders a Link with text "Read story →" to `/stories/${s.id}` :contentReference[oaicite:1]{index=1}
    const readLink = screen.getByRole("link", { name: /read story/i });
    expect(readLink).toHaveAttribute("href", `/stories/${unlockedStory.id}`);
  });

  it("when lesson is NOT completed, Stories page does NOT show Read story link for that story", () => {
    // No progress seeded → everything locked by default :contentReference[oaicite:2]{index=2}
    renderWithRouter(<App />, ["/stories"]);

    // There might be zero Read links (likely), so use queryBy*
    expect(screen.queryByRole("link", { name: /read story/i })).toBeNull();
  });
});
