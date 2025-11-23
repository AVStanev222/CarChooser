"use client";

import { useState } from "react";
import Link from "next/link";

type CarBookmark = {
  label: string;
  path: string;
};

type RecentCarsPanelProps = {
  initialCars: CarBookmark[];
};

export default function RecentCarsPanel({
  initialCars,
}: RecentCarsPanelProps) {
  const [cars, setCars] = useState(initialCars);
  const [pending, setPending] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const removeCar = async (path: string) => {
    setPending(path);
    setError(null);
    try {
      const response = await fetch(
        `/api/account/recent?carPath=${encodeURIComponent(path)}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Unable to remove car");
      }

      const data = (await response.json()) as {
        recentCars: CarBookmark[];
      };
      setCars(data.recentCars);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setPending(null);
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-black/5 transition-colors dark:shadow-black/60">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-muted">
            Last viewed cars
          </p>
          <h2 className="text-2xl font-semibold text-text">
            Continue your research
          </h2>
        </div>
        <Link
          href="/brands"
          className="rounded-full border border-border px-4 py-2 text-sm text-text transition hover:border-button hover:text-button"
        >
          Browse cars
        </Link>
      </div>
      <div className="mt-4 space-y-3">
        {cars.length ? (
          cars.map((entry) => (
            <div
              key={entry.path}
              className="flex items-center justify-between rounded-2xl border border-border bg-card-muted px-4 py-3 text-text/90"
            >
              <Link
                href={entry.path}
                className="flex-1 text-text transition hover:text-button"
              >
                {entry.label}
              </Link>
              <button
                onClick={() => removeCar(entry.path)}
                disabled={pending === entry.path}
                className="ml-3 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted transition hover:border-red-400 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {pending === entry.path ? "Removing..." : "Remove"}
              </button>
            </div>
          ))
        ) : (
          <p className="rounded-xl border border-border bg-card-muted px-4 py-3 text-sm text-muted">
            No browsing history yet. Explore to see it here.
          </p>
        )}
      </div>
      {error ? <p className="mt-3 text-sm text-red-500 dark:text-red-400">{error}</p> : null}
    </div>
  );
}
