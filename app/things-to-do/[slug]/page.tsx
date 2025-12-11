import { thingsToDo } from "../../../data/thingsToDo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = thingsToDo.find((c) => c.slug === params.slug);

  if (!category) {
    return {
      title: "Category – Things to do",
      description: "Category not found",
      alternates: { canonical: `https://guidetonewzealand.com/things-to-do/${params.slug}` },
    };
  }

  return {
    title: `${category.name} – Things To Do in New Zealand`,
    description: category.description,
    openGraph: {
      title: `${category.name} – Things To Do in New Zealand`,
      description: category.description,
      images: [
        { url: "https://guidetonewzealand.com/Images/94a5dc0b-096c-41bc-95ee-1a87f33cfed7.png" },
      ],
    },
    alternates: { canonical: `https://guidetonewzealand.com/things-to-do/${params.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = thingsToDo.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
      <p className="text-slate-600 mb-8">{category.description}</p>

      <div className="space-y-6">
        {category.activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-2">{activity.title}</h2>
            <p className="text-slate-600 mb-3">{activity.description}</p>
            <p className="text-sm text-slate-500">Region: {activity.region}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a href="/things-to-do" className="text-blue-600 hover:text-blue-700 font-medium">
          ← Back to Things to Do
        </a>
      </div>
    </div>
  );
}
