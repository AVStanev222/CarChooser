"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[85vh] bg-gradient-to-b from-[#0d061f] to-[#160a38] text-white px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between"
      >
        {/* LEFT TEXT */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find the Best Car for Your Needs
          </h1>
          <p className="text-lg text-gray-300">
            CarChooser helps you compare models, explore brands,
            and discover the perfect vehicle for your lifestyle.
          </p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold text-white">
            Explore Brands
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/hero-car.jpg"
            alt="Car"
            width={600}
            height={350}
            priority
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
