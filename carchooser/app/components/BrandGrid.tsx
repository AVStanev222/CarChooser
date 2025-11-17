// app/components/BrandGrid.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const brands = [
  { name: "BMW", logo: "/brands/bmw.png" },
  { name: "Audi", logo: "/brands/audi.png" },
  { name: "Mercedes", logo: "/brands/mercedes.png" },
  { name: "Volkswagen", logo: "/brands/vw.png" },
  { name: "Hyundai", logo: "/brands/hyundai.png" },
  { name: "Kia", logo: "/brands/kia.png" },
];

export default function BrandGrid() {
  return (
    <section className="relative bg-[#0a051d] pb-16 pt-4">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>
          Explore <span className="text-purple-400">Popular Brands</span>
        </SectionTitle>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Learn more about every brand, their models, engines and real-world
          prices — all curated and kept up to date.
        </p>

        {/* Brand cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {brands.map((brand) => (
            <motion.button
              key={brand.name}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
              className="bg-[#17112c] hover:bg-[#21173d] rounded-xl border border-white/10 shadow-lg
                         flex flex-col items-center justify-center py-5 px-3 gap-3 cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-black/40 flex items-center justify-center">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold">{brand.name[0]}</span>
                )}
              </div>
              <span className="text-sm font-medium text-white">
                {brand.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* View all brands button */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 font-semibold text-white text-sm">
            View All Brands
          </button>
        </div>
      </div>
    </section>
  );
}
