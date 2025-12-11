"use client";

import { useState } from "react";

export const metadata = {
  title: "Work With Us – Partner With Guide to New Zealand",
  description:
    "Reach international travellers planning trips to New Zealand. Partner options for tours, experiences, and accommodations.",
  openGraph: {
    title: "Work With Us – Partner With Guide to New Zealand",
    description:
      "Reach international travellers planning trips to New Zealand. Partner options for tours, experiences, and accommodations.",
    images: [
      { url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png" },
    ],
  },
  alternates: { canonical: "https://guidetonewzealand.com/work-with-us" },
};

export default function WorkWithUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    website: "",
    regions: "",
    offering: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ businessName: "", website: "", regions: "", offering: "", email: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-brand-background">
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        {/* Hero Section */}
        <div>
          <div className="brand-pill mb-6">
            🤝 For NZ tourism operators
          </div>
          <h1 className="text-5xl font-bold mb-4 text-white">
            Work with Guide to New Zealand
          </h1>
          <p className="text-lg text-slate-300">
            We're building a trusted trip planning platform for international travellers, especially
            from Europe. We curate the best regions, experiences, and tours to inspire and guide
            visitors to Aotearoa. If you're a tour operator, accommodation provider, or tourism
            business, let's explore how we can work together.
          </p>
        </div>

        {/* Who this is for */}
        <div className="brand-card bg-brand-surface p-6 border border-brand-light/20">
          <h2 className="text-3xl font-bold text-white mb-6">Ideal partners</h2>
          <ul className="space-y-3">
            {[
              "Guided tours and experiences (hiking, adventure, cultural)",
              "Accommodation providers in key regions (lodges, holiday homes, glamping)",
              "Transport & shuttle services (campervan rentals, bus services)",
              "Regional tourism organisations and destination marketing",
              "Food & wine experiences, restaurants, and culinary tours",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <span className="text-brand-aqua font-bold mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How it works */}
        <div className="brand-card bg-brand-surface p-6 border border-brand-light/20">
          <h2 className="text-3xl font-bold text-white mb-8">How it works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-aqua mb-3">1</div>
              <h3 className="text-lg font-bold text-white mb-3">List your product</h3>
              <p className="text-sm text-slate-400">
                We create a profile or featured listing showcasing your business, including key
                details, photos, and links to book or learn more.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-sky mb-3">2</div>
              <h3 className="text-lg font-bold text-white mb-3">
                Reach pre-qualified travellers
              </h3>
              <p className="text-sm text-slate-400">
                Your offer appears in relevant regions, activity categories, and personalized trip
                suggestions shown to users planning their NZ adventure.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-sun mb-3">3</div>
              <h3 className="text-lg font-bold text-white mb-3">Track performance</h3>
              <p className="text-sm text-slate-400">
                Early stage: we're building tools to track clicks, promo code usage, and affiliate
                conversions so you see real ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Partner options */}
        <div className="brand-card bg-brand-surface p-6 border border-brand-light/20">
          <h2 className="text-3xl font-bold text-white mb-8">Partnership options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <div className="bg-black/30 rounded-lg p-5 border border-brand-light/10">
              <h3 className="text-xl font-bold text-brand-aqua mb-3">Starter Listing</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Basic business profile</li>
                <li>• Listed in region directory</li>
                <li>• Contact & website link</li>
                <li>• Ideal for new partners</li>
              </ul>
            </div>

            {/* Featured */}
            <div className="bg-black/30 rounded-lg p-5 border border-brand-light/10">
              <h3 className="text-xl font-bold text-brand-sky mb-3">Featured Experience</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Highlighted on category pages</li>
                <li>• Hero image & description</li>
                <li>• Promo code support</li>
                <li>• Higher visibility</li>
              </ul>
            </div>

            {/* Custom */}
            <div className="bg-black/30 rounded-lg p-5 border border-brand-light/10">
              <h3 className="text-xl font-bold text-brand-sun mb-3">Custom Collaboration</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Co-created itineraries</li>
                <li>• Affiliate partnerships</li>
                <li>• Bundles & packages</li>
                <li>• Direct support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Get in touch */}
        <div className="brand-card bg-brand-surface p-6 border border-brand-light/20">
          <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
          <p className="text-slate-300 mb-8">
            We're in early-stage build mode and actively looking for partners who share our vision
            of making NZ trip planning smarter and more inspiring. Fill out the form below or email
            us directly, and we'll send you a partner info pack and chat about options that fit your business.
          </p>

          {/* Email Link */}
          <div className="mb-8 p-4 bg-black/30 rounded-lg border border-brand-aqua/30">
            <p className="text-slate-300 mb-2">Quick way to reach out:</p>
            <a
              href="mailto:hello@guidetonz.com"
              className="text-brand-aqua font-bold hover:text-brand-sky transition text-lg"
            >
              hello@guidetonz.com
            </a>
          </div>

          {/* Form */}
          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Business name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Milford Sound Cruises Ltd"
                  className="w-full rounded-lg bg-black/40 border border-brand-light/20 text-white px-4 py-2 focus:outline-none focus:border-brand-aqua"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full rounded-lg bg-black/40 border border-brand-light/20 text-white px-4 py-2 focus:outline-none focus:border-brand-aqua"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Regions you operate in
                </label>
                <input
                  type="text"
                  name="regions"
                  value={formData.regions}
                  onChange={handleInputChange}
                  placeholder="e.g. Queenstown, Fiordland, Auckland"
                  className="w-full rounded-lg bg-black/40 border border-brand-light/20 text-white px-4 py-2 focus:outline-none focus:border-brand-aqua"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  What do you offer? *
                </label>
                <textarea
                  name="offering"
                  value={formData.offering}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Full-day guided hiking tours, luxury lodge accommodation, etc."
                  rows={3}
                  className="w-full rounded-lg bg-black/40 border border-brand-light/20 text-white px-4 py-2 focus:outline-none focus:border-brand-aqua"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Your email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="contact@business.com"
                  className="w-full rounded-lg bg-black/40 border border-brand-light/20 text-white px-4 py-2 focus:outline-none focus:border-brand-aqua"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-brand-primary text-white font-bold hover:bg-brand-primaryLight transition"
              >
                Send inquiry
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-lg bg-brand-primary/20 border border-brand-aqua/50">
              <p className="text-brand-aqua font-bold text-lg mb-2">✓ Thanks for reaching out!</p>
              <p className="text-slate-300">
                We've received your inquiry. We're in early stages, so we'll review and get back to
                you within a few days with partnership details and next steps.
              </p>
              <p className="text-slate-400 text-sm mt-3">
                In the meantime, feel free to email us at{" "}
                <a href="mailto:hello@guidetonz.com" className="text-brand-aqua hover:text-brand-sky">
                  hello@guidetonz.com
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
