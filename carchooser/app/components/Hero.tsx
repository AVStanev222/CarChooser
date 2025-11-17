// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0d061f] to-[#160a38] text-white">
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

          <p className="text-lg text-gray-300">
            Compare brands, explore real specs and prices, and discover the best
            car for your lifestyle in just a few clicks.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-full font-semibold text-white">
              Explore Brands
            </button>
            <button className="px-6 py-3 rounded-full border border-white/20 text-sm text-gray-200 hover:bg-white/10 transition">
              Learn How CarChooser Works
            </button>
          </div>

          <div className="flex gap-4 pt-4 text-xs text-gray-400">
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
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/hero-car.jpg"
              alt="Car in scenic landscape"
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
