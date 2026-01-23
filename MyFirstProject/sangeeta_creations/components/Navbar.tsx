// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Crochet Showcase</Link>
        <div className="flex gap-4">
          <Link href="/gallery">Gallery</Link>
          <Link href="/gallery/customized">Customized</Link>
        </div>
      </div>
    </nav>
  );
}