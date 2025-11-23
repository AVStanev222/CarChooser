
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

type Brand = {
  name: string;
  href: string;
  logo?: string;
};

export const brands: Brand[] = [
  { name: "Audi", href: "/brands/audi", logo: "/brands/audi.png" },
  { name: "Bentley", href: "/brands/bentley", logo: "/brands/bentley.png" },
  { name: "BMW", href: "/brands/bmw", logo: "/brands/bmw.png" },
  { name: "Ferrari", href: "/brands/ferrari", logo: "/brands/ferrari-removebg-preview.png" },
  { name: "Hyundai", href: "/brands/hyundai", logo: "/brands/hyundai.png" },
  { name: "Kia", href: "/brands/kia", logo: "/brands/kia-removebg-preview.png" },
  { name: "Koenigsegg", href: "/brands/koenigsegg", logo: "/brands/koenigsegg-removebg-preview.png" },
  { name: "Mercedes-Benz", href: "/brands/mercedes-benz", logo: "/brands/mercedes.png" },
  { name: "Mitsubishi", href: "/brands/mitsubishi", logo: "/brands/mitsubishi-removebg-preview.png" },
  { name: "Opel", href: "/brands/opel", logo: "/brands/opel.png" },
  { name: "Renault", href: "/brands/renault", logo: "/brands/renault-removebg-preview.png" },
  { name: "Subaru", href: "/brands/subaru", logo: "/brands/subaru-removebg-preview.png" },
  { name: "Tesla", href: "/brands/tesla", logo: "/brands/tesla.svg" },
  { name: "Toyota", href: "/brands/toyota", logo: "/brands/toyota-removebg-preview.png" },
  { name: "Volkswagen", href: "/brands/volkswagen", logo: "/brands/volkswagen-removebg-preview.png" },
];

const FEATURED_NAMES = new Set(["Mercedes-Benz", "BMW", "Toyota"]);

type BrandGridProps = {
  variant?: "home" | "all";
};

export default function BrandGrid({ variant = "home" }: BrandGridProps) {
  const featuredBrands = brands.filter((brand) => FEATURED_NAMES.has(brand.name));
  const visibleBrands = variant === "home" ? featuredBrands : brands;
  const gridClasses =
    variant === "home"
      ? "max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center"
      : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5";

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
        <div className={gridClasses}>
          {visibleBrands.map((brand) => (
            <Link key={brand.name} href={brand.href} className="block group">
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 15 }}
                className="bg-[#17112c] group-hover:bg-[#21173d] rounded-xl border border-white/10 shadow-lg
                           flex flex-col items-center justify-center py-5 px-3 gap-3 cursor-pointer"
              >
                <div className="h-16 w-16 rounded-full bg-white/95 border border-white/30 flex items-center justify-center overflow-hidden shadow-inner">
                  {brand.logo ? (
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-sm font-semibold">{brand.name[0]}</span>
                  )}
                </div>
                <span className="text-sm font-medium text-white">
                  {brand.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View all brands button */}
        {variant === "home" && (
          <div className="flex justify-center mt-10">
            <Link
              href="/brands"
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 font-semibold text-white text-sm inline-flex items-center justify-center"
            >
              View All Brands
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
