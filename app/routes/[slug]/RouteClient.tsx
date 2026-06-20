"use client";

import { useEffect } from "react";
import { RouteData } from "@/lib/types";
import { CheckInProvider, useCheckIn } from "@/lib/context";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import ProgressBar from "@/components/ProgressBar";
import RouteOverview from "@/components/RouteOverview";
import CheckpointCard from "@/components/CheckpointCard";
import CompletionPanel from "@/components/CompletionPanel";
import Toast from "@/components/Toast";
import { showToast } from "@/components/Toast";

function RouteContent({ route }: { route: RouteData }) {
  const { checkIn, setTotal, checkedIn } = useCheckIn();

  // Set total checkpoints
  useEffect(() => {
    setTotal(route.checkpoints.length);
  }, [route.checkpoints.length, setTotal]);

  // Listen for check-in events to show toast
  const handleCheckIn = (num: number) => {
    checkIn(num);
    showToast(`🎉 第 ${num} 关 打卡成功！`);
  };

  // We need to override the checkIn function in context
  // Actually, let's handle this differently — use a ref to the custom handler
  useEffect(() => {
    // The toast is shown by CheckpointCard onClick already via the context's checkIn
    // We'll add a custom event listener system
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area — offset for sidebar */}
      <div className="lg:ml-64">
        {/* Hero */}
        <Hero info={route.info} />

        {/* Progress bar */}
        <ProgressBar />

        {/* Main content */}
        <main className="max-w-[800px] mx-auto px-4 sm:px-6 py-8 pb-16">
          {/* Section header */}
          <div className="section-header text-center my-8">
            <h2>🗺️ 路线总览</h2>
            <div className="section-deco mt-3">
              <div className="deco-line" />
              <div className="deco-diamond" />
              <div className="deco-line" />
            </div>
          </div>

          {/* Route overview */}
          <RouteOverview stops={route.overviewStops} />

          {/* Checkpoint cards */}
          {route.checkpoints.map((cp) => (
            <CheckpointCard key={cp.number} cp={cp} />
          ))}

          {/* Completion panel */}
          <CompletionPanel
            title={route.completionTitle}
            route={route.completionRoute}
            stats={route.completionStats}
          />

          {/* Footer */}
          <div className="text-center py-12 border-t border-cream-dark mt-8">
            <p className="font-serif text-gold italic text-lg tracking-[0.06em] mb-4 leading-relaxed">
              {route.footerQuote}
            </p>
            <p className="text-sm text-gray-300">{route.footerNote}</p>
            <p className="text-xs text-gray-300 mt-4">{route.footerImageNote}</p>
          </div>
        </main>
      </div>

      {/* Toast */}
      <Toast />
    </div>
  );
}

export function RouteClient({ route }: { route: RouteData }) {
  return (
    <CheckInProvider storageKey={`citywalk_${route.info.slug}`}>
      <RouteContent route={route} />
    </CheckInProvider>
  );
}
