// app/young-drivers/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import { BULGARIA_BORDER_PATH } from "../lib/bulgariaBorderPath";

type School = {
  name: string;
  city: string;
  rating: number;
  focus: string;
  lat: number;
  lng: number;
  url: string;
  bookLink: string;
};

type CarPick = {
  brand: string;
  model: string;
  year: number;
  budget: string;
  usp: string;
};

const schools: School[] = [
  {
    name: "Автошкола Василеви",
    city: "Sofia",
    rating: 5.0,
    focus: "Premium instructors, bilingual theory prep and modern training fleet.",
    lat: 42.6977,
    lng: 23.3219,
    url: "https://vasilevi.com",
    bookLink: "mailto:info@vasilevi.com?subject=Discovery%20call",
  },
  {
    name: "Avto-Shkola.bg",
    city: "Plovdiv",
    rating: 4.9,
    focus: "Weekend and evening schedules with simulator refreshers for locals.",
    lat: 42.1354,
    lng: 24.7453,
    url: "https://www.avto-shkola.bg",
    bookLink: "mailto:b.bochev@percenta.bg?subject=Discovery%20call",
  },
  {
    name: "Автошкола Валек",
    city: "Varna",
    rating: 5.0,
    focus: "Coastal routes plus defensive driving for Varna-based teens.",
    lat: 43.1541,
    lng: 27.9147,
    url: "https://shofiorskikursove-varna.com/?gad_source=1&gad_campaignid=8773370342&gbraid=0AAAAADrniWWRMYii6wqyl630iRrgcu2Sa&gclid=CjwKCAiAz_DIBhBJEiwAVH2XwKLcOcCR6ZGSuMKagpmkE2Oee6knWk1aeLnHDbwdWbFUaINn0x6VwRoCAMMQAvD_BwE",
    bookLink: "mailto:valek@gmail.com?subject=Discovery%20call",
  },
  {
    name: "Автошкола Панайотов",
    city: "Ruse",
    rating: 4.7,
    focus: "Danube-focused practice plus motorway refreshers toward Bucharest.",
    lat: 43.8356,
    lng: 25.9657,
    url: "https://avtoshkola-panayotov.com",
    bookLink: "mailto:panayotovcar@abv.bg?subject=Discovery%20call",
  },
  {
    name: "Автошкола Бургас – Кънчо Николов 2015",
    city: "Burgas",
    rating: 5.0,
    focus: "Personal coaching, seaside practice loops, and exam success mentoring.",
    lat: 42.3648,
    lng: 27.4526,
    url: "https://www.avtoschool-burgas.bg",
    bookLink: "mailto:info@avtoscool-burgas.bg?subject=Discovery%20call",
  },
];

const carPicks: CarPick[] = [
  {
    brand: "Toyota",
    model: "Corolla Hybrid",
    year: 2024,
    budget: "20000-30000",
    usp: "Ultra reliable, 4.0L/100km combined and ADAS safety.",
  },
  {
    brand: "Honda",
    model: "Civic Hatchback",
    year: 2023,
    budget: "20000-30000",
    usp: "Sporty handling with Honda Sensing standard.",
  },
  {
    brand: "Volkswagen",
    model: "Golf Life",
    year: 2022,
    budget: "15000-20000",
    usp: "Iconic hatch with roomy boot and digital cockpit.",
  },
  {
    brand: "Kia",
    model: "Ceed Plug-in",
    year: 2024,
    budget: "30000+",
    usp: "50 km EV-only range and 7-year warranty.",
  },
  {
    brand: "Renault",
    model: "Clio TCe",
    year: 2022,
    budget: "10000-15000",
    usp: "Best-in-class city agility and low insurance.",
  },
];

const popularBrands = [
  "audi",
  "bmw",
  "mercedes",
  "mercedes-benz",
  "toyota",
  "honda",
  "kia",
  "hyundai",
  "volkswagen",
  "vw",
  "mazda",
  "ford",
  "peugeot",
  "renault",
  "opel",
  "fiat",
  "seat",
  "skoda",
  "nissan",
  "mini",
  "volvo",
];

