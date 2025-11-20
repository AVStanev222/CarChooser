import { NextResponse } from "next/server";
import { catalogCars } from "@/app/data/catalog";

const brandNames = Array.from(
  new Set(catalogCars.map((car) => car.brand.toLowerCase())),
);

const bodyTypePreferences = [
  { keywords: ["suv", "crossover"], match: "SUV" },
  { keywords: ["coupe", "sport"], match: "Coupe" },
  { keywords: ["sedan", "saloon"], match: "Sedan" },
  { keywords: ["hatch", "compact"], match: "Hatchback" },
  { keywords: ["wagon", "estate"], match: "Wagon" },
  { keywords: ["convertible", "spyder", "roadster"], match: "Convertible" },
];

const fallbackSuggestions = catalogCars.slice(0, 3);

type ChatRequest = {
  message?: string;
};

const cleanNumber = (raw: string) => Number(raw.replace(/[^0-9.]/g, ""));

const parseBudget = (text: string): number | null => {
  const budgetRegex = /(\d+[\d.,]*)(?:\s*)(k|к)?(?:\s*)(?:eur|euro|€|usd|dollars|bgn|лв|$)?/i;
  const match = text.match(budgetRegex);
  if (!match) {
    return null;
  }
  const base = cleanNumber(match[1]);
  if (Number.isNaN(base) || base === 0) {
    return null;
  }
  const multiplier = match[2] ? 1000 : 1;
  const inferred = base * multiplier;
  return inferred < 1000 ? inferred * 1000 : inferred;
};

const parseYear = (text: string): number | null => {
  const match = text.match(/(19|20)\d{2}/);
  if (!match) {
    return null;
  }
  return Number(match[0]);
};

const inferBodyType = (text: string): string | null => {
  const lower = text.toLowerCase();
  for (const preference of bodyTypePreferences) {
    if (preference.keywords.some((keyword) => lower.includes(keyword))) {
      return preference.match;
    }
  }
  if (lower.includes("family") || lower.includes("practical")) {
    return "SUV";
  }
  if (lower.includes("track") || lower.includes("fast")) {
    return "Coupe";
  }
  return null;
};

const pickPriceReference = (car: (typeof catalogCars)[number]) => {
  if (car.priceUsedMin && car.priceUsedMax) {
    return (car.priceUsedMin + car.priceUsedMax) / 2;
  }
  if (car.priceUsedMin) {
    return car.priceUsedMin;
  }
  if (car.priceNewValue) {
    return car.priceNewValue;
  }
  return null;
};

export async function POST(request: Request) {
  const { message } = (await request.json().catch(() => ({}))) as ChatRequest;

  if (!message || typeof message !== "string" || !message.trim()) {
    return NextResponse.json(
      { error: "Please provide a question about a car you need." },
      { status: 400 },
    );
  }

  const normalized = message.toLowerCase();
  const brand = brandNames.find((name) => normalized.includes(name));
  const budget = parseBudget(normalized);
  const targetYear = parseYear(normalized);
  const desiredBodyType = inferBodyType(normalized);

  let filtered = catalogCars;
  if (brand) {
    filtered = filtered.filter(
      (car) => car.brand.toLowerCase() === brand,
    );
  }

  if (targetYear) {
    filtered = filtered.filter((car) => Math.abs(car.year - targetYear) <= 5);
    if (!filtered.length) {
      filtered = catalogCars.filter((car) =>
        Math.abs(car.year - targetYear) <= 10,
      );
    }
  }

  if (desiredBodyType) {
    const matches = filtered.filter((car) =>
      car.bodyType.toLowerCase().includes(desiredBodyType.toLowerCase()),
    );
    if (matches.length) {
      filtered = matches;
    }
  }

  if (budget) {
    const withPrice = filtered.filter((car) => pickPriceReference(car));
    if (withPrice.length) {
      filtered = withPrice;
    }
  }

  const scored = filtered.map((car) => {
    let score = 0;
    if (brand && car.brand.toLowerCase() === brand) {
      score += 20;
    }
    if (targetYear) {
      const yearDiff = Math.abs(car.year - targetYear);
      score += Math.max(0, 20 - yearDiff);
    }
    if (budget) {
      const price = pickPriceReference(car);
      if (price) {
        const diffRatio = Math.abs(price - budget) / budget;
        score += Math.max(0, 20 - diffRatio * 20);
      }
    }
    if (
      desiredBodyType &&
      car.bodyType.toLowerCase().includes(desiredBodyType.toLowerCase())
    ) {
      score += 10;
    }
    return { car, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const matches = scored
    .slice(0, 3)
    .map(({ car }) => ({
      brand: car.brand,
      model: car.model,
      year: car.year,
      summary: car.summary,
      priceUsed: car.priceUsed,
      path: car.path,
      bodyType: car.bodyType,
    }));

  let reply: string;
  if (matches.length) {
    const suggestionsText = matches
      .map(
        (match) =>
          `${match.brand} ${match.model} ${match.year} (${match.bodyType}) around ${match.priceUsed}`,
      )
      .join("; ");
    reply = `Here are some options that fit your request: ${suggestionsText}. Tap a card to explore.`;
  } else {
    reply =
      "I couldn't find an exact match yet, but here are a few interesting models from our catalog you can explore.";
  }

  const suggested = matches.length
    ? matches
    : fallbackSuggestions.map((car) => ({
        brand: car.brand,
        model: car.model,
        year: car.year,
        summary: car.summary,
        priceUsed: car.priceUsed,
        path: car.path,
        bodyType: car.bodyType,
      }));

  return NextResponse.json({ reply, suggestions: suggested });
}
