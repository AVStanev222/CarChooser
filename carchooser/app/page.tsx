import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import BrandGrid from "./components/BrandGrid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#0a0319] min-h-screen">
      <Hero />

      <SectionTitle>Explore Popular Brands</SectionTitle>

      <BrandGrid />

      <div className="flex justify-center mt-10 pb-20">
        <Link
          href="/brands"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold text-white"
        >
          See More Brands
        </Link>
      </div>
    </div>
  );
}