const brandSynonyms: Record<string, string> = {
  merc: "mercedes-benz",
  mercedes: "mercedes-benz",
  "mercedes benz": "mercedes-benz",
  "mercedes-benz": "mercedes-benz",
  vw: "volkswagen",
  volks: "volkswagen",
  vag: "volkswagen",
};

function BulgariaMap({
  schools,
  selectedSchool,
  onSelect,
}: {
  schools: School[];
  selectedSchool: string | null;
  onSelect: (schoolName: string) => void;
}) {
  const geoBounds = {
    minLat: 41,
    maxLat: 44.4,
    minLng: 22,
    maxLng: 28.9,
  };
  const svgBounds = {
    width: 1024,
    height: 1024,
    yMin: 172,
    yMax: 853,
  };

  const clamp = (value: number) => Math.min(1, Math.max(0, value));

  const toPinPosition = (lat: number, lng: number) => {
    const lonRatio =
      (lng - geoBounds.minLng) / (geoBounds.maxLng - geoBounds.minLng);
    const latRatio =
      (lat - geoBounds.minLat) / (geoBounds.maxLat - geoBounds.minLat);

    const x = clamp(lonRatio) * svgBounds.width;
    const y =
      svgBounds.yMax - clamp(latRatio) * (svgBounds.yMax - svgBounds.yMin);

    return {
      left: `${(x / svgBounds.width) * 100}%`,
      top: `${(y / svgBounds.height) * 100}%`,
    };
  };

  return (
    <div className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#120a3a] via-[#0a0621] to-[#050214] p-6 shadow-lg shadow-purple-950/30">
      <p className="text-sm font-semibold text-white">
        Bulgaria heatmap for top youth schools
      </p>
      <p className="text-xs text-gray-300">
        Hover or tap a pin to lock the school and highlight it on the list.
      </p>
      <div className="relative mt-6 aspect-square w-full">
        <svg viewBox="0 0 1024 1024" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="bg-map-fill" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#7c4dff" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#3b1d8f" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#12052e" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="bg-map-glow" cx="60%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#ffe18c" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffe18c" stopOpacity="0" />
            </radialGradient>
            <filter id="mapShadow" x="-10%" y="-20%" width="130%" height="160%">
              <feDropShadow
                dx="0"
                dy="18"
                stdDeviation="18"
                floodColor="#41107a"
                floodOpacity="0.35"
              />
            </filter>
          </defs>

          <g filter="url(#mapShadow)">
            <g
              transform="translate(0,1024) scale(0.1,-0.1)"
              fill="none"
              stroke="none"
            >
              <path
                d={BULGARIA_BORDER_PATH}
                fill="url(#bg-map-fill)"
                stroke="#a08bff"
                strokeWidth={15}
                strokeLinejoin="round"
              />
            </g>
            <g transform="translate(0,1024) scale(0.1,-0.1)" opacity={0.35}>
              <path d={BULGARIA_BORDER_PATH} fill="url(#bg-map-glow)" />
            </g>
          </g>
        </svg>
        {schools.map((school) => (
          <button
            key={school.name}
            onClick={() => onSelect(school.name)}
            style={toPinPosition(school.lat, school.lng)}
            className="group absolute flex -translate-x-1/2 -translate-y-full flex-col items-center focus:outline-none"
            aria-label={`${school.name} in ${school.city}`}
          >
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                selectedSchool === school.name
                  ? "border-white bg-white text-[#050214]"
                  : "border-white/40 bg-white/90 text-[#050214]"
              }`}
            >
              {school.city}
              <span className="block text-[11px] font-normal text-[#050214]/80">
                {school.rating.toFixed(1)} ★
              </span>
            </span>
            <span className="mt-1 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function YoungDriversPage() {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(
    schools[0]?.name ?? null
  );
  const spotlightSchool = useMemo(
    () => schools.find((school) => school.name === selectedSchool),
    [selectedSchool]
  );
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { role: "bot" | "user"; content: string }[]
  >([
    {
      role: "bot",
      content:
        "Hi! Tell me roughly what brand or vibe you want, your budget and model year. I'll find a smart first car.",
    },
  ]);

  const knownBrands = Array.from(
    new Set([
      ...carPicks.map((car) => car.brand.toLowerCase()),
      ...popularBrands,
    ])
  );
  const knownModels = Array.from(
    new Set(carPicks.map((car) => car.model.toLowerCase()))
  );
  const interpretPreferences = (message: string) => {
    const lower = message.toLowerCase();
    const foundAlias =
      Object.keys(brandSynonyms).find((alias) => lower.includes(alias)) || null;
    const brandValue =
      (foundAlias ? brandSynonyms[foundAlias] : null) ||
        knownBrands.find((brand) => lower.includes(brand)) || null;

    const foundModel =
      knownModels.find((model) => lower.includes(model)) || null;

    const yearMatch = message.match(/20\d{2}/);
    const minYear = yearMatch ? parseInt(yearMatch[0], 10) : null;

    const budgetMatch = message.match(/(\d{2})k/i);
    let budgetKey: CarPick["budget"] | null = null;
    if (budgetMatch) {
      const value = parseInt(budgetMatch[1], 10);
      if (value <= 15) budgetKey = "10000-15000";
      else if (value <= 20) budgetKey = "15000-20000";
      else if (value <= 30) budgetKey = "20000-30000";
      else budgetKey = "30000+";
    } else if (lower.includes("cheap") || lower.includes("budget")) {
      budgetKey = "10000-15000";
    } else if (lower.includes("premium") || lower.includes("luxury")) {
      budgetKey = "30000+";
    }

    return {
      make: brandValue ? brandValue : undefined,
      model: foundModel ? foundModel : undefined,
      minYear: minYear ?? undefined,
      budgetKey,
    };
  };
  const [chatLoading, setChatLoading] = useState(false);

  const handleChatSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const { make, model, minYear, budgetKey } = interpretPreferences(chatInput);
    const userEntry = { role: "user" as const, content: chatInput.trim() };
    setChatMessages((prev) => [...prev, userEntry]);
    setChatInput("");

    try {
      setChatLoading(true);
      const response = await fetch("/api/car-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          make: make ?? "toyota",
          model,
          minYear: minYear ?? 2018,
        }),
      });
      const data = await response.json();

      if (response.ok && Array.isArray(data.results) && data.results.length) {
        const first = data.results[0];
        const city =
          typeof first.city_mpg === "number"
            ? `${first.city_mpg} city`
            : "";
        const highway =
          typeof first.highway_mpg === "number"
            ? `${first.highway_mpg} highway`
            : "";
        const mpg =
          city || highway
            ? `${[city, highway].filter(Boolean).join(" / ")} mpg`
            : "Efficient fuel economy";
        const transmission =
          typeof first.transmission === "string"
            ? first.transmission
            : "automatic";
        const reply = {
          role: "bot" as const,
          content: `Try the ${first.make} ${first.model} (${first.year}). ${mpg} with ${transmission} transmission.`,
        };
        setChatMessages((prev) => [...prev, reply]);
      } else {
        const fallback =
          carPicks.find((car) => {
            const brandOk = make ? car.brand.toLowerCase() === make : true;
            const yearOk = minYear ? car.year >= minYear : true;
            const budgetOk = budgetKey ? car.budget === budgetKey : true;
            return brandOk && yearOk && budgetOk;
          }) || carPicks[0];
        setChatMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: `Couldn't reach live data, but based on our knowledge the ${fallback.brand} ${fallback.model} (${fallback.year}) fits. ${fallback.usp}`,
          },
        ]);
      }
    } catch {
      const fallback = carPicks[0];
      setChatMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: `Network hiccup. Consider the ${fallback.brand} ${fallback.model} (${fallback.year}). ${fallback.usp}`,
        },
      ]);
    } finally {
      setChatLoading(false);
    }
  };


  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <Navbar />
      <section className="border-b border-white/5 bg-gradient-to-b from-[#120a3a] to-transparent py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-purple-300">
            Under 18 programs
          </p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">
            Discover Bulgaria&apos;s best-rated driving schools
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300">
            We analyzed dozens of youth-friendly driving academies and curated
            the safest, best-reviewed experiences in every major city. Pick a
            hotspot, submit a request, and gain confidence before you even turn
            18.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6">
            <BulgariaMap
              schools={schools}
              selectedSchool={selectedSchool}
              onSelect={setSelectedSchool}
            />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-sm text-gray-200">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-300">
                Why trust these picks
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4 shadow-inner">
                  <p className="text-3xl font-semibold text-white">2,500+</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Students coached in 2024
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 shadow-inner">
                  <p className="text-3xl font-semibold text-white">96%</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Exam pass rate
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 shadow-inner">
                  <p className="text-3xl font-semibold text-white">4.5 mo.</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Avg time to licence
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 shadow-inner">
                  <p className="text-3xl font-semibold text-white">3</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Languages offered
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {schools.map((school) => (
              <div
                key={school.name}
                onClick={() => setSelectedSchool(school.name)}
                className={`rounded-3xl border bg-white/5 p-5 transition ${
                  selectedSchool === school.name
                    ? "border-white/60 shadow-lg shadow-purple-900/40"
                    : "border-white/10"
                } cursor-pointer`}
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-wide">
                  <p className="text-purple-300">{school.city}</p>
                  <span className="font-medium text-amber-300">
                    ★ {school.rating.toFixed(1)}
                  </span>
                </div>
                <h3 className="mt-1 text-xl font-semibold">{school.name}</h3>
                <p className="text-sm text-gray-300">{school.focus}</p>
                <Link
                  href={school.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedSchool(school.name)}
                  className="mt-4 block w-full rounded-full bg-white/90 px-3 py-2 text-center text-sm font-semibold text-[#050214] transition hover:bg-white"
                >
                  Choose this school
                </Link>
              </div>
            ))}
          </div>
        </div>

        {spotlightSchool && (
          <div className="mt-12 rounded-3xl border border-white/10 bg-[#0f0a2c] p-6">
            <p className="text-xs uppercase tracking-wide text-purple-200">
              Spotlight
            </p>
            <h2 className="text-2xl font-semibold">
              {spotlightSchool.name} · {spotlightSchool.city}
            </h2>
            <p className="mt-2 text-sm text-gray-300">{spotlightSchool.focus}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Avg. rating {spotlightSchool.rating.toFixed(1)} ★
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Under-18 specialists
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Personal coaching available
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={spotlightSchool.bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#050214] transition hover:bg-gray-100"
              >
                Book a discovery call
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="border-t border-white/5 bg-[#06021c] py-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-white/10 bg-[#0a0626] p-8 md:flex-row">
          <div className="md:w-1/2">
            <p className="text-xs uppercase tracking-[0.35em] text-purple-300">
              Chatbot beta
            </p>
            <h3 className="mt-2 text-3xl font-semibold">
              Tell us the vibe — we suggest a car
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Describe a brand you like, rough budget and target model year.
              Our lightweight recommender searches trusted data to propose a
              starter car ideal for young drivers.
            </p>
            <div className="mt-6 space-y-3">
              {chatMessages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      message.role === "user"
                        ? "bg-white text-[#050214]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-white">
                    Searching live inventory...
                  </div>
                </div>
              )}
            </div>
          </div>
          <form
            className="md:w-1/2 space-y-4"
            onSubmit={handleChatSubmit}
          >
            <label className="text-xs uppercase tracking-[0.3em] text-purple-300">
              Ask anything about your future car
            </label>
            <textarea
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="h-40 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-purple-400"
              placeholder="Example: “I need a 2022+ Toyota around 20k budget for city driving.”"
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#050214] transition hover:bg-gray-200"
            >
              Send to AI
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#040111] py-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#120a3a] to-[#050214] px-8 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-300">
            Theory prep
          </p>
          <h3 className="mt-3 text-3xl font-semibold">
            Brush up on the official driving theory
          </h3>
          <p className="mt-4 text-sm text-gray-300">
            Tackle real exam questions, monitor your score, and repeat weak
            categories until you&apos;re confident.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="https://avtoizpit.com/listovki#/sub-categories"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#050214] transition hover:bg-gray-100"
            >
              Start practicing the tests
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
