"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Product data
const products = [
  {
    id: 1,
    name: "Nike Air Max 95",
    brand: "Nike",
    oldPrice: "€180.00",
    newPrice: "€150.00",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
  {
    id: 2,
    name: "adidas Gazelle",
    brand: "adidas Originals",
    oldPrice: "€100.00",
    newPrice: "€90.00",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
  {
    id: 3,
    name: "New Balance 327",
    brand: "New Balance",
    oldPrice: "€120.00",
    newPrice: "€100.00",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
  {
    id: 4,
    name: "Nike Tech Fleece Joggers",
    brand: "Nike",
    oldPrice: "€90.00",
    newPrice: "€75.00",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
  {
    id: 5,
    name: "The North Face Nuptse Jacket",
    brand: "The North Face",
    oldPrice: "€280.00",
    newPrice: "€250.00",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
  {
    id: 6,
    name: "adidas Stan Smith",
    brand: "adidas Originals",
    oldPrice: "€95.00",
    newPrice: "€85.00",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
]

export default function TopPicks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <Link
              href={product.link}
              key={product.id}
              className="min-w-[180px] sm:min-w-[200px] flex-shrink-0 bg-white snap-start"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2">
                <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-red-600 font-bold">{product.newPrice}</span>
                  <span className="text-gray-500 text-xs line-through">{product.oldPrice}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
