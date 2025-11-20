import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle";
import BackLink from "@/app/components/BackLink";
import { volkswagenModels } from "@/app/data/volkswagen";

export default function VolkswagenModelsPage() {
  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <BackLink href="/brands">Back to all brands</BackLink>
        <SectionTitle>
          Volkswagen <span className="text-purple-400">Lineup</span>
        </SectionTitle>
        <p className="text-gray-300 max-w-3xl mb-10">
          Classic Polos, iconic Golfs, and modern ID EVs—scroll through VW's
          breadth of engineering ahead of our full Supabase integration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {volkswagenModels.map((model) => (
            <Link
              key={model.slug}
              href={`/brands/volkswagen/${model.slug}`}
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
