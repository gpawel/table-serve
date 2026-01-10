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
    <div
      style={{
        display: "grid",
        gap: "0.4rem",
        padding: "0.75rem 1rem",
        borderRadius: 12,
        border: "1px solid rgba(0,0,0,0.10)",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ fontWeight: 600 }}>
          Progress: {completedCount}/{totalCount}
        </div>
        <div style={{ opacity: 0.8 }}>{labelRight ?? `${pct}%`}</div>
      </div>

      <div
        style={{
          height: 10,
          borderRadius: 999,
          background: "rgba(0,0,0,0.10)",
          overflow: "hidden",
        }}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: 999,
            background: "rgba(0,0,0,0.60)",
            transition: "width 220ms ease",
          }}
        />
      </div>
    </div>
  );
};
