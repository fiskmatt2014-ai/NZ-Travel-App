import { tours } from "../../data/tours";

export const metadata = {
  title: "Tours & Activities in New Zealand",
  description: "Featured tours and experiences from operators across Aotearoa.",
  openGraph: {
    title: "Tours & Activities in New Zealand",
    description: "Featured tours and experiences from operators across Aotearoa.",
    images: [
      { url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png" },
    ],
  },
  alternates: { canonical: "https://guidetonewzealand.com/tours" },
};

export default function ToursPage() {
  // Get unique regions for filter display
  const regions = Array.from(new Set(tours.map((tour) => tour.region)));

  return (
    <div>
      <script
        id="tours-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "New Zealand Tours & Experiences",
            itemListElement: tours.map((tour, index) => ({
              "@type": "Product",
              name: tour.name,
              description: tour.description,
              url: `https://guidetonewzealand.com/tours/${tour.slug}`,
              position: index + 1,
              offers: tour.priceFrom
                ? {
                    "@type": "Offer",
                    price: String(tour.priceFrom).replace(/[^0-9.]/g, ""),
                    priceCurrency: "NZD",
                    availability: "https://schema.org/InStock",
                  }
                : undefined,
            })),
          }),
        }}
      />
      <h1 className="text-5xl font-bold mb-4 text-black">
        Tours & experiences in New Zealand
      </h1>
      <p className="text-lg text-slate-700 mb-12">
        Explore a curated selection of popular tours and experiences across Aotearoa. These are
        example tours to showcase what travellers can book. More operators and experiences can be
        added to help you plan your perfect adventure.
      </p>

      {/* Filter Pills */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-slate-700 mb-4">Filter by region:</p>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region}
              className="px-4 py-2 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-slate-200 transition border border-slate-300"
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {tours.map((tour) => {
          const shortDesc =
            tour.description.length > 150
              ? tour.description.substring(0, 150) + "..."
              : tour.description;

          return (
            <a
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="block bg-white rounded-xl border border-slate-300 shadow-sm hover:shadow-lg hover:border-black transition p-6"
            >
              <h2 className="text-2xl font-bold mb-3 text-black">{tour.name}</h2>

              <div className="space-y-2 mb-4 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Region:</span> {tour.region}
                </p>
                <p>
                  <span className="font-semibold">Duration:</span> {tour.duration}
                </p>
                <p>
                  <span className="font-semibold">Style:</span> {tour.style}
                </p>
              </div>

              <p className="text-slate-700 mb-4">{shortDesc}</p>

              {tour.priceFrom && (
                <p className="text-lg font-bold text-black mb-4">{tour.priceFrom}</p>
              )}

              <button className="text-black font-semibold hover:text-slate-700">
                View details →
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
}
