// lib/types.ts
export type MediaType = "image" | "video";

export type CategorySlug =
  | "toys"
  | "clothes"
  | "decorative"
  | "bags"
  | "mobile-covers"
  | "customized";

export interface Category {
  slug: CategorySlug;
  title: string;
  description?: string;
  cover?: string; // path to representative image
}

export interface MediaItem {
  id: string;
  title: string;
  description?: string;
  category: CategorySlug;
  type: MediaType;
  src: string;          // /media/images/... or /media/videos/...
  thumbnail?: string;   // optional custom thumbnail
  tags?: string[];
  createdAt?: string;   // ISO date
  width?: number;
  height?: number;
}