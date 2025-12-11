import type { MetadataRoute } from "next";
import { regions } from "../data/regions";
import { thingsToDo } from "../data/thingsToDo";
import { tours } from "../data/tours";

const BASE_URL = "https://guidetonewzealand.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/de",
    "/ai-trip-planner",
    "/trip-quiz",
    "/regions",
    "/things-to-do",
    "/tours",
    "/work-with-us",
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  // dynamic region pages
  regions.forEach((r) => {
    routes.push({ url: `${BASE_URL}/regions/${r.slug}`, lastModified: new Date() });
  });

  // dynamic things-to-do categories
  thingsToDo.forEach((c) => {
    routes.push({ url: `${BASE_URL}/things-to-do/${c.slug}`, lastModified: new Date() });
  });

  // dynamic tours
  tours.forEach((t) => {
    routes.push({ url: `${BASE_URL}/tours/${t.slug}`, lastModified: new Date() });
  });

  return routes;
}
