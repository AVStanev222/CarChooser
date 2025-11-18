import BrandGrid from "../components/BrandGrid";
import Navbar from "../components/Navbar";

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-300/80">
            All brands
          </p>
          <h1 className="text-4xl font-bold mt-4 mb-3">
            Start with a brand to explore its cars
          </h1>
          <p className="text-gray-300">
            Pick any badge below to begin outlining models, trims, and pricing.
            We will keep expanding each brand with specs, photos, and ownership
            notes so that the Cars page becomes your central garage.
          </p>
        </div>
      </section>
      <BrandGrid variant="all" />
    </main>
  );
}
