// components/VideoPlayer.tsx
"use client";
export default function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
  return (
    <video
      controls
      preload="metadata"
      poster={poster}
      className="h-56 w-full object-cover bg-black"
    >
      <source src={src} type="video/mp4" />
      <source src={src.replace(".mp4", ".webm")} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}