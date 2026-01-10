// src/hooks/useProgress.ts
import { useEffect, useMemo, useState } from "react";
import {
  PROGRESS_STORAGE_KEY,
  readStoredProgress,
  computeProgress,
  type ProgressState,
  type StoredProgress,
} from "../data/progress";

export function useProgress(totalLessonIds: number[], storageKey = PROGRESS_STORAGE_KEY) {
  const [stored, setStored] = useState<StoredProgress>(() => readStoredProgress(storageKey));

  useEffect(() => {
    const onCustom = () => setStored(readStoredProgress(storageKey));
    window.addEventListener("progress:updated", onCustom);

    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey) setStored(readStoredProgress(storageKey));
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("progress:updated", onCustom);
      window.removeEventListener("storage", onStorage);
    };
  }, [storageKey]);

  const progress: ProgressState = useMemo(() => {
    return computeProgress(totalLessonIds, stored);
  }, [totalLessonIds, stored]);

  return progress;
}
