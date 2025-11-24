import { NextResponse } from "next/server";
import { catalogCars } from "@/app/data/catalog";

const brandNames = Array.from(
  new Set(catalogCars.map((car) => car.brand.toLowerCase())),
);

const brandSynonyms: Record<string, string> = {
  merc: "mercedes-benz",
  mercedes: "mercedes-benz",
  "mercedes benz": "mercedes-benz",
  benz: "mercedes-benz",
  vw: "volkswagen",
  vag: "volkswagen",
  volks: "volkswagen",
  bimmer: "bmw",
  beemer: "bmw",
  lambo: "lamborghini",
  lada: "lada",
  tes: "tesla",
};

const catalogModelNames = Array.from(
  new Set(
    catalogCars.map((car) => `${car.brand.toLowerCase()} ${car.model.toLowerCase()}`),
  ),
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

const parseBudgetRange = (
  text: string,
): { min: number | null; max: number | null } => {
  const rangeRegex =
    /(?:(?:between|from)\s*)?(\d+[\d.,]*)\s*(k|к)?\s*(?:[-to]|and|to)\s*(\d+[\d.,]*)\s*(k|к)?/i;
  const range = text.match(rangeRegex);
  if (range) {
    const minBase = cleanNumber(range[1]);
    const maxBase = cleanNumber(range[3]);
    if (!Number.isNaN(minBase) && !Number.isNaN(maxBase)) {
      const min = minBase * (range[2] ? 1000 : 1);
      const max = maxBase * (range[4] ? 1000 : 1);
      return {
        min: min < 1000 ? min * 1000 : min,
        max: max < 1000 ? max * 1000 : max,
      };
    }
  }

  const singleRegex =
    /(?:around|under|below|above|under|budget)?\s*(\d+[\d.,]*)(?:\s*)(k|к)?(?:\s*)(?:eur|euro|€|usd|dollars|bgn|лв|$)?/i;
  const match = text.match(singleRegex);
  if (!match) {
    return { min: null, max: null };
  }
  const base = cleanNumber(match[1]);
  if (Number.isNaN(base) || base === 0) {
    return { min: null, max: null };
  }
  const multiplier = match[2] ? 1000 : 1;
  const inferred = base * multiplier;
  const value = inferred < 1000 ? inferred * 1000 : inferred;
  return { min: value, max: value };
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

const detectBrand = (text: string): string | null => {
  const lower = text.toLowerCase();
  for (const [alias, canonical] of Object.entries(brandSynonyms)) {
    if (lower.includes(alias)) {
      return canonical;
    }
  }
  return brandNames.find((name) => lower.includes(name)) ?? null;
};

const detectModels = (text: string) => {
  const lower = text.toLowerCase();
  return catalogModelNames.filter((model) => lower.includes(model));
};

const mapSuggestion = (car: (typeof catalogCars)[number]) => ({
  brand: car.brand,
  model: car.model,
  year: car.year,
  summary: car.summary,
  priceUsed: car.priceUsed,
  path: car.path,
  bodyType: car.bodyType,
});

export async function POST(request: Request) {
  try {
    const { message } = (await request.json().catch(() => ({}))) as ChatRequest;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please provide a question about a car you need." },
        { status: 400 },
      );
    }

    const normalized = message.toLowerCase();
    const brand = detectBrand(normalized);
    const mentionedModels = detectModels(normalized);
    const budgetRange = parseBudgetRange(normalized);
    const budget =
      budgetRange.min && budgetRange.max
        ? (budgetRange.min + budgetRange.max) / 2
        : budgetRange.min ?? null;
    const targetYear = parseYear(normalized);
    const desiredBodyType = inferBodyType(normalized);

    let filtered = catalogCars;
    if (brand) {
      filtered = filtered.filter(
        (car) => car.brand.toLowerCase() === brand,
      );
    }

    if (mentionedModels.length) {
      const matches = filtered.filter((car) => {
        const combo = `${car.brand.toLowerCase()} ${car.model.toLowerCase()}`;
        return mentionedModels.some((model) => combo.includes(model));
      });
      if (matches.length) {
        filtered = matches;
      }
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
      if (mentionedModels.length) {
        const combo = `${car.brand.toLowerCase()} ${car.model.toLowerCase()}`;
        if (mentionedModels.some((model) => combo.includes(model))) {
          score += 25;
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
    const matches = scored.slice(0, 3).map(({ car }) => mapSuggestion(car));

    const reply = matches.length
      ? `Here are some options that fit your request: ${matches
          .map(
            (match) =>
              `${match.brand} ${match.model} ${match.year} (${match.bodyType}) around ${match.priceUsed}`,
          )
          .join("; " )}. Tap a card to explore.`
      : "I couldn't find an exact match yet, but here are a few interesting models from our catalog you can explore.";

    const suggestions = matches.length
      ? matches
      : fallbackSuggestions.map(mapSuggestion);

    return NextResponse.json({ reply, suggestions });
  } catch (error) {
    console.error("[chatbot] failed to respond", error);
    return NextResponse.json({
      reply:
        "I ran into an issue processing that, but here are a few models from our catalog you can explore.",
      suggestions: fallbackSuggestions.map(mapSuggestion),
    });
  }
}
