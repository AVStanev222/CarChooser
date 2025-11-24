import BrandGrid from "../components/BrandGrid";
import BackLink from "../components/BackLink";
import CarGuideChat from "../components/CarGuideChat";

export const metadata = {
  title: "Brands | CarChooser",
  description: "Browse every brand available in CarChooser.",
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-page text-text transition-colors">
      <section className="max-w-6xl mx-auto px-6 pt-10 space-y-8">
        <BackLink href="/">Back to homepage</BackLink>
        <CarGuideChat />
      </section>
      <BrandGrid variant="all" />
    </main>
  );
}
