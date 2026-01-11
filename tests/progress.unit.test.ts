import { describe, it, expect } from "vitest";
import {
  readStoredProgress,
  writeStoredProgress,
  markLessonComplete,
} from "../src/data/progress";

const KEY = "tableServing.lessonProgress";

describe("progress.ts", () => {
  it("returns empty canonical progress when storage is empty", () => {
    expect(readStoredProgress()).toEqual({
      completedLessonIds: [],
    });
  });

  it("writes and reads progress correctly", () => {
    writeStoredProgress({ completedLessonIds: [1, 2] });

    expect(JSON.parse(localStorage.getItem(KEY)!)).toEqual({
      completedLessonIds: [1, 2],
    });

    expect(readStoredProgress()).toEqual({
      completedLessonIds: [1, 2],
    });
  });

  it("is defensive against invalid JSON", () => {
    localStorage.setItem(KEY, "{broken");

    expect(readStoredProgress()).toEqual({
      completedLessonIds: [],
    });
  });

  it("markLessonComplete adds lesson id", () => {
    markLessonComplete(1);

    expect(readStoredProgress()).toEqual({
      completedLessonIds: [1],
    });
  });

  it("markLessonComplete does not duplicate lesson ids", () => {
    markLessonComplete(1);
    markLessonComplete(1);

    expect(readStoredProgress()).toEqual({
      completedLessonIds: [1],
    });
  });

  it("markLessonComplete merges with existing progress", () => {
    writeStoredProgress({ completedLessonIds: [1, 2] });

    markLessonComplete(3);

    expect(new Set(readStoredProgress().completedLessonIds)).toEqual(
      new Set([1, 2, 3])
    );
  });
});
