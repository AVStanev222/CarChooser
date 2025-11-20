import { audiModels } from "@/app/data/audi";
import { bentleyModels } from "@/app/data/bentley";
import { bmwModels } from "@/app/data/bmw";
import { ferrariModels } from "@/app/data/ferrari";
import { hyundaiModels } from "@/app/data/hyundai";
import { kiaModels } from "@/app/data/kia";
import { koenigseggModels } from "@/app/data/koenigsegg";
import { mercedesModels } from "@/app/data/mercedes";
import { mitsubishiModels } from "@/app/data/mitsubishi";
import { opelModels } from "@/app/data/opel";
import { renaultModels } from "@/app/data/renault";
import { subaruModels } from "@/app/data/subaru";
import { teslaModels } from "@/app/data/tesla";
import { toyotaModels } from "@/app/data/toyota";
import { volkswagenModels } from "@/app/data/volkswagen";

export type CatalogCar = {
  brand: string;
  slug: string;
  model: string;
  year: number;
  engine: string;
  horsepower: number;
  fuel: string;
  consumption: string;
  drivetrain: string;
  bodyType: string;
  priceNew: string;
  priceUsed: string;
  priceNewValue?: number | null;
  priceUsedMin?: number | null;
  priceUsedMax?: number | null;
};

const sanitizeEuro = (value: string) =>
  value.replace(/€/g, "").replace(/,/g, "").replace(/\s/g, "").trim();

const parseEuroValue = (value: string): number | null => {
  if (!value.includes("€")) {
    return null;
  }
  const numeric = sanitizeEuro(value).replace(/[^0-9.]/g, "");
  const parsed = Number(numeric);
  return Number.isNaN(parsed) ? null : parsed;
};

const parseEuroRange = (
  value: string,
): { min: number | null; max: number | null } => {
  if (!value.includes("€")) {
    return { min: null, max: null };
  }
  const [rawMin, rawMax] = value.split("–");
  if (rawMax === undefined) {
    const single = parseEuroValue(value);
    return { min: single, max: single };
  }
  const parse = (segment: string) =>
    Number(sanitizeEuro(segment).replace(/[^0-9.]/g, ""));
  const min = parse(rawMin);
  const max = parse(rawMax);
  return {
    min: Number.isNaN(min) ? null : min,
    max: Number.isNaN(max) ? null : max,
  };
};

const collections = [
  { brand: "Audi", models: audiModels },
  { brand: "Bentley", models: bentleyModels },
  { brand: "BMW", models: bmwModels },
  { brand: "Ferrari", models: ferrariModels },
  { brand: "Hyundai", models: hyundaiModels },
  { brand: "Kia", models: kiaModels },
  { brand: "Koenigsegg", models: koenigseggModels },
  { brand: "Mercedes-Benz", models: mercedesModels },
  { brand: "Mitsubishi", models: mitsubishiModels },
  { brand: "Opel", models: opelModels },
  { brand: "Renault", models: renaultModels },
  { brand: "Subaru", models: subaruModels },
  { brand: "Tesla", models: teslaModels },
  { brand: "Toyota", models: toyotaModels },
  { brand: "Volkswagen", models: volkswagenModels },
];

export const catalogCars: CatalogCar[] = collections.flatMap(({ brand, models }) =>
  models.map((model) => {
    const priceNewValue = parseEuroValue(model.priceNew);
    const priceRange = parseEuroRange(model.priceUsed);
    return {
      brand,
      ...model,
      priceNewValue,
      priceUsedMin: priceRange.min,
      priceUsedMax: priceRange.max,
    };
  }),
);
