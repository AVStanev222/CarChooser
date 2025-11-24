"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }
  const stored = window.localStorage.getItem("carchooser-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const transitionRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem("carchooser-theme", theme);
  }, [theme]);

  useEffect(() => {
    return () => {
      if (transitionRef.current) {
        clearTimeout(transitionRef.current);
      }
    };
  }, []);

  const beginTransition = useCallback(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.add("theme-transition");
    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
    }
    transitionRef.current = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 450);
  }, []);

  const toggleTheme = useCallback(() => {
    beginTransition();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [beginTransition]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeProvider");
  }
  return context;
}
