// src/components/ProgressBar.tsx
import React from "react";

type Props = {
  completedCount: number;
  totalCount: number;
  percent: number;
  labelRight?: string; // e.g. "Beginner • 20%"
};

export const ProgressBar: React.FC<Props> = ({
  completedCount,
  totalCount,
  percent,
  labelRight,
}) => {
  const pct = Math.max(0, Math.min(100, percent));

  return (
    <div className="ts-progress-card">
      <div className="ts-progress-header">
        <div className="ts-progress-label">
          Progress: {completedCount}/{totalCount}
        </div>
        <div className="ts-progress-value">{labelRight ?? `${pct}%`}</div>
      </div>

      <div
        className="ts-progress-track"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="ts-progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};
