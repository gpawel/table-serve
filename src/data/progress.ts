// src/data/progress.ts
export const COMPLETED_LESSONS_KEY = "ts_demo_completed_lessons";

export function loadCompletedLessons(): number[] {
  try {
    const raw = localStorage.getItem(COMPLETED_LESSONS_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr.filter((x) => typeof x === "number");
  } catch {
    return [];
  }
}
