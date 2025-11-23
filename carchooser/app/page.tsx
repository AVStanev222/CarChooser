// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandGrid from "./components/BrandGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-page text-text transition-colors">
      <Navbar />
      <Hero />
      <BrandGrid />
    </main>
  );
}
