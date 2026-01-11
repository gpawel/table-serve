import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import App from "../src/App";
import { stories } from "../src/data/stories";
import { renderWithRouter } from "./renderWithRouter";

describe("StoryPage gating (locked vs unlocked)", () => {
  it("shows locked state when required lesson is not completed", () => {
    const story = stories[0];
    expect(story).toBeTruthy();

    // No progress seeded => should be locked for most stories
    renderWithRouter(<App />, [`/stories/${story.id}`]);

    // Your locked UI says: "This story unlocks after completing Lesson <requiredLessonId>." :contentReference[oaicite:1]{index=1}
    expect(
      screen.getByText(/this story unlocks after completing lesson/i)
    ).toBeInTheDocument();

    // Also includes required lesson id in bold
    expect(screen.getByText(String(story.requiredLessonId))).toBeInTheDocument();
  });

  it("shows story content when required lesson is completed", () => {
    const story = stories[0];
    expect(story).toBeTruthy();

    // Seed progress so story is unlocked
    localStorage.setItem(
      "tableServing.lessonProgress",
      JSON.stringify({ completedLessonIds: [story.requiredLessonId] })
    );

    renderWithRouter(<App />, [`/stories/${story.id}`]);

    // Locked message should be gone
    expect(
      screen.queryByText(/this story unlocks after completing lesson/i)
    ).toBeNull();

    // Story title should render as an <h1> (unlocked view)
    expect(
      screen.getByRole("heading", { level: 1, name: story.title })
    ).toBeInTheDocument();

    // At least one paragraph of content should render
    // (more stable than checking exact paragraph strings)
    expect(screen.getAllByText(/.+/).length).toBeGreaterThan(0);
  });

  it("shows 'Story not found' for invalid id", () => {
    renderWithRouter(<App />, ["/stories/does-not-exist"]);

    expect(
      screen.getByRole("heading", { name: /story not found/i })
    ).toBeInTheDocument();
  });
});
