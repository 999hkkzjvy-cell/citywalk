import { notFound } from "next/navigation";
import routes, { getRouteBySlug } from "@/data/routes";
import { RouteClient } from "./RouteClient";

export function generateStaticParams() {
  return routes.map((r) => ({
    slug: r.info.slug,
  }));
}

export default function RoutePage({ params }: { params: { slug: string } }) {
  const route = getRouteBySlug(params.slug);

  if (!route) {
    notFound();
  }

  return <RouteClient route={route} />;
}
