import nanjingMochouTongjun from "./nanjing-mochou-tongjun";
import { RouteData } from "@/lib/types";

// All routes in one place — just add new imports and entries to add new routes
const routes: RouteData[] = [
  nanjingMochouTongjun,
];

export default routes;

// Helper: get route by slug
export function getRouteBySlug(slug: string): RouteData | undefined {
  return routes.find((r) => r.info.slug === slug);
}

// Helper: get routes grouped by region
export function getRoutesByRegion(): Record<string, RouteData[]> {
  const grouped: Record<string, RouteData[]> = {};
  routes.forEach((r) => {
    const region = r.info.region || "其他";
    if (!grouped[region]) grouped[region] = [];
    grouped[region].push(r);
  });
  return grouped;
}
