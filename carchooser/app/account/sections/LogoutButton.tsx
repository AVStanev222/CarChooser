"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/me", { method: "DELETE" });
      router.push("/signin");
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-text transition hover:border-button hover:text-button disabled:cursor-not-allowed disabled:opacity-60"
      disabled={loading}
    >
      {loading ? "Signing out..." : "Log out"}
    </button>
  );
}
