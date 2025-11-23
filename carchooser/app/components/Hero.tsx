// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-section text-text transition-colors dark:bg-gradient-to-b dark:from-[#0d061f] dark:to-[#160a38]">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-purple-300/80">
            Smart Car Selection
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Car Visuals that{" "}
            <span className="text-purple-400">Accelerate Your Choice</span>
          </h1>

          <p className="text-lg text-muted">
            Compare brands, explore real specs and prices, and discover the best
            car for your lifestyle in just a few clicks.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/brands"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-full font-semibold text-white"
            >
              Explore Brands
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-full border border-border text-sm text-muted transition hover:border-button hover:text-button dark:text-gray-200 dark:hover:bg-white/10"
            >
              Learn How CarChooser Works
            </Link>
          </div>

          <div className="flex gap-4 pt-4 text-xs text-muted">
            <span>2002–2025 models</span>
            <span>New & 2nd hand prices</span>
            <span>Smart AI assistant</span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full md:w-[520px] lg:w-[580px]"
        >
          <div className="absolute -inset-6 bg-purple-600/40 blur-3xl opacity-40 pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
            <Image
              src="/homepage.png"
              alt="CarChooser homepage preview"
              width={900}
              height={500}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
