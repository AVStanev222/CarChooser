import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle";
import BackLink from "@/app/components/BackLink";
import { subaruModels } from "@/app/data/subaru";

export default function SubaruModelsPage() {
  return (
    <main className="min-h-screen bg-page text-text transition-colors">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <BackLink href="/brands">Back to all brands</BackLink>
        <SectionTitle>
          Subaru <span className="text-purple-400">Model Range</span>
        </SectionTitle>
        <p className="text-muted max-w-3xl mb-10">
          From turbocharged WRX icons to rugged Outbacks, explore every Subaru in
          our catalog and tap into full spec sheets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subaruModels.map((model) => (
            <Link
              key={model.slug}
              href={`/brands/subaru/${model.slug}`}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 hover:-translate-y-1 hover:border-purple-400/60 transition"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-purple-300/80">
                  {model.year}
                </p>
                <h2 className="text-2xl font-semibold">{model.model}</h2>
              </div>
              <p className="text-sm text-muted min-h-[3.5rem]">
                {model.summary}
              </p>
              <div className="text-xs text-muted grid grid-cols-2 gap-3">
                <span className="font-semibold text-text">Engine:</span>
                <span>{model.engine}</span>
                <span className="font-semibold text-text">Drive:</span>
                <span>{model.drivetrain}</span>
                <span className="font-semibold text-text">Price Used:</span>
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
