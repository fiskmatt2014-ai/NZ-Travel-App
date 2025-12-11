"use client";

import React, { useState } from "react";
import Link from "next/link";
import { regions, type Region } from "../../data/regions";
import { thingsToDo, type ActivityCategory } from "../../data/thingsToDo";
import EmailCapture from "../../components/EmailCapture";

export const metadata = {
  title: "NZ Trip Quiz – Find Your Perfect Route",
  description:
    "Answer a few quick questions and get personalised region and activity suggestions for your New Zealand adventure.",
  openGraph: {
    title: "NZ Trip Quiz – Find Your Perfect Route",
    description:
      "Answer a few quick questions and get personalised region and activity suggestions for your New Zealand adventure.",
    images: [
      { url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png" },
    ],
  },
  alternates: { canonical: "https://guidetonewzealand.com/trip-quiz" },
};

type QuizResults = {
  tripLengthDays: number;
  regions: Region[];
  categories: ActivityCategory[];
};

export default function TripQuizPage() {
  const [length, setLength] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);
  const [island, setIsland] = useState<string | null>(null);
  const [results, setResults] = useState<QuizResults | null>(null);

  // Simple suggestion logic
  const handleGetSuggestions = () => {
    if (!length || !style || !interest) return;

    // 1. Trip length
    const tripLengthDays =
      length === "3–5 days" ? 5 : length === "6–10 days" ? 10 : 14;

    // 2. Suggest regions based on interest and island preference
    let suggestedRegions: Region[] = [];

    if (interest === "Nature & hiking" || interest === "Adventure activities") {
      suggestedRegions = regions.filter(
        (r) =>
          r.slug === "queenstown" ||
          r.slug === "fiordland" ||
          r.slug === "rotorua"
      );
    } else if (interest === "Beaches & lakes") {
      suggestedRegions = regions.filter(
        (r) =>
          r.slug === "coromandel" ||
          r.slug === "auckland" ||
          r.slug === "queenstown"
      );
    } else if (interest === "Food & wine") {
      suggestedRegions = regions.filter(
        (r) =>
          r.slug === "auckland" ||
          r.slug === "queenstown" ||
          r.slug === "wellington"
      );
    } else if (interest === "Culture & cities") {
      suggestedRegions = regions.filter(
        (r) =>
          r.slug === "auckland" ||
          r.slug === "wellington" ||
          r.slug === "rotorua"
      );
    }

    // If island preference, filter further
    if (island === "South Island") {
      suggestedRegions = suggestedRegions.filter(
        (r) =>
          r.slug === "queenstown" ||
          r.slug === "fiordland" ||
          r.slug === "coromandel"
      );
    } else if (island === "North Island") {
      suggestedRegions = suggestedRegions.filter(
        (r) =>
          r.slug === "auckland" ||
          r.slug === "rotorua" ||
          r.slug === "wellington"
      );
    }

    // Ensure we have at least 2–3 regions
    if (suggestedRegions.length === 0) {
      suggestedRegions = regions.slice(0, 3);
    }
    suggestedRegions = suggestedRegions.slice(0, 3);

    // 3. Suggest activity categories
    let suggestedCategories: ActivityCategory[] = [];

    if (interest === "Nature & hiking") {
      suggestedCategories = thingsToDo.filter((c) => c.slug === "hiking");
    } else if (interest === "Beaches & lakes") {
      suggestedCategories = thingsToDo.filter((c) => c.slug === "beaches");
    } else if (interest === "Food & wine") {
      suggestedCategories = thingsToDo.filter((c) => c.slug === "wine");
    } else if (interest === "Culture & cities") {
      suggestedCategories = thingsToDo.filter((c) => c.slug === "culture");
    } else if (interest === "Adventure activities") {
      suggestedCategories = thingsToDo.filter((c) => c.slug === "adventure");
    }

    // Add 1–2 more popular categories as secondary suggestions
    const secondary = thingsToDo.filter(
      (c) => !suggestedCategories.some((sc) => sc.slug === c.slug)
    );
    suggestedCategories = [
      ...suggestedCategories,
      ...secondary.slice(0, 2),
    ].slice(0, 3);

    setResults({
      tripLengthDays,
      regions: suggestedRegions,
      categories: suggestedCategories,
    });
  };

  const resetQuiz = () => {
    setLength(null);
    setStyle(null);
    setInterest(null);
    setIsland(null);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-brand-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {!results ? (
          <div>
            <h1 className="text-5xl font-bold mb-2 text-white">
              Discover your perfect NZ trip
            </h1>
            <p className="text-lg text-slate-300 mb-12">
              Answer a few quick questions and we'll suggest regions, activities,
              and a trip length tailored just for you.
            </p>

            {/* Question 1: Trip Length */}
            <div className="brand-card bg-brand-surface p-6 mb-6 border border-brand-light/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                How long are you thinking of staying?
              </h2>
              <div className="flex flex-wrap gap-3">
                {["3–5 days", "6–10 days", "11–21 days"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setLength(opt)}
                    className={`px-6 py-3 rounded-full font-semibold transition ${
                      length === opt
                        ? "bg-brand-aqua text-black"
                        : "bg-brand-primary/30 text-brand-aqua hover:bg-brand-primary/50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Travel Style */}
            <div className="brand-card bg-brand-surface p-6 mb-6 border border-brand-light/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What's your travel style?
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Budget backpacker",
                  "Comfort / mid-range",
                  "Luxury",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setStyle(opt)}
                    className={`px-6 py-3 rounded-full font-semibold transition ${
                      style === opt
                        ? "bg-brand-sky text-black"
                        : "bg-brand-primary/30 text-brand-sky hover:bg-brand-primary/50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Interest */}
            <div className="brand-card bg-brand-surface p-6 mb-6 border border-brand-light/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What are you most interested in?
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Nature & hiking",
                  "Beaches & lakes",
                  "Food & wine",
                  "Culture & cities",
                  "Adventure activities",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setInterest(opt)}
                    className={`px-6 py-3 rounded-full font-semibold transition ${
                      interest === opt
                        ? "bg-brand-aqua text-black"
                        : "bg-brand-primary/30 text-brand-aqua hover:bg-brand-primary/50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 4: Island Preference (Optional) */}
            <div className="brand-card bg-brand-surface p-6 mb-8 border border-brand-light/20">
              <h2 className="text-2xl font-bold text-white mb-2">
                Which island are you most curious about? <span className="text-sm text-slate-400">(optional)</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {["North Island", "South Island", "Both / not sure"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => setIsland(opt)}
                      className={`px-6 py-3 rounded-full font-semibold transition ${
                        island === opt
                          ? "bg-brand-sky text-black"
                          : "bg-brand-primary/30 text-brand-sky hover:bg-brand-primary/50"
                      }`}
                    >
                      {opt}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleGetSuggestions}
              disabled={!length || !style || !interest}
              className={`w-full py-4 rounded-full font-bold text-lg transition ${
                length && style && interest
                  ? "bg-brand-aqua text-black hover:bg-brand-sky cursor-pointer"
                  : "bg-slate-600 text-slate-400 cursor-not-allowed"
              }`}
            >
              See my suggestions
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={resetQuiz}
              className="text-brand-aqua hover:text-brand-sky font-semibold mb-8"
            >
              ← Take the quiz again
            </button>

            <h1 className="text-5xl font-bold mb-2 text-white">
              Your NZ trip suggestions
            </h1>
            <p className="text-lg text-slate-300 mb-12">
              Based on your answers, here's what we think you'll love.
            </p>

            {/* Trip Length */}
            <div className="brand-card bg-brand-surface p-6 mb-8 border border-brand-light/20">
              <h2 className="text-3xl font-bold text-white mb-3">
                Suggested trip length
              </h2>
              <p className="text-lg text-slate-300">
                A <span className="text-brand-aqua font-bold">{results.tripLengthDays}-day trip</span> would give you plenty
                of time to explore multiple regions and really soak in the NZ experience without
                feeling rushed.
              </p>
            </div>

            {/* Regions */}
            <div className="brand-card bg-brand-surface p-6 mb-8 border border-brand-light/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Regions to focus on
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {results.regions.map((region) => (
                  <Link
                    key={region.slug}
                    href={`/regions/${region.slug}`}
                    className="block p-4 rounded-lg bg-brand-primary/20 border border-brand-aqua/30 hover:border-brand-aqua hover:bg-brand-primary/40 transition"
                  >
                    <h3 className="text-lg font-bold text-brand-aqua mb-2">
                      {region.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {region.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Things to do */}
            <div className="brand-card bg-brand-surface p-6 mb-8 border border-brand-light/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Things to do that match your vibe
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {results.categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/things-to-do/${cat.slug}`}
                    className="block p-4 rounded-lg bg-brand-sky/20 border border-brand-sky/30 hover:border-brand-sky hover:bg-brand-sky/30 transition"
                  >
                    <h3 className="text-lg font-bold text-brand-sky mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-slate-400">{cat.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <Link
                href="/ai-trip-planner"
                className="block w-full py-4 rounded-full bg-brand-primary text-white font-bold text-center hover:bg-brand-primaryLight transition text-lg"
              >
                Use the trip planner with these ideas
              </Link>
              <div className="flex gap-4">
                <Link
                  href="/regions"
                  className="flex-1 py-3 rounded-full border-2 border-brand-aqua text-brand-aqua font-bold text-center hover:bg-brand-aqua/10 transition"
                >
                  Explore all regions
                </Link>
                <Link
                  href="/things-to-do"
                  className="flex-1 py-3 rounded-full border-2 border-brand-sky text-brand-sky font-bold text-center hover:bg-brand-sky/10 transition"
                >
                  All activities
                </Link>
              </div>
            </div>

            {/* Email Capture Section */}
            <div className="mt-12 pt-8 border-t border-brand-light/20">
              <EmailCapture variant="compact" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
