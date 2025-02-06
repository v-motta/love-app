import Link from 'next/link'

export function Header() {
  return (
    <header className="py-4 border-b border-b-zinc-400 shadow w-full flex justify-center">
      <nav className="flex gap-x-4 font-extrabold text-lg md:text-2xl font-cormorant">
        <Link href="/gallery">Gallery</Link>
        <Link href="/our-story">Our story</Link>
      </nav>
    </header>
  )
}
