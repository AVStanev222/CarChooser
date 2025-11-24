import { NextResponse } from "next/server";
import {
  buildManualImageKey,
  manualVehicleImages,
} from "@/app/data/manualVehicleImages";

const ANGLES = [
  { key: "front", angle: "front", type: "exterior" },
  { key: "rear", angle: "rear", type: "exterior" },
  { key: "interior", angle: "dashboard", type: "interior" },
];

const API_ENDPOINT =
  process.env.CARSXE_API_BASE ?? "https://api.carsxe.com/vehicle-images";

function resolveManualImages(brand: string, slug?: string) {
  const slugKey = slug ? manualVehicleImages[buildManualImageKey(brand, slug)] : null;
  if (slugKey) {
    return slugKey;
  }
  return manualVehicleImages[buildManualImageKey(brand)] ?? null;
}

export async function POST(request: Request) {
  let payload: {
    brand?: string;
    model?: string;
    year?: number;
    slug?: string;
  } = {};

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const { brand, model, year, slug } = payload;

  if (!brand || !model) {
    return NextResponse.json(
      { error: "brand and model are required" },
      { status: 400 },
    );
  }

  const manualImages = resolveManualImages(brand, slug);
  if (manualImages) {
    return NextResponse.json({ images: manualImages });
  }

  const apiKey = process.env.CARSXE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ images: {} });
  }

  const results: Record<string, string | null> = {};

  await Promise.all(
    ANGLES.map(async ({ key, angle, type }) => {
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
        const body = await response.text();
        console.log("CarsXE", response.status, body);

        if (!response.ok) {
          throw new Error("Image request failed");
        }
        const data = JSON.parse(body);
        
        const resolvedUrl =
          data?.image ??
          data?.url ??
          data?.images?.[0]?.url ??
          data?.result?.images?.[0]?.url ??
          null;

        results[key] = resolvedUrl;
      } catch {
        results[key] = null;
      }
    }),
  );

  return NextResponse.json({ images: results });
}
