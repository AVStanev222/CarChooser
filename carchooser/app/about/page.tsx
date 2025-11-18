import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

const highlights = [
  {
    title: "Curated brand intelligence",
    description:
      "Every brand profile combines design notes, reliability data, pricing, and trims so you can compare in seconds.",
  },
  {
    title: "Built for decisions",
    description:
      "Filter by lifestyle, budget, or fuel type and let our guidance highlight the cars that match what matters to you.",
  },
  {
    title: "Always up to date",
    description:
      "We sync specs and pricing from trusted regional dealers, keeping new arrivals and used-market averages fresh.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050214] text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-16">
        <SectionTitle>
          Learn how <span className="text-purple-400">CarChooser</span> works
        </SectionTitle>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          CarChooser exists to turn hours of tab-hopping into a confident, visual
          comparison session. We map every model a brand offers, surface real pricing,
          and give you a starting shortlist before you set foot in a showroom.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#0b061f] p-6 shadow-xl"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-purple-700/30 bg-gradient-to-r from-purple-900/40 to-transparent p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">What&#39;s next?</h3>
          <p className="text-gray-300">
            We are finishing detailed brand hubs, AI-powered comparisons, and
            curated training plans for under-18 drivers. Stay tuned for the upcoming
            release notes!
          </p>
        </div>
      </section>
    </main>
  );
}
