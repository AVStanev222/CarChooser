import { notFound } from "next/navigation";
import SectionTitle from "@/app/components/SectionTitle";
import BackLink from "@/app/components/BackLink";
import { kiaModels } from "@/app/data/kia";

interface KiaModelPageProps {
  params: {
    model: string;
  };
}

const specEntries = (car: (typeof kiaModels)[number]) => [
  { label: "Year", value: car.year.toString() },
  { label: "Engine", value: car.engine },
  { label: "Horsepower", value: `${car.horsepower} hp` },
  { label: "Fuel", value: car.fuel },
  { label: "Consumption", value: car.consumption },
  { label: "Drive", value: car.drivetrain },
  { label: "Body", value: car.bodyType },
  { label: "Price (new)", value: car.priceNew },
  { label: "Price (used)", value: car.priceUsed },
];

export default function KiaModelPage({ params }: KiaModelPageProps) {
  const car = kiaModels.find((entry) => entry.slug === params.model);

  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <BackLink href="/brands/kia">Back to Kia cars</BackLink>
        <SectionTitle>
          Kia {car.model} <span className="text-purple-400">{car.year}</span>
        </SectionTitle>
        <p className="text-gray-300 max-w-3xl mb-10">{car.summary}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-48 rounded-2xl border border-dashed border-white/20 flex items-center justify-center text-sm text-gray-400 bg-[#100826]"
              >
                Add photo {index + 1}
              </div>
            ))}
          </div>
          <div className="bg-[#17112c] border border-white/10 rounded-2xl p-5 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Key Specs</h2>
            <dl className="space-y-3 text-sm">
              {specEntries(car).map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4">
                  <dt className="text-gray-400">{spec.label}</dt>
                  <dd className="text-white text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="bg-[#0d071d] border border-purple-500/20 rounded-2xl p-6 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Kia ownership notes</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Once Supabase data sync ships you will be able to store builds,
            upload service history, and track price trends for each Kia you save.
          </p>
        </div>
      </section>
    </main>
  );
}
