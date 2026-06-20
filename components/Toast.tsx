"use client";

import { useEffect, useState } from "react";

let showToastFn: ((msg: string) => void) | null = null;

export function showToast(msg: string) {
  showToastFn?.(msg);
}

export default function Toast() {
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    showToastFn = (m: string) => {
      setMsg(m);
      setVisible(true);
      setTimeout(() => setVisible(false), 2200);
    };
    return () => {
      showToastFn = null;
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 z-[200] -translate-x-1/2 bg-slate text-white px-8 py-3 rounded-full text-sm tracking-[0.06em] shadow-lg transition-all duration-400 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-[100px] opacity-0 pointer-events-none"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      {msg}
    </div>
  );
}
