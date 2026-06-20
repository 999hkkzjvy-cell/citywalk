"use client";

import { useCheckIn } from "@/lib/context";

interface CompletionPanelProps {
  title: string;
  route: string;
  stats: string;
}

export default function CompletionPanel({ title, route, stats }: CompletionPanelProps) {
  const { checkedIn, total, reset } = useCheckIn();
  const allDone = total > 0 && checkedIn.size === total;

  if (!allDone) return null;

  const handleReset = () => {
    if (confirm("确定要重置所有打卡记录吗？")) {
      reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative text-center px-8 py-12 rounded-2xl my-8 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a2a1a, #2d3a1a)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(196,162,101,0.2), transparent 70%)",
        }}
      />

      <div className="relative z-10 text-cream">
        {/* Badge */}
        <div className="text-7xl mb-4 animate-stamp-in">🏅</div>

        <h2 className="font-serif text-3xl tracking-[0.1em] mb-2">恭喜通关！</h2>
        <p className="text-gold text-lg tracking-[0.12em] mb-4">{title}</p>

        <p className="text-cream/60 text-sm mb-4">{route}</p>
        <p className="text-cream/50 text-xs mb-8">{stats}</p>

        <button
          onClick={handleReset}
          className="inline-block px-8 py-2.5 bg-transparent border-2 border-gold text-gold font-serif text-sm tracking-[0.08em] rounded-full hover:bg-gold hover:text-ink transition-all duration-300"
        >
          🔄 重新闯关
        </button>
      </div>
    </div>
  );
}
