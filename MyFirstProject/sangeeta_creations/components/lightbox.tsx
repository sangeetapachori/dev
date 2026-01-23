// components/Lightbox.tsx
"use client";
import Image from "next/image";
import type { MediaItem } from "@/lib/types";

export default function Lightbox({ item, onClose }: { item: MediaItem | null; onClose: () => void }) {
  if (!item || item.type !== "image") return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center" onClick={onClose}>
      <div className="relative max-w-4xl w-full p-4" onClick={e => e.stopPropagation()}>
        <button className="absolute right-4 top-4 rounded bg-white px-3 py-1 text-sm" onClick={onClose}>Close</button>
        <Image src={item.src} alt={item.title} width={1600} height={1200} className="w-full h-auto rounded" />
        {item.description && <p className="mt-3 text-white/90">{item.description}</p>}
      </div>
    </div>
  );
}