"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const authError = searchParams.get("error");
  const registered = searchParams.get("registered");
  const prefillEmail = searchParams.get("email") ?? "";
  const [email, setEmail] = useState(prefillEmail);
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCredentialsSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setErrorMessage(body.error ?? "Unable to sign in");
        setSubmitting(false);
        return;
      }

      window.location.href = callbackUrl || "/";
    } catch (error) {
      console.error("Failed to sign in", error);
      setErrorMessage("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
  };

  const resolvedError = errorMessage ?? authError;
  const successMessage = registered
    ? "Account created! Please sign in to continue."
    : null;

  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-16 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <p className="mt-2 text-sm text-white/60">
          Sign in to continue exploring cars and exclusive offers.
        </p>

        {successMessage ? (
          <p className="mt-6 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
            {successMessage}
          </p>
        ) : null}

        <form className="mt-8 space-y-4" onSubmit={handleCredentialsSignIn}>
          <label className="block text-sm font-medium text-white/80">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-white/40"
              required
            />
          </label>

          <label className="block text-sm font-medium text-white/80">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-white/40"
              required
            />
          </label>

          {resolvedError ? (
            <p className="text-sm text-red-400">{resolvedError}</p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 py-2 font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-700/60"
            disabled={submitting}
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-white/70">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-emerald-400">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
