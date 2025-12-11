import Link from "next/link";
import { regions } from "../data/regions";
import { thingsToDo } from "../data/thingsToDo";
import EmailCapture from "../components/EmailCapture";

export const metadata = {
  title: "Guide to New Zealand – Trip Planner, Regionen & Aktivitäten",
  description:
    "Plane deine Neuseelandreise mit unserem interaktiven Reise-Planer. Entdecke Regionen, Aktivitäten, Routen und Insidertipps.",
  openGraph: {
    title: "Guide to New Zealand – Trip Planner, Regionen & Aktivitäten",
    description:
      "Plane deine Neuseelandreise mit unserem interaktiven Reise-Planer. Entdecke Regionen, Aktivitäten, Routen und Insidertipps.",
    type: "website",
    images: [
      {
        url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png",
      },
    ],
  },
  alternates: { canonical: "https://guidetonewzealand.com/" },
};

export default function Home() {
  const interests = [
    "Hiking",
    "Beaches & Coast",
    "Food & Wine",
    "Adventure",
    "Culture & Māori",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-slate-800 rounded-full border border-slate-600 text-sm font-medium text-slate-300">
                ✨ Aotearoa New Zealand trip planning
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Plan your New Zealand adventure, the smart way
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Travelling to Aotearoa for the first time? We guide you through the best regions,
                hidden gems, and experiences tailored to your interests, budget, and timeline.
                Discover what makes New Zealand unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ai-trip-planner"
                  className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-slate-100 transition text-center"
                >
                  Start trip planner
                </Link>
                <Link
                  href="/regions"
                  className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-slate-900 transition text-center"
                >
                  Browse regions
                </Link>
              </div>
              <p className="text-sm text-slate-400 italic">
                We believe in travelling responsibly and respecting the lands, waters, and cultures we visit.
              </p>
            </div>

            {/* Right: Visual element */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-slate-800 to-black rounded-2xl border border-slate-700 flex items-center justify-center text-6xl">
                🏔️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Interests Strip */}
      <section className="bg-slate-100 border-b border-slate-300 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-slate-900 font-medium mb-6">
            Not sure where to start? Tell us what interests you:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest) => (
              <button
                key={interest}
                className="px-5 py-2 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition border border-slate-300"
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Places to Discover Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-black">
            Places to discover in Aotearoa
          </h2>
          <p className="text-lg text-slate-700 mb-14 max-w-3xl">
            From the geothermal wonders of the North Island to the dramatic fjords of the South,
            Aotearoa New Zealand offers breathtaking landscapes and rich cultural experiences.
            Explore our curated regions and find your perfect destination.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {regions.slice(0, 4).map((region) => (
              <Link
                key={region.slug}
                href={`/regions/${region.slug}`}
                className="block bg-white rounded-xl border border-slate-300 shadow-sm hover:shadow-lg hover:border-black transition p-6 group"
              >
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-slate-900">
                  {region.name}
                </h3>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  {region.shortDescription}
                </p>
                <span className="text-black font-semibold text-sm group-hover:text-slate-700">
                  View region guide →
                </span>
              </Link>
            ))}
          </div>

            <div className="mt-12 text-center">
            <Link href="/regions" className="inline-block text-black font-bold text-lg hover:text-slate-700">
              Explore all regions →
            </Link>
          </div>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-black">
            Things to do in New Zealand
          </h2>
          <p className="text-lg text-slate-700 mb-14 max-w-3xl">
            Whether you crave adrenaline-pumping adventures, serene nature walks, cultural immersion,
            or culinary delights, Aotearoa delivers unforgettable experiences for every traveller.
            Discover activities that match your passion.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {thingsToDo.slice(0, 4).map((category) => (
              <Link
                key={category.slug}
                href={`/things-to-do/${category.slug}`}
                className="block bg-white rounded-xl border border-slate-300 shadow-sm hover:shadow-lg hover:border-black transition p-6 group"
              >
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-slate-900">
                  {category.name}
                </h3>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  {category.activities.length} activity
                  {category.activities.length !== 1 ? "ies" : ""}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/things-to-do" className="inline-block text-black font-bold text-lg hover:text-slate-700">
              Explore all things to do →
            </Link>
          </div>
        </div>
      </section>

      {/* Plan Your Trip Basics Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-black text-center">
            Plan your trip with confidence
          </h2>
          <p className="text-lg text-slate-700 mb-14 text-center max-w-3xl mx-auto">
            Everything you need to know before you go—from the best time to visit to getting around
            and travelling responsibly in Aotearoa.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* When to visit */}
            <div className="bg-slate-50 rounded-xl border border-slate-300 p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌤️</div>
              <h3 className="text-2xl font-bold mb-3 text-black">When to visit</h3>
              <p className="text-slate-700">
                New Zealand offers distinct seasons. Summer (Dec–Feb) brings warmth and long days,
                while autumn offers crisp weather and stunning colours. Winter suits snow sports enthusiasts.
              </p>
            </div>

            {/* Getting Around */}
            <div className="bg-slate-50 rounded-xl border border-slate-300 p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Getting around</h3>
              <p className="text-slate-700">
                Rent a car for flexibility and scenic drives, or use intercity buses and flights.
                New Zealand's compact size makes exploring both islands feasible in a single trip.
              </p>
            </div>

            {/* Suggested Itineraries */}
            <div className="bg-slate-50 rounded-xl border border-slate-300 p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Suggested itineraries</h3>
              <p className="text-slate-700">
                Use our AI trip planner to generate a customised itinerary based on your schedule,
                budget, and interests. Get day-by-day recommendations tailored just for you.
              </p>
            </div>

            {/* Travel Responsibly */}
            <div className="bg-slate-50 rounded-xl border border-slate-300 p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Travel responsibly</h3>
              <p className="text-slate-700">
                Respect our environment, honour Māori culture, and support local communities.
                Sustainable travel ensures future generations can enjoy Aotearoa's beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the Trip Planner Works */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center text-white">
            How the trip planner works
          </h2>
          <p className="text-lg text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            Creating your perfect Aotearoa adventure has never been easier.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {/* Step 1 */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 text-center">
              <div className="text-6xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Tell us your preferences
              </h3>
              <p className="text-slate-300">
                Share your trip length, budget, and interests. Whether you love hiking, wine,
                Māori culture, or adventure, let us know.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 text-center">
              <div className="text-6xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Get your AI itinerary
              </h3>
              <p className="text-slate-300">
                Our intelligent planner creates a day-by-day itinerary featuring regions,
                activities, and insider tips perfectly matched to you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 text-center">
              <div className="text-6xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Book your adventure
              </h3>
              <p className="text-slate-300">
                Explore detailed guides, check recommendations, and book accommodations, tours,
                and activities that suit your style.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/ai-trip-planner"
              className="inline-block px-10 py-4 rounded-lg bg-white text-black font-bold text-lg hover:bg-slate-100 transition"
            >
              Try the planner now
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 md:py-24 bg-brand-background">
        <div className="max-w-3xl mx-auto px-4">
          <EmailCapture variant="wide" />
        </div>
      </section>
    </main>
  );
}
