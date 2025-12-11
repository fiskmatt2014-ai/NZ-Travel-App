import { regions, type Region } from "../../data/regions";

export const metadata = {
  title: "New Zealand Regions – Explore Aotearoa",
  description:
    "Browse the top regions of New Zealand with quick summaries, highlights, and travel tips.",
  openGraph: {
    title: "New Zealand Regions – Explore Aotearoa",
    description:
      "Browse the top regions of New Zealand with quick summaries, highlights, and travel tips.",
    images: [
      { url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png" },
    ],
  },
  alternates: { canonical: "https://guidetonewzealand.com/regions" },
};

export default function RegionsPage() {
  return (
    <div>
      <script
        id="regions-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "New Zealand Regions",
            itemListElement: regions.map((region, index) => ({
              "@type": "TouristDestination",
              name: region.name,
              description: region.shortDescription,
              url: `https://guidetonewzealand.com/regions/${region.slug}`,
              position: index + 1,
            })),
          }),
        }}
      />
      <h1 className="text-3xl font-bold mb-4">Regions of New Zealand</h1>
      <p className="text-slate-600 mb-6">
        Explore key regions that most travellers visit. Click a region to see more details and
        ideas for what to do there.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {regions.map((region: Region) => (
          <a
            key={region.slug}
            href={`/regions/${region.slug}`}
            className="block bg-white rounded-lg border shadow-sm p-4 hover:border-blue-500 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-1">{region.name}</h2>
            <p className="text-sm text-slate-600 mb-2">
              {region.shortDescription}
            </p>
            {region.highlight && (
              <p className="text-xs text-slate-500">
                Highlight: {region.highlight}
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
