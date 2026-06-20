// Citywalk route data types

export interface RouteStat {
  value: string;
  unit?: string;
  label: string;
}

export interface RouteInfo {
  slug: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  region: string;
  city: string;
  badge: string;
  districts: string[];
  stats: RouteStat[];
  heroGradient: string;
  accentColor: string;
  description: string;
}

export interface HeritageItem {
  name: string;
  level?: string;
  era?: string;
  highlight?: string;
  address?: string;
  feature?: string;
  dimension?: string; // for person/entity tables
  content?: string;
}

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableData {
  type: "heritage" | "timeline" | "general";
  columns: TableColumn[];
  rows: Record<string, string | { text: string; badge: string }>[];
}

export interface StoryBlock {
  year?: string;
  text: string;
}

export interface CheckpointSection {
  type: "story" | "heritage-table" | "task" | "info-table";
  title: string;
  stories?: StoryBlock[];
  table?: TableData;
  taskLabel?: string;
  taskDesc?: string;
}

export interface InfoItem {
  icon: string;
  label: string;
  value: string;
}

export interface Checkpoint {
  number: number;
  name: string;
  subtitle: string;
  badge: string;
  address?: string;
  infoItems: InfoItem[];
  sections: CheckpointSection[];
  imageFallback: {
    icon: string;
    text: string;
  };
}

export interface RouteData {
  info: RouteInfo;
  overviewStops: {
    number: string; // ①②③...
    name: string;
    distance: string;
  }[];
  checkpoints: Checkpoint[];
  completionTitle: string;
  completionRoute: string;
  completionStats: string;
  footerQuote: string;
  footerNote: string;
  footerImageNote: string;
}
