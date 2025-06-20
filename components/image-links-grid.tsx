import Image from "next/image"
import Link from "next/link"

export default function ImageLinksGrid() {
  const items = [
    {
      id: 1,
      image: "/images/lightweight-jackets.jpeg",
      alt: "Lightweight Jackets",
      title: "Lightweight Jackets",
      href: "#",
    },
    {
      id: 2,
      image: "/images/hoka-shoes.jpeg",
      alt: "HOKA shoes",
      title: "HOKA",
      href: "#",
    },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <Link href={item.href} key={item.id} className="group block">
              <div className="relative w-full aspect-[5/4] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 text-xl font-bold">
                {item.title} <span className="text-gray-500">—</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
