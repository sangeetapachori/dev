// app/page.tsx (Home)
import { getCategories } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const categories = await getCategories();
  return (
    <section className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">Handmade Crochet Showcase</h1>
        <p className="text-neutral-600">
          Welcome to Our Crochet World
          Every stitch tells a story, and every creation is made with love. From playful toys and cozy clothes to elegant décor, stylish bags, and protective mobile covers, our handmade crochet items bring comfort, beauty, and joy into everyday life.
          We believe in more than just crafting—we believe in creating pieces that reflect you. That’s why we proudly offer customization based on your needs. Whether it’s a personalized gift, a unique design for your home, or a one‑of‑a‑kind accessory, we’ll bring your vision to life with care and creativity.
          🌸 Browse our gallery, explore our collections, and place your order today.
          Your perfect crochet piece is waiting—crafted with passion, tailored for you.

          Toys, clothes, décor, bags, mobile covers, and custom items.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(cat => (
          <Link
            key={cat.slug}
            href={`/gallery/${cat.slug}`}
            className="group block rounded-lg overflow-hidden border bg-white h-full hover:shadow-lg transition-all"
    >
            <div className="relative h-64 w-full overflow-hidden">
              {cat.cover ? (
                <Image
                  src={cat.cover}
                  alt={cat.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          // PERFORMANCE: This tells Next.js to resize the large original to a smaller version
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{cat.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    <div className="text-center">
        <Link href="/gallery" className="inline-block rounded bg-black px-4 py-2 text-white">View all</Link>
     </div>
    </section>
  );}
