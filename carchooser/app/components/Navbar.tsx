// app/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/5 bg-[#050214]/80 backdrop-blur z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-xs font-bold">
            CC
          </div>
          <span className="font-semibold tracking-tight">CarChooser</span>
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/cars" className="transition hover:text-white">
            Cars
          </Link>
          <Link
            href="/young-drivers"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Under 18? Driving Schools
          </Link>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
