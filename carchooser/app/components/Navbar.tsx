// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/5 bg-[#050214]/80 backdrop-blur text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
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
          <Link
            href="/signup"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
