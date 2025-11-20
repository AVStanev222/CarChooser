import { NextResponse } from "next/server";
import { catalogCars, CatalogCar } from "@/app/data/catalog";

type SearchRequest = {
  brands?: string[];
  minYear?: number;
  maxYear?: number;
  minHorsepower?: number;
  maxHorsepower?: number;
  minPrice?: number;
  maxPrice?: number;
  fuelTypes?: string[];
  drivetrains?: string[];
  bodyTypes?: string[];
  limit?: number;
};

const normalizeArray = (value?: string[]) =>
  value?.map((entry) => entry.toLowerCase());

const matchesPriceRange = (
  car: CatalogCar,
  minPrice?: number,
  maxPrice?: number,
) => {
  const priceMin = car.priceUsedMin ?? car.priceUsedMax ?? car.priceNewValue ?? null;
  const priceMax = car.priceUsedMax ?? car.priceUsedMin ?? car.priceNewValue ?? null;

  if (minPrice !== undefined) {
    if (priceMax === null || priceMax < minPrice) {
      return false;
    }
  }

  if (maxPrice !== undefined) {
    if (priceMin === null || priceMin > maxPrice) {
      return false;
    }
  }

  return true;
};

const filterCars = (filters: SearchRequest) => {
  const brandFilters = normalizeArray(filters.brands);
  const drivetrainFilters = normalizeArray(filters.drivetrains);
  const bodyFilters = normalizeArray(filters.bodyTypes);
  const fuelFilters = normalizeArray(filters.fuelTypes);

  return catalogCars.filter((car) => {
    if (brandFilters && brandFilters.length > 0) {
      if (!brandFilters.includes(car.brand.toLowerCase())) {
        return false;
      }
    }

    if (filters.minYear !== undefined && car.year < filters.minYear) {
      return false;
    }

    if (filters.maxYear !== undefined && car.year > filters.maxYear) {
      return false;
    }

    if (
      filters.minHorsepower !== undefined &&
      car.horsepower < filters.minHorsepower
    ) {
      return false;
    }

    if (
      filters.maxHorsepower !== undefined &&
      car.horsepower > filters.maxHorsepower
    ) {
      return false;
    }

    if (!matchesPriceRange(car, filters.minPrice, filters.maxPrice)) {
      return false;
    }

    if (drivetrainFilters && drivetrainFilters.length > 0) {
      if (!drivetrainFilters.includes(car.drivetrain.toLowerCase())) {
        return false;
      }
    }

    if (bodyFilters && bodyFilters.length > 0) {
      if (!bodyFilters.includes(car.bodyType.toLowerCase())) {
        return false;
      }
    }

    if (fuelFilters && fuelFilters.length > 0) {
      if (!fuelFilters.includes(car.fuel.toLowerCase())) {
        return false;
      }
    }

    return true;
  });
};

export async function POST(request: Request) {
  let payload: SearchRequest;

  try {
    payload = (await request.json()) as SearchRequest;
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const limit = Math.max(1, Math.min(payload.limit ?? 20, 100));
  const matches = filterCars(payload);

  return NextResponse.json({
    total: matches.length,
    results: matches.slice(0, limit),
  });
}
