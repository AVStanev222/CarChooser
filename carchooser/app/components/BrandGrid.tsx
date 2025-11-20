// app/components/BrandGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

type Brand = {
  name: string;
  logo?: string;
  href?: string;
};

export const brands: Brand[] = [
  { name: "Audi", logo: "/brands/audi.png", href: "/brands/audi" },
  { name: "Bentley", logo: "/brands/bentley.png", href: "/brands/bentley" },
  { name: "BMW", logo: "/brands/bmw.png", href: "/brands/bmw" },
  { name: "Ferrari", logo: "/brands/ferrari-removebg-preview.png", href: "/brands/ferrari" },
  { name: "Hyundai", logo: "/brands/hyundai.png", href: "/brands/hyundai" },
  { name: "Kia", logo: "/brands/kia-removebg-preview.png", href: "/brands/kia" },
  { name: "Koenigsegg", logo: "/brands/koenigsegg-removebg-preview.png", href: "/brands/koenigsegg" },
  { name: "Mercedes-Benz", logo: "/brands/mercedes.png", href: "/brands/mercedes-benz" },
  { name: "Mitsubishi", logo: "/brands/mitsubishi-removebg-preview.png", href: "/brands/mitsubishi" },
  { name: "Opel", logo: "/brands/opel.png", href: "/brands/opel" },
  { name: "Renault", logo: "/brands/renault-removebg-preview.png", href: "/brands/renault" },
  { name: "Subaru", logo: "/brands/subaru-removebg-preview.png", href: "/brands/subaru" },
  { name: "Tesla", logo: "/brands/tesla.svg", href: "/brands/tesla" },
  { name: "Toyota", logo: "/brands/toyota-removebg-preview.png", href: "/brands/toyota" },
  { name: "Volkswagen", logo: "/brands/volkswagen-removebg-preview.png", href: "/brands/volkswagen" },
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
  const heading =
    variant === "home" ? (
      <>
        Explore <span className="text-purple-400">Popular Brands</span>
      </>
    ) : (
      <>
        Browse <span className="text-purple-400">Every Brand</span>
      </>
    );
  const description =
    variant === "home"
      ? "Learn more about every brand, their models, engines and real-world prices - all curated and kept up to date."
      : "Pick any badge to start exploring specs, trims, and pricing for that brand soon.";

  return (
    <section className="relative bg-[#0a051d] pb-16 pt-4">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>{heading}</SectionTitle>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          {description}
        </p>

        {/* Brand cards */}
        <div className={gridClasses}>
          {visibleBrands.map((brand) => {
            const Card = brand.href ? Link : "div";
            const cardProps = brand.href
              ? { href: brand.href }
              : { role: "presentation" };
            return (
              <Card
                key={brand.name}
                {...cardProps}
                className="bg-[#17112c] hover:bg-[#21173d] rounded-xl border border-white/10 shadow-lg
                           flex flex-col items-center justify-center py-5 px-3 gap-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02]"
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
              </Card>
            );
          })}
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
