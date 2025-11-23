import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/app/lib/auth";
import LogoutButton from "./sections/LogoutButton";
import RecentCarsPanel from "./sections/RecentCarsPanel";

function placeholderItems(message: string) {
  return (
    <p className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-muted">
      {message}
    </p>
  );
}

export default async function AccountPage() {
  const user = await getSessionUser();

  if (!user) {
    redirect("/signin?callbackUrl=/account");
  }

  const recent = user.recentCars ?? [];
  const pinned = user.pinnedCars ?? [];

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-16 text-text">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="rounded-3xl border border-border bg-black/40 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Driver profile
          </p>
          <h1 className="mt-2 text-4xl font-semibold">
            {user.name ?? "New driver"}
          </h1>
          <p className="text-muted">{user.email}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="rounded-full border border-border px-4 py-2 text-muted">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </span>
            <LogoutButton />
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">
          <RecentCarsPanel initialCars={recent} />

          <article className="rounded-3xl border border-border bg-black/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-text/50">
                  Pinned cars
                </p>
                <h2 className="text-2xl font-semibold text-text">
                  Favorites & deals
                </h2>
              </div>
              <Link
                href="/brands"
                className="rounded-full border border-border px-4 py-2 text-sm text-text transition hover:border-white hover:bg-white/10"
              >
                Discover brands
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {pinned.length
                ? pinned.map((entry) => (
                    <Link
                      key={entry.path}
                      href={entry.path}
                      className="block rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-text transition hover:border-emerald-200 hover:bg-emerald-500/20"
                    >
                      {entry.label}
                    </Link>
                  ))
                : placeholderItems("Pin the cars you love to track incentives here.")}
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-border bg-gradient-to-br from-emerald-600/15 to-cyan-500/10 p-6 text-text">
          <h2 className="text-2xl font-semibold">Need help deciding?</h2>
          <p className="mt-2 text-muted">
            Our young-driver guides, financing partners and driving school perks
            are coming soon. Meanwhile, join our waitlist or reach out for
            personalized support.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/young-drivers"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Young driver hub
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-text transition hover:border-white hover:bg-white/10"
            >
              Contact support
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
