"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGE_SLOTS = [
  { key: "front", label: "Front exterior" },
  { key: "rear", label: "Rear exterior" },
  { key: "interior", label: "Interior" },
];

type Props = {
  brand: string;
  model: string;
  year: number;
  slug: string;
};

type ImageResponse = Record<string, string | null>;

export default function VehicleImageGallery({
  brand,
  model,
  year,
  slug,
}: Props) {
  const [images, setImages] = useState<ImageResponse>({});
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    async function loadPhotos() {
      setStatus("loading");
      setErrorMessage(null);
      try {
        const response = await fetch("/api/images", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ brand, model, year, slug }),
        });
        if (!response.ok) {
          throw new Error("Unable to fetch vehicle images");
        }
        const payload = await response.json();
        if (!ignore) {
          setImages(payload.images ?? {});
          setStatus("loaded");
        }
      } catch (error) {
        if (!ignore) {
          setStatus("error");
          setErrorMessage(
            error instanceof Error ? error.message : "Could not load images",
          );
        }
      }
    }

    loadPhotos();
    return () => {
      ignore = true;
    };
  }, [brand, model, year, slug]);

  return (
    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {IMAGE_SLOTS.map((slot) => {
        const url = images[slot.key];
        return (
          <div
            key={slot.key}
            className="relative h-48 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden bg-[#100826]"
          >
            {url ? (
              <Image
                src={url}
                alt={`${brand} ${model} ${slot.label}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
            ) : (
              <div className="text-center px-4 text-sm text-gray-400">
                {status === "loading" && !images[slot.key]
                  ? "Fetching photo..."
                  : slot.label}
                {status === "error" && (
                  <p className="text-xs text-red-400 mt-2">
                    {errorMessage ?? "Unable to load image"}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
