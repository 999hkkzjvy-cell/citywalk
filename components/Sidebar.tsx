"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import routes, { getRoutesByRegion } from "@/data/routes";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const grouped = getRoutesByRegion();

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-brick text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        aria-label="Toggle sidebar"
      >
        {collapsed ? "☰" : "✕"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-slate text-cream w-64 transform transition-transform duration-300 ease-in-out overflow-y-auto border-r border-gold/20 ${
          collapsed ? "-translate-x-full" : "translate-x-0"
        } lg:translate-x-0`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gold/20">
          <Link href="/" className="block">
            <h1 className="font-serif text-xl font-bold tracking-wider text-gold">
              🚶 Citywalk
            </h1>
            <p className="text-xs text-cream/40 mt-1 tracking-widest">
              城市漫步 · 闯关打卡
            </p>
          </Link>
        </div>

        {/* Route list by region */}
        <nav className="p-4">
          {Object.entries(grouped).map(([region, regionRoutes]) => (
            <div key={region} className="mb-6">
              <h2 className="text-xs font-bold text-gold/60 uppercase tracking-[0.2em] mb-2 px-2">
                {region}
              </h2>
              <ul className="space-y-0.5">
                {regionRoutes.map((route) => {
                  const href = `/routes/${route.info.slug}`;
                  const isActive = pathname === href;
                  return (
                    <li key={route.info.slug}>
                      <Link
                        href={href}
                        onClick={() => setCollapsed(true)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-gold/15 text-gold border-l-2 border-gold"
                            : "text-cream/60 hover:text-cream hover:bg-white/5 border-l-2 border-transparent"
                        }`}
                      >
                        <div className="font-medium truncate">
                          {route.info.title}
                          <span className="text-gold ml-1">{route.info.titleAccent}</span>
                        </div>
                        <div className="text-xs text-cream/30 mt-0.5 truncate">
                          {route.checkpoints.length} 关 · {route.info.city}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Empty state */}
          {Object.keys(grouped).length === 0 && (
            <p className="text-cream/30 text-sm px-2">暂无路线</p>
          )}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gold/10">
          <p className="text-xs text-cream/20 text-center">
            走遍城市，记录时光
          </p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}
    </>
  );
}
