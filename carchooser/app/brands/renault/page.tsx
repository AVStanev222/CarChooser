import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle";
import { renaultModels } from "@/app/data/renault";

export default function RenaultModelsPage() {
  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <SectionTitle>
          Renault <span className="text-purple-400">Lineage</span>
        </SectionTitle>
        <p className="text-gray-300 max-w-3xl mb-10">
          Track French innovation from retro Twingos to electric Zoes and rugged
          Alaskans. Tap a badge to view curated specs before the full Supabase
          build arrives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renaultModels.map((model) => (
            <Link
              key={model.slug}
              href={`/brands/renault/${model.slug}`}
              className="bg-[#17112c] border border-white/10 rounded-2xl p-5 flex flex-col gap-4 hover:-translate-y-1 hover:border-purple-400/60 transition"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-purple-300/80">
                  {model.year}
                </p>
                <h2 className="text-2xl font-semibold">{model.model}</h2>
              </div>
              <p className="text-sm text-gray-400 min-h-[3.5rem]">
                {model.summary}
              </p>
              <div className="text-xs text-gray-400 grid grid-cols-2 gap-3">
                <span className="font-semibold text-white">Engine:</span>
                <span>{model.engine}</span>
                <span className="font-semibold text-white">Drive:</span>
                <span>{model.drivetrain}</span>
                <span className="font-semibold text-white">Price Used:</span>
                <span>{model.priceUsed}</span>
              </div>
              <span className="mt-3 text-purple-300 text-sm font-semibold">
                View specs →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
