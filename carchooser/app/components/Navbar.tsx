// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <header className="w-full border-b border-white/5 bg-[#050214]/80 text-white backdrop-blur">
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
          <span className="text-xs text-white/60 lg:hidden">
            Smart garage for young drivers
          </span>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-5 text-sm text-gray-300">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/brands" className="transition hover:text-white">
              Brands
            </Link>
            <Link
              href="/young-drivers"
              className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Under 18? Driving Schools
            </Link>
          </div>

          <div className="flex items-center gap-3 text-sm">
            {user ? (
              <Link
                href="/account"
                className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-gray-200"
              >
                My account
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/signin"
                  className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-gray-200"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-gray-200"
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
