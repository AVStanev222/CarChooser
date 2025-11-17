// app/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/5 bg-[#050214]/80 backdrop-blur z-30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-purple-600 flex items-center justify-center text-xs font-bold">
            CC
          </div>
          <span className="font-semibold tracking-tight">CarChooser</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/cars" className="hover:text-white transition">
            Cars
          </Link>
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
