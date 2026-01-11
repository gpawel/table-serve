import { describe, it, expect } from "vitest";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../src/App";
import { lessons } from "../src/data/lessons";
import { readStoredProgress } from "../src/data/progress";
import { renderWithRouter } from "./renderWithRouter";

describe("LessonPage completion flow (real lesson data)", () => {
    it("answers quiz and completes lesson 1, updating progress storage", async () => {
        const user = userEvent.setup();

        const lessonId = 1;
        const lesson = lessons.find((l) => l.id === lessonId);
        expect(lesson).toBeTruthy();
        if (!lesson) return;

        renderWithRouter(<App />, [`/lesson/${lessonId}`]);

        for (const [idx, q] of lesson.quiz.entries()) {
            const correct = q.choices.find((c) => c.id === q.correctChoiceId);
            expect(correct).toBeTruthy();
            if (!correct) continue;

            const questionText = q.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const header = screen.getByText(new RegExp(`^${idx + 1}\\.\\s${questionText}$`));

            // header is inside the card; go up to the card container
            const card = header.closest("div")?.parentElement;
            expect(card).toBeTruthy();
            if (!card) continue;

            await user.click(within(card).getByRole("radio", { name: correct.text }));
        }

        // Submit
        const submit = screen.getByRole("button", { name: /submit/i });
        expect(submit).toBeEnabled();
        await user.click(submit);


        // Verify completion stored (most stable assertion for future i18n)
        expect(readStoredProgress().completedLessonIds).toContain(lessonId);
    });
});
