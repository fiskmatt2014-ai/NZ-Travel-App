export type Region = {
  slug: string;
  name: string;
  shortDescription: string;
  highlight?: string;
};

export const regions: Region[] = [
  {
    slug: "auckland",
    name: "Auckland & Surrounds",
    shortDescription: "Harbour city, islands, food and wine, easy day trips.",
    highlight: "Take a ferry to Waiheke Island for beaches and vineyards.",
  },
  {
    slug: "rotorua",
    name: "Rotorua & Taupō",
    shortDescription: "Geothermal activity, Māori culture, lakes and forest walks.",
    highlight: "Soak in hot pools after a day of forest trails.",
  },
  {
    slug: "coromandel",
    name: "Coromandel Peninsula",
    shortDescription: "Beaches, coastal drives, relaxed kiwi holiday vibe.",
    highlight: "Visit Cathedral Cove and Hot Water Beach.",
  },
  {
    slug: "queenstown",
    name: "Queenstown & Wanaka",
    shortDescription: "Adventure capital, lakes, mountains, skiing and wine.",
    highlight: "Combine a lake cruise with a short hike for epic views.",
  },
  {
    slug: "fiordland",
    name: "Fiordland (Milford & Doubtful Sound)",
    shortDescription: "Iconic fiords, waterfalls, cruises and spectacular drives.",
    highlight: "Drive the Milford Road and take a cruise in the fiord.",
  },
  {
    slug: "wellington",
    name: "Wellington Region",
    shortDescription: "Cool capital city, craft beer, film, and coastal walks.",
    highlight: "Ride the cable car and explore Te Papa museum.",
  },
];
