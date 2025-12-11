export type Tour = {
  slug: string;
  name: string;
  region: string;
  duration: string;        // e.g. "Half day", "3 days"
  style: string;           // e.g. "Guided tour", "Self-drive", "Small group"
  description: string;
  highlights: string[];
  priceFrom?: string;      // e.g. "From NZD 199"
  operatorName: string;
  operatorWebsite?: string;
  affiliateCode?: string;
};

export const tours: Tour[] = [
  {
    slug: "milford-sound-day-cruise",
    name: "Milford Sound Day Cruise from Queenstown",
    region: "Fiordland / Queenstown",
    duration: "Full day",
    style: "Guided tour",
    description: "Coach and cruise combo to Milford Sound with scenic stops, photo opportunities, and a boat cruise under towering waterfalls.",
    highlights: [
      "Scenic drive along the Milford Road",
      "Cruise through Milford Sound",
      "Waterfalls and wildlife spotting"
    ],
    priceFrom: "From NZD 249",
    operatorName: "Example Fiordland Tours",
    operatorWebsite: "https://example.com/milford",
    affiliateCode: "NZTRIP10"
  },
  {
    slug: "waiheke-wine-tasting",
    name: "Waiheke Island Wine Tasting Tour",
    region: "Auckland / Waiheke",
    duration: "Half day",
    style: "Small group tour",
    description: "Ferry to Waiheke Island and visit a selection of vineyards with tastings and beautiful coastal views.",
    highlights: [
      "Multiple cellar door tastings",
      "Coastal scenery",
      "Relaxed Kiwi island vibe"
    ],
    priceFrom: "From NZD 189",
    operatorName: "Example Waiheke Wine Co.",
    operatorWebsite: "https://example.com/waiheke-wine",
    affiliateCode: "NZTRIP5"
  },
  {
    slug: "rotorua-geothermal-and-culture",
    name: "Rotorua Geothermal & Māori Culture Evening",
    region: "Rotorua",
    duration: "Evening",
    style: "Guided cultural experience",
    description: "Explore geothermal landscapes by day and enjoy a Māori cultural performance and hāngī-style dinner in the evening.",
    highlights: [
      "Geothermal sights",
      "Māori cultural performance",
      "Traditional kai (food) experience"
    ],
    priceFrom: "From NZD 210",
    operatorName: "Example Rotorua Experiences"
  },
  {
    slug: "queenstown-adventure-sampler",
    name: "Queenstown Adventure Sampler",
    region: "Queenstown",
    duration: "1–2 days (flexible)",
    style: "Adventure package",
    description: "Bundle of classic Queenstown activities like jet boating, gondola and luge, with optional bungy or zipline add-ons.",
    highlights: [
      "Jet boating",
      "Gondola & luge",
      "Optional bungy"
    ],
    priceFrom: "From NZD 299",
    operatorName: "Example Queenstown Adventures"
  }
];
