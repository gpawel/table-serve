

/** ✅ Change this if your app already uses a different key */
export const PROGRESS_STORAGE_KEY = "tableServing.lessonProgress";



export type StoredProgress = {
  completedLessonIds: number[];
};

export type ProgressState = {
  completedLessonIds: number[];
  completedCount: number;
  totalCount: number;
  percent: number; // 0..100
  level: "Beginner" | "Intermediate" | "Master";
};

export function readStoredProgress(
  storageKey: string = PROGRESS_STORAGE_KEY
): StoredProgress {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return { completedLessonIds: [] };

  try {
    const data = JSON.parse(raw);

    if (
      typeof data === "object" &&
      data !== null &&
      Array.isArray((data as any).completedLessonIds)
    ) {
      const ids = (data as any).completedLessonIds.filter(
        (x: unknown): x is number => typeof x === "number" && Number.isFinite(x)
      );
      return { completedLessonIds: ids };
    }

    // invalid shape -> ignore
    return { completedLessonIds: [] };
  } catch {
    // corrupt -> ignore
    return { completedLessonIds: [] };
  }
}

export function writeStoredProgress(
  progress: StoredProgress,
  storageKey: string = PROGRESS_STORAGE_KEY
) {
  localStorage.setItem(storageKey, JSON.stringify(progress));
  window.dispatchEvent(new Event("progress:updated"));
}

export function markLessonComplete(
  lessonId: number,
  storageKey: string = PROGRESS_STORAGE_KEY
): StoredProgress {
  const current = readStoredProgress(storageKey);
  const set = new Set<number>(current.completedLessonIds);
  set.add(lessonId);

  const next: StoredProgress = { completedLessonIds: Array.from(set) };
  writeStoredProgress(next, storageKey);
  return next;
}

export function computeProgress(
  totalLessonIds: number[],
  stored: StoredProgress
): ProgressState {
  const totalCount = totalLessonIds.length;

  const completedSet = new Set<number>(stored.completedLessonIds);
  const completedCount = totalLessonIds.reduce(
    (acc, id) => acc + (completedSet.has(id) ? 1 : 0),
    0
  );

  const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const level: ProgressState["level"] =
    percent >= 100 ? "Master" : percent >= 40 ? "Intermediate" : "Beginner";

  return {
    completedLessonIds: Array.from(completedSet),
    completedCount,
    totalCount,
    percent,
    level,
  };
}

export function isLessonCompleted(
  lessonId: number,
  storageKey: string = PROGRESS_STORAGE_KEY
) {
  const stored = readStoredProgress(storageKey);
  return stored.completedLessonIds.includes(lessonId);
}
