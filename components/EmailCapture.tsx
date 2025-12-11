"use client";

import React, { useState } from "react";

interface EmailCaptureProps {
  variant?: "wide" | "compact";
}

export default function EmailCapture({ variant = "wide" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate submission
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setEmail("");
    }, 800);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-aqua/50 bg-brand-primary/20 px-4 py-6 md:px-6 md:py-8">
        <div className="space-y-2">
          <p className="text-lg font-bold text-brand-aqua">
            ✓ Kia ora! Thanks for signing up
          </p>
          <p className="text-slate-300">
            We'll send occasional NZ trip ideas and travel tips to{" "}
            <span className="font-semibold text-white">{email}</span>. (Demo mode: no
            emails are actually sent yet, but we're building this real soon!)
          </p>
        </div>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <div className="rounded-2xl border border-brand-light/20 bg-black/40 px-4 py-5 md:px-6 md:py-6 space-y-4">
      {/* Header */}
      <div>
        <div className="brand-pill mb-3">📬 Stay in the loop</div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Get New Zealand trip tips & deals
        </h3>
        <p className="text-slate-400 text-sm md:text-base">
          Get occasional NZ travel tips, region ideas, and eventually partner offers. We promise,
          no spam.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className={isCompact ? "space-y-3" : "space-y-3"}>
        {/* Email Input */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
            placeholder="you@example.com"
            disabled={submitting}
            className={`w-full rounded-full bg-black/60 border text-slate-100 px-4 py-3 placeholder:text-slate-500 focus:outline-none transition ${
              error ? "border-red-500/50 focus:border-red-500" : "border-white/20 focus:border-brand-aqua"
            } disabled:opacity-50`}
          />
          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className={`w-full md:w-auto px-6 py-3 rounded-full font-bold transition ${
            submitting
              ? "bg-slate-600 text-slate-400 cursor-not-allowed opacity-60"
              : "bg-brand-primary text-white hover:bg-brand-primaryLight"
          }`}
        >
          {submitting ? "Sending..." : "Send me trip tips"}
        </button>
      </form>
    </div>
  );
}
