"use client";

import { useState } from "react";
import { Checkpoint, TableData } from "@/lib/types";
import { useCheckIn } from "@/lib/context";
import { showToast } from "@/components/Toast";

function HeritageTable({ table }: { table: TableData }) {
  const badgeStyles: Record<string, string> = {
    province: "bg-yellow-100 text-yellow-800",
    city: "bg-green-100 text-green-800",
    district: "bg-indigo-100 text-indigo-700",
  };

  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse text-[0.82rem]">
        <thead>
          <tr>
            {table.columns.map((col) => (
              <th
                key={col.key}
                className="bg-slate text-cream px-3 py-2 font-medium text-xs tracking-[0.06em] text-left"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="hover:bg-gold/5">
              {table.columns.map((col) => {
                const val = row[col.key];
                if (!val) return <td key={col.key} className="px-3 py-2 border-b border-cream-dark">—</td>;
                if (typeof val === "object" && "badge" in val) {
                  return (
                    <td key={col.key} className="px-3 py-2 border-b border-cream-dark">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[0.7rem] font-semibold ${
                          badgeStyles[val.badge] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {val.text}
                      </span>
                    </td>
                  );
                }
                return (
                  <td key={col.key} className="px-3 py-2 border-b border-cream-dark">
                    {String(val)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CheckpointCard({ cp }: { cp: Checkpoint }) {
  const { checkedIn, checkIn } = useCheckIn();
  const [animating, setAnimating] = useState(false);
  const isChecked = checkedIn.has(cp.number);

  const handleCheckIn = () => {
    if (isChecked) return;
    setAnimating(true);
    checkIn(cp.number);
    showToast(`🎉 第 ${cp.number} 关 打卡成功！`);
    setTimeout(() => setAnimating(false), 600);
  };

  return (
    <article
      id={`checkpoint-${cp.number}`}
      className="bg-white rounded-2xl mb-10 shadow-card border border-cream-dark overflow-hidden transition-all duration-300 hover:shadow-card-hover scroll-mt-20"
    >
      {/* Header */}
      <div
        className="px-8 py-6 flex items-center gap-5 cursor-pointer"
        style={{
          background: "linear-gradient(135deg, rgba(196,162,101,0.08), rgba(181,52,58,0.05))",
        }}
        onClick={handleCheckIn}
      >
        {/* Number circle */}
        <div
          className={`flex-shrink-0 w-[52px] h-[52px] rounded-full flex items-center justify-center font-serif text-2xl font-bold text-white transition-all duration-300 ${
            isChecked
              ? "bg-dark-green shadow-green"
              : "bg-brick shadow-brick"
          }`}
        >
          {isChecked ? "✓" : cp.number}
        </div>

        {/* Title */}
        <div className="flex-1">
          <div className="font-serif text-xl font-bold text-ink tracking-[0.04em]">
            {cp.name}
          </div>
          <div className="text-sm text-gray-400 mt-0.5">{cp.subtitle}</div>
        </div>

        {/* Badge */}
        <span className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs tracking-[0.08em] bg-paper-dark text-slate">
          {cp.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-8">
        {/* Image fallback */}
        <div className="rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-paper-dark to-cream-dark flex flex-col items-center justify-center mb-6 -mx-1">
          <span className="text-5xl mb-2 opacity-50">{cp.imageFallback.icon}</span>
          <span className="text-sm text-gold/40 tracking-[0.06em] font-serif">
            {cp.imageFallback.text}
          </span>
        </div>

        {/* Info grid */}
        {cp.infoItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {cp.infoItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span className="text-gray-400 flex-shrink-0">{item.label}</span>
                <span className="text-slate font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Sections */}
        {cp.sections.map((section, i) => {
          // Skip empty title story blocks (continuation stories)
          if (section.type === "story" && !section.title && !section.stories?.length)
            return null;

          if (!section.title && !section.stories?.length) return null;

          return (
            <div key={i}>
              {section.title && (
                <h4 className="font-serif text-base font-bold text-brick mt-6 mb-3 pl-3 border-l-[3px] border-brick tracking-[0.05em] first:mt-0">
                  {section.title}
                </h4>
              )}

              {/* Story blocks */}
              {section.type === "story" &&
                section.stories?.map((story, j) => (
                  <div
                    key={j}
                    className="bg-gradient-to-br from-gold/6 to-transparent rounded-lg px-5 py-4 my-4 border-l-[3px] border-gold text-sm leading-relaxed"
                  >
                    {story.year && (
                      <span className="inline-block bg-brick text-white px-2 py-0.5 rounded text-xs font-semibold mr-2">
                        {story.year}
                      </span>
                    )}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: story.text.replace(
                          /\*\*(.+?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </div>
                ))}

              {/* Heritage tables */}
              {section.type === "heritage-table" && section.table && (
                <HeritageTable table={section.table} />
              )}

              {/* Task blocks */}
              {section.type === "task" && (
                <div className="bg-gradient-to-br from-dark-green/6 to-transparent rounded-lg px-5 py-4 my-4 border border-dashed border-dark-green">
                  <div className="text-xs uppercase tracking-[0.2em] text-dark-green font-bold mb-1.5">
                    {section.taskLabel}
                  </div>
                  <div className="text-sm text-slate leading-relaxed">
                    {section.taskDesc}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Reference links */}
        {cp.references && cp.references.length > 0 && (
          <div className="mt-6 pt-4 border-t border-cream-dark/50">
            <h4 className="font-serif text-sm font-bold text-gold mb-3 tracking-[0.05em]">
              📖 参考资料
            </h4>
            <div className="flex flex-wrap gap-2">
              {cp.references.map((ref, i) => (
                <a
                  key={i}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs bg-cream hover:bg-sepia border border-cream-dark transition-colors duration-200 text-slate no-underline"
                >
                  <span className="text-gold font-medium">{ref.source}</span>
                  <span className="text-slate/70">·</span>
                  <span>{ref.title}</span>
                  <span className="text-gold/40 ml-0.5">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Check-in button */}
        <div className="text-center mt-7 pt-6 border-t border-cream-dark">
          <button
            onClick={handleCheckIn}
            disabled={isChecked}
            className={`inline-flex items-center gap-2 px-10 py-3 rounded-full font-serif text-base tracking-[0.1em] font-semibold transition-all duration-300 ${
              isChecked
                ? "bg-dark-green text-white shadow-green cursor-default"
                : animating
                ? "bg-dark-green text-white shadow-green scale-95"
                : "bg-brick text-white shadow-brick hover:bg-[#9a2d32] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(181,52,58,0.35)] active:scale-95"
            }`}
          >
            {isChecked ? "✅ 已打卡" : animating ? "✅ 已打卡" : "📍 点击打卡签到"}
            {animating && (
              <span className="inline-block animate-stamp-in text-2xl ml-1">📍</span>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
