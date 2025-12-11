"use client";

import Script from "next/script";
import { tours } from "../../../data/tours";
import { notFound } from "next/navigation";

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = tours.find((t) => t.slug === params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Script
        id="tour-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: tour.name,
            description: tour.description,
            url: `https://guidetonewzealand.com/tours/${tour.slug}`,
            areaServed: tour.region,
            brand: { "@type": "Brand", name: tour.operatorName },
            offers: tour.priceFrom
              ? {
                  "@type": "Offer",
                  price: String(tour.priceFrom).replace(/[^0-9.]/g, ""),
                  priceCurrency: "NZD",
                  availability: "https://schema.org/InStock",
                }
              : undefined,
          }),
        }}
      />
      {/* Back Link */}
      <a href="/tours" className="text-black font-semibold hover:text-slate-700 mb-8 inline-block">
        ← Back to tours
      </a>

      {/* Tour Header */}
      <div className="bg-white rounded-xl border border-slate-300 p-8 mb-8">
        <h1 className="text-5xl font-bold mb-4 text-black">{tour.name}</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <p className="text-sm font-semibold text-slate-600">Region</p>
            <p className="text-lg text-black">{tour.region}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Duration</p>
            <p className="text-lg text-black">{tour.duration}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Style</p>
            <p className="text-lg text-black">{tour.style}</p>
          </div>
          {tour.priceFrom && (
            <div>
              <p className="text-sm font-semibold text-slate-600">Price</p>
              <p className="text-lg font-bold text-black">{tour.priceFrom}</p>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl border border-slate-300 p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black">About this tour</h2>
        <p className="text-lg text-slate-700 leading-relaxed">{tour.description}</p>
      </div>

      {/* Highlights */}
      <div className="bg-white rounded-xl border border-slate-300 p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Highlights</h2>
        <ul className="space-y-3">
          {tour.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-slate-700">
              <span className="mr-3 text-black font-bold">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Operator Information */}
      <div className="bg-white rounded-xl border border-slate-300 p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Tour operator</h2>
        <p className="text-lg font-semibold text-black mb-4">{tour.operatorName}</p>

        {tour.operatorWebsite && (
          <a
            href={tour.operatorWebsite}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-slate-900 transition mb-4"
          >
            Visit operator website
          </a>
        )}

        {tour.affiliateCode && (
          <p className="text-sm text-slate-600 italic">
            Use code <span className="font-semibold text-black">{tour.affiliateCode}</span> where
            applicable. (Example affiliate code placeholder.)
          </p>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-slate-100 rounded-xl border border-slate-300 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Want a full trip around this tour?</h2>
        <p className="text-slate-700 mb-6">
          Use our AI trip planner to build a complete itinerary that includes this tour and other
          activities tailored to your interests.
        </p>
        <a
          href="/ai-trip-planner"
          className="inline-block px-8 py-4 rounded-lg bg-black text-white font-bold hover:bg-slate-900 transition"
        >
          Try the trip planner
        </a>
      </div>
    </div>
  );
}
