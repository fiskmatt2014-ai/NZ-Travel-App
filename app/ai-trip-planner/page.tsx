"use client";

import React, { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

type ItineraryDay = {
  dayNumber: number;
  title: string;
  summary: string;
};

export const metadata = {
  title: "AI Trip Planner – Create Your New Zealand Itinerary",
  description:
    "Generate personalised New Zealand itineraries based on your interests, budget, and travel style.",
  openGraph: {
    title: "AI Trip Planner – Create Your New Zealand Itinerary",
    description:
      "Generate personalised New Zealand itineraries based on your interests, budget, and travel style.",
    type: "website",
    images: [
      { url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png" },
    ],
  },
  alternates: { canonical: "https://guidetonewzealand.com/ai-trip-planner" },
};

export default function AiTripPlannerPage() {
  const searchParams = useSearchParams();

  const daysFromUrl = searchParams?.get("days");
  const budgetFromUrl = searchParams?.get("budget");
  const interestsFromUrl = searchParams?.get("interests");

  const [tripLength, setTripLength] = useState<number>(
    daysFromUrl ? Number(daysFromUrl) : 7
  );
  const [budget, setBudget] = useState<"low" | "mid" | "high">(
    (budgetFromUrl as "low" | "mid" | "high") || "mid"
  );
  const [interests, setInterests] = useState<string>(
    interestsFromUrl ? decodeURIComponent(interestsFromUrl) : "hiking, beaches"
  );

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setItinerary(null);

    try {
      const res = await fetch("/api/ai-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tripLengthDays: tripLength,
          budget,
          interests,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data.error || "Failed to generate itinerary";
        setError(errorMessage);
        return;
      }

      setItinerary(data.days || null);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">AI Trip Planner (Mock Version)</h1>
        <p className="text-slate-600 mb-6">
          Tell us a bit about your trip and we'll generate a simple example itinerary for New
          Zealand. This is a fake version just to preview the experience.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1">Trip length (days)</label>
            <input
              type="number"
              min={3}
              max={30}
              value={tripLength}
              onChange={(e) => setTripLength(Number(e.target.value))}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Budget</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value as any)}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="low">Low (backpacker)</option>
              <option value="mid">Mid-range</option>
              <option value="high">High / luxury</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Interests (comma separated)</label>
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="hiking, wine, beaches, wildlife"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Generating..." : "Generate itinerary"}
          </button>
        </form>

        {error && <div className="mb-4 text-red-600">{error}</div>}

        {itinerary && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-2">Your example itinerary</h2>
            {itinerary.map((day) => (
              <div key={day.dayNumber} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-1">Day {day.dayNumber}: {day.title}</h3>
                <p className="text-slate-700">{day.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
