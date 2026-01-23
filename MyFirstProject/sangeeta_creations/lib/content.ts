// lib/content.ts
import { promises as fs } from "node:fs";
import path from "node:path";
import type { Category, MediaItem, CategorySlug } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function getCategories(): Promise<Category[]> {
  const file = await fs.readFile(path.join(CONTENT_DIR, "categories.json"), "utf-8");
  return JSON.parse(file) as Category[];
}

export async function getItemsByCategory(slug?: CategorySlug): Promise<MediaItem[]> {
  const itemsDir = path.join(CONTENT_DIR, "items");
  const files = await fs.readdir(itemsDir);
  const all: MediaItem[] = [];
  for (const f of files) {
    const json = JSON.parse(await fs.readFile(path.join(itemsDir, f), "utf-8")) as MediaItem[];
    all.push(...json);
  }
  return slug ? all.filter(i => i.category === slug) : all;
}

export async function getItemById(id: string): Promise<MediaItem | null> {
  const items = await getItemsByCategory();
  return items.find(i => i.id === id) ?? null;
}