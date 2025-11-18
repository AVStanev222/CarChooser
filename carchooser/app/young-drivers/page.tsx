// app/young-drivers/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BULGARIA_BORDER_PATH } from "../lib/bulgariaBorderPath";

type School = {
  name: string;
  city: string;
  rating: number;
  focus: string;
  lat: number;
  lng: number;
  url: string;
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
  },
  {
    name: "Avto-Shkola.bg",
    city: "Plovdiv",
    rating: 4.9,
    focus: "Weekend and evening schedules with simulator refreshers for locals.",
    lat: 42.1354,
    lng: 24.7453,
    url: "https://www.avto-shkola.bg",
  },
  {
    name: "Автошкола Валек",
    city: "Varna",
    rating: 5.0,
    focus: "Coastal routes plus defensive driving for Varna-based teens.",
    lat: 43.1541,
    lng: 27.9147,
    url: "https://shofiorskikursove-varna.com/?gad_source=1&gad_campaignid=8773370342&gbraid=0AAAAADrniWWRMYii6wqyl630iRrgcu2Sa&gclid=CjwKCAiAz_DIBhBJEiwAVH2XwKLcOcCR6ZGSuMKagpmkE2Oee6knWk1aeLnHDbwdWbFUaINn0x6VwRoCAMMQAvD_BwE",
  },
  {
    name: "Автошкола Панайотов",
    city: "Ruse",
    rating: 4.7,
    focus: "Danube-focused practice plus motorway refreshers toward Bucharest.",
    lat: 43.8356,
    lng: 25.9657,
    url: "https://avtoshkola-panayotov.com",
  },
  {
    name: "Автошкола Бургас – Кънчо Николов 2015",
    city: "Burgas",
    rating: 5.0,
    focus: "Personal coaching, seaside practice loops, and exam success mentoring.",
    lat: 42.3648,
    lng: 27.4526,
    url: "https://www.avtoschool-burgas.bg",
  },
];

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

  return (
    <main className="min-h-screen bg-[#050214] text-white">
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
              <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#050214] transition hover:bg-gray-100">
                Book a discovery call
              </button>
              <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white">
                Share with a parent
              </button>
            </div>
          </div>
        )}
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

      <section className="border-t border-white/5 bg-[#040111] py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
              Parents welcome
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Need help choosing the right fit?
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              Our concierge team compares schedules, languages, and pricing, so
              your teen can focus on building safe driving habits.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-3 md:flex-row">
            <Link
              href="mailto:concierge@carchooser.ai"
              className="flex-1 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#050214] transition hover:bg-gray-100"
            >
              Email the concierge
            </Link>
            <Link
              href="/"
              className="flex-1 rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Explore all cars
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
