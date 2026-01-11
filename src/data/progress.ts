// src/data/progress.ts

export type LessonProgress = {
  completedLessonIds: number[];
};

// ✅ compatibility export expected by useProgress.ts
//export const PROGRESS_STORAGE_KEY = "tableServing.lessonProgress";

export const PROGRESS_STORAGE_KEY = "tableServing.lessonProgress";

const EMPTY: LessonProgress = { completedLessonIds: [] };

function isLessonProgress(value: unknown): value is LessonProgress {
  if (typeof value !== "object" || value === null) return false;

  const v = value as Record<string, unknown>;
  return (
    Array.isArray(v.completedLessonIds) &&
    v.completedLessonIds.every((id) => typeof id === "number")
  );
}

export function readStoredProgress(): LessonProgress {
  const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
  if (!raw) return EMPTY;

  try {
    const parsed: unknown = JSON.parse(raw);
    return isLessonProgress(parsed) ? parsed : EMPTY;
  } catch {
    return EMPTY;
  }
}

export function writeStoredProgress(progress: LessonProgress): void {
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("progress:updated"));
}

export function markLessonComplete(lessonId: number): void {
  if (!Number.isFinite(lessonId)) return;

  const current = readStoredProgress();
  const merged = new Set(current.completedLessonIds);
  merged.add(lessonId);

  writeStoredProgress({
    completedLessonIds: Array.from(merged),
  });
}

// /* ============================================================
//    ✅ Compatibility layer for older code (useProgress.ts etc.)
//    ============================================================ */

// export type StoredProgress = LessonProgress;

// export type ProgressState = {
//   completedCount: number;
//   totalCount: number;
//   percent: number; // 0..100
// };

// export function computeProgress(totalLessonIds: number[], progress?: StoredProgress): ProgressState {
//   const p = progress ?? readStoredProgress();

//   const totalCount = totalLessonIds.length;
//   const completedCount = totalLessonIds.filter((id) => p.completedLessonIds.includes(id)).length;
//   const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

//   return { completedCount, totalCount, percent };
// }
