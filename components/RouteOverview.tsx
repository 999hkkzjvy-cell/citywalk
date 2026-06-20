"use client";

import { useCheckIn } from "@/lib/context";

interface Stop {
  number: string;
  name: string;
  distance: string;
}

export default function RouteOverview({ stops }: { stops: Stop[] }) {
  const { checkedIn } = useCheckIn();

  return (
    <div className="bg-white rounded-xl p-8 mb-12 shadow-card border border-cream-dark">
      <h3 className="font-serif text-xl text-center mb-6 tracking-[0.08em] text-ink">
        🗺️ 沿途站点
      </h3>
      <div className="relative flex flex-col">
        {/* Vertical dashed line */}
        <div
          className="absolute left-[19px] top-[30px] bottom-[30px] w-0.5"
          style={{
            background:
              "repeating-linear-gradient(to bottom, #c4a265 0px, #c4a265 4px, transparent 4px, transparent 10px)",
          }}
        />
        {stops.map((stop, i) => {
          const num = i + 1;
          const visited = checkedIn.has(num);
          return (
            <div
              key={i}
              className={`flex items-start gap-4 py-2 relative ${
                visited ? "visited" : ""
              }`}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center font-serif font-bold text-sm z-10 transition-all duration-300 ${
                  visited
                    ? "bg-brick border-brick text-white"
                    : "bg-paper-dark border-cream-dark text-slate"
                }`}
              >
                {stop.number}
              </div>
              <div className="flex-1 pt-1.5">
                <div className="font-semibold text-[0.95rem] text-ink">
                  {stop.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {stop.distance}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
