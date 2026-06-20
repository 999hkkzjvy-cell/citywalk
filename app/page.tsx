import Link from "next/link";
import routes, { getRoutesByRegion } from "@/data/routes";

export default function HomePage() {
  const grouped = getRoutesByRegion();

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero */}
      <header
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
        style={{
          background: "linear-gradient(160deg, #1a2a1a 0%, #2d3a1a 25%, #3a2a1a 60%, #2a1a1a 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 70%, rgba(196,162,101,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(181,52,58,0.08) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-block px-5 py-1.5 border border-gold text-gold font-serif text-sm tracking-[0.25em] uppercase mb-6">
            CITYWALK COLLECTION
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-6xl tracking-[0.06em] text-cream mb-4">
            城市漫步
            <span className="text-gold"> · 闯关打卡</span>
          </h1>
          <p className="text-cream/50 text-lg tracking-[0.08em]">
            用脚步丈量城市，用打卡记录时光
          </p>
        </div>
      </header>

      {/* Route list */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {Object.entries(grouped).map(([region, regionRoutes]) => (
          <section key={region} className="mb-16">
            <h2 className="font-serif text-2xl text-ink tracking-[0.08em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-gold" />
              {region}
              <span className="w-8 h-px bg-gold" />
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {regionRoutes.map((route) => (
                <Link
                  key={route.info.slug}
                  href={`/routes/${route.info.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-card border border-cream-dark hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* City badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-gold tracking-[0.15em] uppercase bg-gold/10 px-2 py-0.5 rounded">
                      {route.info.city}
                    </span>
                    <span className="text-xs text-gray-400">
                      {route.checkpoints.length} 关
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink tracking-[0.04em] group-hover:text-brick transition-colors">
                    {route.info.title}
                    <span className="text-gold">{route.info.titleAccent}</span>
                  </h3>

                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                    {route.info.subtitle}
                  </p>

                  {/* Stats row */}
                  <div className="flex gap-6 mt-4 pt-4 border-t border-cream-dark">
                    {route.info.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="font-serif text-lg font-bold text-brick">
                          {stat.value}
                          {stat.unit && (
                            <span className="text-xs">{stat.unit}</span>
                          )}
                        </div>
                        <div className="text-[0.65rem] text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {Object.keys(grouped).length === 0 && (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🚶</p>
            <p className="text-gray-400 font-serif">暂无路线，敬请期待</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-cream-dark">
        <p className="font-serif text-gold italic tracking-[0.06em]">
          "一座城市的气质，不在新楼的玻璃幕墙上，而在旧街巷的砖缝里。"
        </p>
        <p className="text-xs text-gray-300 mt-4">走遍城市，记录时光 🚶‍♂️🚶‍♀️</p>
      </footer>
    </div>
  );
}
