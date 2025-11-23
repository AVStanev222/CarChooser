import { notFound } from "next/navigation";
import SectionTitle from "@/app/components/SectionTitle";
import VehicleImageGallery from "@/app/components/VehicleImageGallery";
import BackLink from "@/app/components/BackLink";
import { bmwModels } from "@/app/data/bmw";
import CarActivityTracker from "@/app/components/CarActivityTracker";

interface BMWModelPageProps {
  params: {
    model: string;
  };
}

const specEntries = (car: (typeof bmwModels)[number]) => [
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

export default function BMWModelPage({ params }: BMWModelPageProps) {
  const car = bmwModels.find((entry) => entry.slug === params.model);

  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <BackLink href="/brands/bmw">Back to BMW cars</BackLink>
        <SectionTitle>
          BMW {car.model} <span className="text-purple-400">{car.year}</span>
        </SectionTitle>
        <p className="text-gray-300 max-w-3xl mb-10">{car.summary}</p>
        <CarActivityTracker
          carLabel={`BMW ${car.model} ${car.year}`}
          carPath={`/brands/bmw/${car.slug}`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <VehicleImageGallery brand="BMW" model={car.model} year={car.year} slug={car.slug} />
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
          <h3 className="text-xl font-semibold">BMW ownership notes</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            This space previews the gallery and logbook area that will hook into
            Supabase. Soon you will be able to upload service receipts and
            monitor market price trends for every chassis.
          </p>
        </div>
      </section>
    </main>
  );
}
