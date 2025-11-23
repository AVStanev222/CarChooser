import BrandGrid from "../components/BrandGrid";
import Navbar from "../components/Navbar";
import BackLink from "../components/BackLink";

export const metadata = {
  title: "Brands | CarChooser",
  description: "Browse every brand available in CarChooser.",
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-page text-text transition-colors">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 pt-10">
        <BackLink href="/">Back to homepage</BackLink>
      </section>
      <BrandGrid variant="all" />
    </main>
  );
}
