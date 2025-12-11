import Link from "next/link";
import Image from "next/image";
import { regions } from "../../data/regions";
import { thingsToDo } from "../../data/thingsToDo";

export const metadata = {
  title: "Neuseeland Reiseplanung – Auf Deutsch | Guide to New Zealand",
  description:
    "Die einfache Reiseplanung für Neuseeland. Regionen, Aktivitäten & Routen erklärt auf Deutsch – inklusive Reise-Quiz & KI-Planer.",
  openGraph: {
    title: "Neuseeland Reiseplanung – Auf Deutsch | Guide to New Zealand",
    description:
      "Die einfache Reiseplanung für Neuseeland. Regionen, Aktivitäten & Routen erklärt auf Deutsch – inklusive Reise-Quiz & KI-Planer.",
    type: "website",
    images: [
      { url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png" },
    ],
  },
  alternates: { canonical: "https://guidetonewzealand.com/de" },
};

export default function DeLandingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <div className="inline-block bg-brand-surface/40 text-sm text-slate-200 px-3 py-1 rounded-full mb-4">
            Für Reisende aus Deutschland, Österreich & der Schweiz
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plane deine Neuseelandreise – auf Deutsch
          </h1>

          <p className="text-lg text-slate-300 mb-6">
            Dieser Leitfaden hilft dir dabei, deine Reise nach Aotearoa Neuseeland zu planen.
            Wir zeigen Regionen, Aktivitäten und Beispielrouten – die detailreichen Inhalte
            sind auf Englisch, aber hier findest du alle wichtigsten Hinweise auf Deutsch.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/ai-trip-planner"
              className="inline-flex items-center rounded-full bg-brand-aqua px-5 py-3 text-black font-semibold hover:bg-brand-sky transition"
            >
              Starte den Reise-Planer
            </Link>

            <Link
              href="/trip-quiz"
              className="inline-flex items-center rounded-full border border-brand-primary px-5 py-3 text-white font-semibold hover:bg-brand-primary/30 transition"
            >
              Kurzer Reise-Check (Quiz)
            </Link>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg hidden md:block">
          <Image
            src="/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png"
            alt="Landschaften in Aotearoa Neuseeland"
            width={640}
            height={420}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
            <p className="text-sm text-slate-200">Landschaften in Aotearoa Neuseeland</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Wie funktioniert Guide to New Zealand?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="brand-card bg-brand-surface p-4 rounded-2xl">
            <h3 className="font-semibold text-white mb-2">Sag uns, was du sehen möchtest</h3>
            <p className="text-sm text-slate-300">Dauer, Budget und Interessen helfen uns, passende Vorschläge zu machen.</p>
          </div>
          <div className="brand-card bg-brand-surface p-4 rounded-2xl">
            <h3 className="font-semibold text-white mb-2">Wir schlagen Regionen & Aktivitäten vor</h3>
            <p className="text-sm text-slate-300">Basierend auf deinen Antworten zeigen wir Regionen und Highlights.</p>
          </div>
          <div className="brand-card bg-brand-surface p-4 rounded-2xl">
            <h3 className="font-semibold text-white mb-2">Du planst und buchst</h3>
            <p className="text-sm text-slate-300">Wir geben Inspiration; buchen musst du Unterkünfte, Touren und Transport selbst.</p>
          </div>
        </div>
      </section>

      {/* Popular regions */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-3">Beliebte Regionen in Neuseeland</h2>
        <p className="text-sm text-slate-300 mb-6">Hier sind einige Regionen, die Besucher besonders lieben.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {regions.slice(0, 4).map((region) => (
            <Link
              key={region.slug}
              href={`/regions/${region.slug}`}
              className="block rounded-2xl p-4 bg-black/40 border border-white/10 hover:border-brand-aqua transition"
            >
              <h3 className="text-lg font-bold text-brand-aqua mb-1">{region.name}</h3>
              <p className="text-sm text-slate-300">{region.shortDescription}</p>
              <div className="mt-3 text-sm text-slate-200 font-semibold">Mehr erfahren →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Things to do */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-3">Was kannst du in Neuseeland machen?</h2>
        <p className="text-sm text-slate-300 mb-6">Wandern, Strände, Kultur, Weinproben — hier sind ein paar Kategorien.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {thingsToDo.slice(0, 3).map((cat) => (
            <Link
              key={cat.slug}
              href={`/things-to-do/${cat.slug}`}
              className="block rounded-2xl p-4 bg-black/40 border border-white/10 hover:border-brand-sky transition"
            >
              <h3 className="text-lg font-bold text-brand-sky mb-1">{cat.name}</h3>
              <p className="text-sm text-slate-300">{cat.description}</p>
              <div className="mt-3 text-sm text-slate-200 font-semibold">Kategorie ansehen →</div>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/things-to-do" className="text-sm text-slate-300 hover:text-white underline">
            Alle Aktivitäten ansehen
          </Link>
        </div>
      </section>

      {/* Practical info */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-3">Praktische Infos für deine Reise</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="brand-card bg-brand-surface p-4 rounded-2xl">
            <h4 className="font-semibold text-white mb-2">Beste Reisezeit</h4>
            <p className="text-sm text-slate-300">Sommer: Dez–Feb. Frühling/Herbst sind mild und schön, Winter eignet sich für Ski im Süden.</p>
          </div>

          <div className="brand-card bg-brand-surface p-4 rounded-2xl">
            <h4 className="font-semibold text-white mb-2">Mietwagen & Fahren</h4>
            <p className="text-sm text-slate-300">Linksverkehr, längere Fahrzeiten zwischen Orten – plane entspanntere Tagesetappen ein.</p>
          </div>

          <div className="brand-card bg-brand-surface p-4 rounded-2xl">
            <h4 className="font-semibold text-white mb-2">Reisedauer</h4>
            <p className="text-sm text-slate-300">Für eine gute Rundreise empfehlen wir mindestens 2–3 Wochen, kürzere Trips fokussieren Regionen.</p>
          </div>

          <div className="brand-card bg-brand-surface p-4 rounded-2xl">
            <h4 className="font-semibold text-white mb-2">Respektvoll reisen</h4>
            <p className="text-sm text-slate-300">Achte auf Natur- und Kultur-Schutzzonen und respektiere Māori-Orte und -Traditionen.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 bg-brand-background rounded-2xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white">Bereit, deine Route zu bauen?</h3>
          <p className="text-sm text-slate-300">Beginne mit unserem Planer oder beantworte ein kurzes Quiz für Vorschläge.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/ai-trip-planner" className="inline-flex items-center rounded-full bg-brand-aqua px-5 py-3 text-black font-semibold hover:bg-brand-sky transition">
            Reise-Planer öffnen
          </Link>
          <Link href="/trip-quiz" className="inline-flex items-center rounded-full border border-brand-primary px-5 py-3 text-white font-semibold hover:bg-brand-primary/30 transition">
            Reise-Quiz starten
          </Link>
        </div>
      </section>
    </div>
  );
}
