// components/GalleryGrid.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import Lightbox from "./Lightbox";
import type { MediaItem } from "@/lib/types";
import clsx from "clsx";

export default function GalleryGrid({ items }: { items: MediaItem[] }) {
  const [active, setActive] = useState<MediaItem | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(item => (
          <article key={item.id} className="rounded-lg overflow-hidden border bg-white">
            {item.type === "image" ? (
              <button onClick={() => setActive(item)} className="block">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-56 w-full object-cover"
                />
              </button>
            ) : (
              <VideoPlayer src={item.src} poster={item.thumbnail} />
            )}
            <div className="p-3">
              <h3 className="font-medium">{item.title}</h3>
              {item.tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map(t => (
                    <span key={t} className={clsx("text-xs px-2 py-1 rounded bg-neutral-100")}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  );
}