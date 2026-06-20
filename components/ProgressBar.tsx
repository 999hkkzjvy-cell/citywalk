"use client";

import { useCheckIn } from "@/lib/context";

export default function ProgressBar() {
  const { checkedIn, total } = useCheckIn();
  const count = checkedIn.size;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm py-2.5 px-4 border-b border-cream-dark">
      <div className="max-w-[800px] mx-auto flex items-center gap-4">
        <span className="text-sm">🏅</span>
        <div className="flex-1 h-1 bg-cream-dark rounded-full overflow-hidden">
          <div
            className="h-full bg-brick rounded-full transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="font-serif text-sm text-slate whitespace-nowrap tracking-[0.05em]">
          {count} / {total}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: total }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                checkedIn.has(i + 1) ? "bg-brick" : "bg-cream-dark"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
