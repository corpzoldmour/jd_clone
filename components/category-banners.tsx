import Image from "next/image"
import Link from "next/link"

export default function CategoryBanners() {
  const categories = [
    {
      id: "mens",
      title: "SHOP MEN'S",
      image: "/images/mens-banner.png",
      href: "#",
    },
    {
      id: "womens",
      title: "SHOP WOMEN'S",
      image: "/images/womens-banner.png",
      href: "#",
    },
    {
      id: "kids",
      title: "SHOP KIDS'",
      image: "/images/kids-banner.png",
      href: "#",
    },
  ]

  return (
    <section className="py-6 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={category.href} className="relative block">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={`${category.title} category`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
