// app/gallery/[slug]/page.tsx (Category)
import { getItemsByCategory, getCategories } from "@/lib/content";
import type { CategorySlug } from "@/lib/types";
import GalleryGrid from "@/components/GalleryGrid";

export async function generateStaticParams() {
  const cats = await getCategories();
  return cats.map(c => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: { slug: CategorySlug } }) {
  const items = await getItemsByCategory(params.slug);
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold capitalize">{params.slug.replace("-", " ")}</h1>
      <GalleryGrid items={items} />
    </section>
  );
}