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
      className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={loading}
    >
      {loading ? "Signing out..." : "Log out"}
    </button>
  );
}
