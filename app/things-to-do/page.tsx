import { thingsToDo } from "../../data/thingsToDo";

export const metadata = {
  title: "Things To Do in New Zealand – Hiking, Beaches, Adventure",
  description:
    "Discover the most popular things to do in New Zealand, from hiking and beaches to culture and food.",
  openGraph: {
    title: "Things To Do in New Zealand – Hiking, Beaches, Adventure",
    description:
      "Discover the most popular things to do in New Zealand, from hiking and beaches to culture and food.",
    images: [
      { url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png" },
    ],
  },
  alternates: { canonical: "https://guidetonewzealand.com/things-to-do" },
};

export default function ThingsToDoPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">Things to Do in New Zealand</h1>
      <p className="text-slate-600 mb-8">
        Discover the best activities and experiences across New Zealand, from hiking and adventure
        to culture and food.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {thingsToDo.map((category) => (
          <a
            key={category.slug}
            href={`/things-to-do/${category.slug}`}
            className="block bg-white rounded-lg border shadow-sm p-6 hover:border-blue-500 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
            <p className="text-slate-600 text-sm mb-4">{category.description}</p>
            <p className="text-xs text-slate-500">
              {category.activities.length} activity
              {category.activities.length !== 1 ? "ies" : ""}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
