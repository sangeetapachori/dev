// app/gallery/page.tsx (All items)
import { getItemsByCategory } from "@/lib/content";
import GalleryGrid from "@/components/GalleryGrid";

export default async function GalleryPage() {
  const items = await getItemsByCategory();
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">All Items</h1>
      <GalleryGrid items={items} />
    </section>
  );
}