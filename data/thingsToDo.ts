export type ActivityCategory = {
  slug: string;
  name: string;
  description: string;
  activities: {
    title: string;
    description: string;
    region: string;
  }[];
};

export const thingsToDo: ActivityCategory[] = [
  {
    slug: "hiking",
    name: "Hiking & Nature Walks",
    description: "New Zealand's top trails, scenic lookouts, and forest walks.",
    activities: [
      {
        title: "Hooker Valley Track",
        description: "Easy 3-hour walk with views of Mt Cook.",
        region: "Canterbury"
      },
      {
        title: "Roy's Peak",
        description: "Iconic Wanaka viewpoint, steep but rewarding.",
        region: "Wanaka"
      }
    ]
  },
  {
    slug: "beaches",
    name: "Beaches & Coastlines",
    description: "Relax, swim, and explore NZ's incredible coastline.",
    activities: [
      {
        title: "Cathedral Cove",
        description: "Scenic beach accessible via walking track.",
        region: "Coromandel"
      }
    ]
  },
  {
    slug: "adventure",
    name: "Adventure Activities",
    description: "Bungee, jet boating, skydiving, rafting, and more.",
    activities: [
      {
        title: "Kawarau Bridge Bungy",
        description: "The world's first commercial bungy jump.",
        region: "Queenstown"
      }
    ]
  },
  {
    slug: "culture",
    name: "Culture & Māori Experiences",
    description: "Traditional food, performances, and cultural insights.",
    activities: [
      {
        title: "Te Pā Tū Cultural Experience",
        description: "World-class Māori dining + cultural storytelling.",
        region: "Rotorua"
      }
    ]
  },
  {
    slug: "wine",
    name: "Food & Wine",
    description: "Vineyards, farm tours, tastings, and local cuisine.",
    activities: [
      {
        title: "Waiheke Island Wine Tour",
        description: "Famous vineyards with ocean views.",
        region: "Auckland"
      }
    ]
  }
];
