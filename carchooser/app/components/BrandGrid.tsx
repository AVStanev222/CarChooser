import Image from "next/image";

const brands = [
  { name: "BMW", logo: "/brands/bmw.png" },
  { name: "Audi", logo: "/brands/audi.png" },
  { name: "Mercedes", logo: "/brands/mercedes.png" },
  { name: "Volkswagen", logo: "/brands/vw.png" },
  { name: "Hyundai", logo: "/brands/hyundai.png" },
  { name: "Kia", logo: "/brands/kia.png" },
  { name: "Peugeot", logo: "/brands/peugeot.png" },
  { name: "Ford", logo: "/brands/ford.png" },
];

export default function BrandGrid() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 text-center text-white">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition cursor-pointer"
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={60}
            height={60}
            className="mx-auto mb-2"
          />
          <p>{brand.name}</p>
        </div>
      ))}
    </div>
  );
}
