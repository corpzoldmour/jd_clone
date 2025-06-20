import Image from "next/image"
import Link from "next/link"

// Featured categories data
const categories = [
  {
    id: 1,
    title: "Men's Footwear",
    image: "/placeholder.svg?height=400&width=300",
    link: "#",
  },
  {
    id: 2,
    title: "Women's Footwear",
    image: "/placeholder.svg?height=400&width=300",
    link: "#",
  },
  {
    id: 3,
    title: "Men's Clothing",
    image: "/placeholder.svg?height=400&width=300",
    link: "#",
  },
  {
    id: 4,
    title: "Women's Clothing",
    image: "/placeholder.svg?height=400&width=300",
    link: "#",
  },
  {
    id: 5,
    title: "Kids' Footwear",
    image: "/placeholder.svg?height=400&width=300",
    link: "#",
  },
  {
    id: 6,
    title: "Kids' Clothing",
    image: "/placeholder.svg?height=400&width=300",
    link: "#",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link href={category.link} key={category.id} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-sm">{category.title}</h3>
                    <span className="inline-block mt-2 text-xs font-medium border-b border-white pb-1">SHOP NOW</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
