"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface CheckInContextType {
  checkedIn: Set<number>;
  checkIn: (num: number) => void;
  reset: () => void;
  total: number;
  setTotal: (n: number) => void;
}

const CheckInContext = createContext<CheckInContextType>({
  checkedIn: new Set(),
  checkIn: () => {},
  reset: () => {},
  total: 0,
  setTotal: () => {},
});

export function CheckInProvider({ children, storageKey }: { children: React.ReactNode; storageKey: string }) {
  const [checkedIn, setCheckedIn] = useState<Set<number>>(new Set());
  const [total, setTotal] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(saved)) {
        setCheckedIn(new Set(saved));
      }
    } catch (e) {
      // ignore
    }
  }, [storageKey]);

  // Save to localStorage on change
  const saveState = useCallback(
    (state: Set<number>) => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(Array.from(state)));
      } catch (e) {
        // ignore
      }
    },
    [storageKey]
  );

  const checkIn = useCallback(
    (num: number) => {
      setCheckedIn((prev) => {
        if (prev.has(num)) return prev;
        const next = new Set(prev);
        next.add(num);
        saveState(next);
        return next;
      });
    },
    [saveState]
  );

  const reset = useCallback(() => {
    setCheckedIn(new Set());
    saveState(new Set());
  }, [saveState]);

  return (
    <CheckInContext.Provider value={{ checkedIn, checkIn, reset, total, setTotal }}>
      {children}
    </CheckInContext.Provider>
  );
}

export function useCheckIn() {
  return useContext(CheckInContext);
}
