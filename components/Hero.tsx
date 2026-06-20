import { RouteInfo } from "@/lib/types";

export default function Hero({ info }: { info: RouteInfo }) {
  return (
    <header
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-cream overflow-hidden px-4"
      style={{ background: info.heroGradient }}
    >
      {/* Animated glow overlay */}
      <div
        className="absolute inset-0 animate-hero-glow pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(196,162,101,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(181,52,58,0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(45,80,22,0.08) 0%, transparent 70%)
          `,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,162,101,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(196,162,101,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[700px]">
        {/* Badge */}
        <div className="inline-block px-5 py-1.5 border border-gold text-gold font-serif text-sm tracking-[0.25em] uppercase mb-6 relative">
          {info.badge}
          <span className="absolute top-1/2 right-[calc(100%+10px)] w-[30px] h-px bg-gold" />
          <span className="absolute top-1/2 left-[calc(100%+10px)] w-[30px] h-px bg-gold" />
        </div>

        {/* Title */}
        <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl tracking-[0.06em] leading-tight mb-2">
          {info.title}
          <br />
          <span className="text-gold">{info.titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-lg sm:text-xl text-cream/70 mb-4 tracking-[0.08em]">
          {info.subtitle}
        </p>

        {/* Districts */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap text-sm text-cream/55 my-6">
          {info.districts.map((d, i) => (
            <span key={i} className="whitespace-nowrap">
              {d}
              {i < info.districts.length - 1 && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mx-1.5 align-middle" />
              )}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-8 justify-center mb-10">
          {info.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-3xl font-bold text-gold leading-none">
                {stat.value}
                {stat.unit && <span className="text-base">{stat.unit}</span>}
              </div>
              <div className="text-xs text-cream/50 tracking-[0.1em] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#checkpoint-1"
          className="inline-flex items-center gap-2 px-10 py-3 border-2 border-gold text-gold font-serif text-lg tracking-[0.12em] hover:bg-gold hover:text-ink transition-all duration-300"
        >
          开 始 闯 关
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 z-10 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-cream/40 tracking-[0.15em]">SCROLL</span>
        <div className="w-6 h-6 border-r-2 border-b-2 border-cream/40 rotate-45" />
      </div>
    </header>
  );
}
