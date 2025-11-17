// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandGrid from "./components/BrandGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <Navbar />
      <Hero />
      <BrandGrid />
    </main>
  );
}
