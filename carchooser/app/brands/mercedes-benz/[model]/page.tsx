import { notFound } from "next/navigation";
import SectionTitle from "@/app/components/SectionTitle";
import VehicleImageGallery from "@/app/components/VehicleImageGallery";
import BackLink from "@/app/components/BackLink";
import { mercedesModels } from "@/app/data/mercedes";
import CarActivityTracker from "@/app/components/CarActivityTracker";

interface MercedesModelPageProps {
  params: {
    model: string;
  };
}

const specEntries = (car: (typeof mercedesModels)[number]) => [
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

export default function MercedesModelPage({ params }: MercedesModelPageProps) {
  const car = mercedesModels.find((entry) => entry.slug === params.model);

  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-page text-text transition-colors">
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <BackLink href="/brands/mercedes-benz">Back to Mercedes-Benz cars</BackLink>
        <SectionTitle>
          Mercedes-Benz {car.model} <span className="text-purple-400">{car.year}</span>
        </SectionTitle>
        <p className="text-muted max-w-3xl mb-10">{car.summary}</p>
        <CarActivityTracker
          carLabel={`Mercedes-Benz ${car.model} ${car.year}`}
          carPath={`/brands/mercedes-benz/${car.slug}`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <VehicleImageGallery brand="Mercedes-Benz" model={car.model} year={car.year} slug={car.slug} />
          <div className="bg-card border border-border rounded-2xl p-5 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Key Specs</h2>
            <dl className="space-y-3 text-sm">
              {specEntries(car).map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4">
                  <dt className="text-muted">{spec.label}</dt>
                  <dd className="text-text text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="bg-card-muted border border-purple-500/20 rounded-2xl p-6 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Mercedes ownership notes</h3>
          <p className="text-muted text-sm leading-relaxed">
            Soon you will be able to pin favorite specs, save maintenance events,
            and track real-world pricing via our Supabase-powered garage.
          </p>
        </div>
      </section>
    </main>
  );
}
