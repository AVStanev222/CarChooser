import BrandGrid from "../components/BrandGrid";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Brands | CarChooser",
  description: "Browse every brand available in CarChooser.",
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <Navbar />
      <BrandGrid variant="all" />
    </main>
  );
}
