import { useEffect, useMemo, useState } from "react";
import { readStoredProgress, PROGRESS_STORAGE_KEY } from "../data/progress";

export function useProgress(totalLessonIds: number[]) {
  const [completedIds, setCompletedIds] = useState<number[]>(
    () => readStoredProgress().completedLessonIds
  );

  useEffect(() => {
    const sync = () => {
      setCompletedIds(readStoredProgress().completedLessonIds);
    };

    // in-app updates
    window.addEventListener("progress:updated", sync);

    // OPTIONAL: cross-tab updates
    const onStorage = (e: StorageEvent) => {
      if (e.key === PROGRESS_STORAGE_KEY) sync();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("progress:updated", sync);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return useMemo(() => {
    const totalCount = totalLessonIds.length;
    const completedCount = totalLessonIds.filter((id) => completedIds.includes(id)).length;
    const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    return { totalCount, completedCount, percent };
  }, [totalLessonIds, completedIds]);
}
