import { regions } from "../../../data/regions";
import { notFound } from "next/navigation";

export default function RegionPage({ params }: { params: { slug: string } }) {
  const region = regions.find((r) => r.slug === params.slug);

  if (!region) {
    notFound();
  }

  return (
    <div>
      <script
        id="region-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: region.name,
            description: region.shortDescription,
            url: `https://guidetonewzealand.com/regions/${region.slug}`,
            touristType: "International travellers",
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-4">{region.name}</h1>
      <p className="text-slate-600 mb-4">{region.shortDescription}</p>

      {region.highlight && (
        <p className="text-sm text-slate-500 mb-4">Highlight: {region.highlight}</p>
      )}

      <div>
        <a href="/regions" className="text-blue-600 hover:text-blue-700">
          ← Back to regions
        </a>
      </div>
    </div>
  );
}
