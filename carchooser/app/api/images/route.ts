import { NextResponse } from "next/server";
import {
  manualVehicleImages,
  buildManualImageKey,
  ImageSlots,
} from "@/app/data/manualVehicleImages";

const ANGLES = [
  { key: "front", angle: "front", type: "exterior" },
  { key: "rear", angle: "rear", type: "exterior" },
  { key: "interior", angle: "dashboard", type: "interior" },
];

const API_ENDPOINT =
  process.env.CARSXE_API_BASE ?? "https://api.carsxe.com/vehicle-images";

const normalize = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, "-");

const manualLookupKeys = (
  brand: string,
  model: string,
  year?: number,
  slug?: string,
) => {
  const keys: string[] = [];
  if (slug) {
    keys.push(buildManualImageKey(brand, slug));
  }
  const baseKey = `${normalize(brand)}:${normalize(model)}`;
  if (year) {
    keys.push(`${baseKey}-${year}`);
  }
  keys.push(baseKey);
  keys.push(buildManualImageKey(brand)); // brand-level fallback
  return keys;
};

const getManualImages = (
  brand: string,
  model: string,
  year?: number,
  slug?: string,
): ImageSlots | null => {
  for (const key of manualLookupKeys(brand, model, year, slug)) {
    const images = manualVehicleImages[key];
    if (images) {
      return { ...images };
    }
  }
  return null;
};

export async function POST(request: Request) {
  let payload: {
    brand?: string;
    model?: string;
    year?: number;
    slug?: string;
  } = {};

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const { brand, model, year, slug } = payload;

  if (!brand || !model) {
    return NextResponse.json(
      { error: "brand and model are required" },
      { status: 400 },
    );
  }

  const results: Record<string, string | null> = {};
  const manualImages = getManualImages(brand, model, year, slug);

  if (manualImages) {
    ANGLES.forEach(({ key }) => {
      if (manualImages[key]) {
        results[key] = manualImages[key] ?? null;
      }
    });
  }

  const slotsToFetch = ANGLES.filter(({ key }) => !results[key]);

  const apiKey = process.env.CARSXE_API_KEY;
  if (!apiKey && slotsToFetch.length === 0) {
    return NextResponse.json({ images: results });
  }

  if (!apiKey && slotsToFetch.length > 0) {
    if (Object.keys(results).length > 0) {
      return NextResponse.json({ images: results });
    }
    return NextResponse.json(
      { error: "CARSXE_API_KEY is not configured" },
      { status: 500 },
    );
  }

  await Promise.all(
    slotsToFetch.map(async ({ key, angle, type }) => {
      try {
        const url = new URL(API_ENDPOINT);
        url.searchParams.set("key", apiKey);
        url.searchParams.set("make", brand);
        url.searchParams.set("model", model);
        if (year) {
          url.searchParams.set("year", String(year));
        }
        if (angle) {
          url.searchParams.set("angle", angle);
        }
        if (type) {
          url.searchParams.set("type", type);
        }

        const response = await fetch(url.toString());
        if (!response.ok) {
          throw new Error("Image request failed");
        }

        const data = await response.json();
        const resolvedUrl =
          data?.image ??
          data?.url ??
          data?.images?.[0]?.url ??
          data?.result?.images?.[0]?.url ??
          null;

        results[key] = resolvedUrl;
      } catch (error) {
        results[key] = null;
      }
    }),
  );

  return NextResponse.json({ images: results });
}
