"use client";

import { useEffect, useState } from "react";

type TrackerProps = {
  carLabel: string;
  carPath: string;
};

export default function CarActivityTracker({
  carLabel,
  carPath,
}: TrackerProps) {
  const [enabled, setEnabled] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [pinning, setPinning] = useState(false);
  const [infoText, setInfoText] = useState<string | null>(null);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch("/api/auth/me", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as {
          user: null | { pinnedCars?: Array<{ path: string }> };
        };

        if (!data.user) {
          return;
        }

        setEnabled(true);
        setPinned(
          data.user.pinnedCars?.some((entry) => entry.path === carPath) ??
            false,
        );
        await fetch("/api/account/recent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ carLabel, carPath }),
        });
      } catch (error) {
        console.error("Failed to track car view", error);
      }
    }

    init();
  }, [carLabel, carPath]);

  const togglePin = async () => {
    setPinning(true);
    setInfoText(null);
    try {
      const response = await fetch("/api/account/pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ carLabel, carPath }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setInfoText(body.error ?? "Unable to update pinned cars");
        return;
      }

      const data = (await response.json()) as { pinned: boolean };
      setPinned(data.pinned);
      setInfoText(
        data.pinned
          ? "Pinned to your favorites"
          : "Removed from pinned cars",
      );
    } catch (error) {
      console.error("Failed to pin car", error);
      setInfoText("Something went wrong. Please try again.");
    } finally {
      setPinning(false);
    }
  };

  if (!enabled) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-white/70">
          Viewing as a logged-in driver. This model is saved to your history.
        </p>
        <button
          onClick={togglePin}
          disabled={pinning}
          className={`rounded-full px-4 py-1 text-sm font-semibold transition ${
            pinned
              ? "bg-emerald-500 text-black hover:bg-emerald-400"
              : "border border-white/30 text-white hover:border-white hover:bg-white/10"
          } disabled:cursor-not-allowed disabled:opacity-60`}
        >
          {pinning ? "Updating..." : pinned ? "Pinned" : "Pin this car"}
        </button>
      </div>
      {infoText ? (
        <p className="text-xs text-white/70">{infoText}</p>
      ) : null}
    </div>
  );
}
