// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useThemeMode } from "./ThemeProvider";

type MeResponse =
  | { user: null }
  | {
      user: {
        id: string;
        name: string | null;
        email: string;
        recentCars?: string[];
        pinnedCars?: string[];
      };
    };

export default function Navbar() {
  const [user, setUser] = useState<MeResponse["user"]>(null);
  const { theme, toggleTheme } = useThemeMode();

  useEffect(() => {
    async function loadSession() {
      try {
        const response = await fetch("/api/auth/me", { cache: "no-store" });
        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = (await response.json()) as MeResponse;
        setUser(data.user);
      } catch (error) {
        console.error("Failed to fetch current user", error);
        setUser(null);
      }
    }

    loadSession();
  }, []);

  return (
    <header className="w-full border-b border-border bg-white/80 text-text backdrop-blur dark:bg-[#050214]/80 dark:text-white">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-carchooser.svg"
              alt="CarChooser"
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
          <span className="text-xs text-muted lg:hidden">
            Smart garage for young drivers
          </span>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <Link href="/" className="transition hover:text-text dark:hover:text-white">
              Home
            </Link>
            <Link href="/brands" className="transition hover:text-text dark:hover:text-white">
              Brands
            </Link>
            <Link
              href="/young-drivers"
              className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-text transition hover:border-button hover:text-button dark:text-white"
            >
              Under 18? Driving Schools
            </Link>
            <button
              type="button"
              aria-label="Toggle color theme"
              onClick={toggleTheme}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm font-semibold text-text transition hover:border-button hover:text-button dark:bg-card-muted dark:text-white"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm">
            {user ? (
              <Link
                href="/account"
                className="rounded-full bg-button px-4 py-2 font-semibold text-white transition hover:bg-button-hover"
              >
                My account
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/signin"
                  className="rounded-full bg-button px-4 py-2 font-semibold text-white transition hover:bg-button-hover"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-button px-4 py-2 font-semibold text-white transition hover:bg-button-hover"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
