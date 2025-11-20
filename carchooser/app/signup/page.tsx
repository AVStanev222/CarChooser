"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setErrorMessage(body.error ?? "Unable to create your account");
        setSubmitting(false);
        return;
      }

      const params = new URLSearchParams();
      params.set("registered", "1");
      params.set("email", email);
      params.set("callbackUrl", callbackUrl);
      window.location.href = `/signin?${params.toString()}`;
    } catch (error) {
      console.error("Failed to sign up", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-16 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl">
        <h1 className="text-3xl font-semibold">Create your account</h1>
        <p className="mt-2 text-sm text-white/60">
          Join CarChooser to save searches, compare favorites and access
          personalized recommendations.
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-white/80">
            Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-white/40"
              placeholder="Optional"
            />
          </label>

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
              minLength={6}
            />
          </label>

          <label className="block text-sm font-medium text-white/80">
            Confirm password
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-white/40"
              required
              minLength={6}
            />
          </label>

          {errorMessage ? (
            <p className="text-sm text-red-400">{errorMessage}</p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 py-2 font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-700/60"
            disabled={submitting}
          >
            {submitting ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-white/70">
          Already have an account?{" "}
          <Link href="/signin" className="font-semibold text-emerald-400">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
