import Image from "next/image"
import Link from "next/link"

export default function SaleTopPicks() {
  const products = [
    {
      id: 1,
      name: "MONTREX Torrent Woven Full Zip Jacket",
      brand: "MONTREX",
      oldPrice: "€80",
      newPrice: "€60",
      image: "/images/product-montrex-jacket.png",
      href: "#",
    },
    {
      id: 2,
      name: "Nike Air Max 95",
      brand: "Nike",
      oldPrice: "€190",
      newPrice: "€155",
      image: "/images/product-nike-airmax.png",
      href: "#",
    },
    {
      id: 3,
      name: "The North Face Performance T-Shirt",
      brand: "The North Face",
      oldPrice: "€50",
      newPrice: "€35",
      image: "/images/product-northface-tshirt.png",
      href: "#",
    },
    {
      id: 4,
      name: "adidas Originals ZX RS",
      brand: "adidas",
      oldPrice: "€120",
      newPrice: "€80",
      image: "/images/product-adidas-zx.png",
      href: "#",
    },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Sale Top Picks</h2>
          <div className="flex">
            <button className="px-3 py-1.5 bg-black text-white text-sm font-medium">Men's</button>
            <button className="px-3 py-1.5 bg-white text-black text-sm font-medium border">Women's</button>
            <button className="px-3 py-1.5 bg-white text-black text-sm font-medium border">Kids'</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link href={product.href} key={product.id} className="group block">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">{product.newPrice}</span>
                  <span className="text-gray-500 line-through text-base">{product.oldPrice}</span>
                </div>
                <h3 className="font-medium text-base mt-1">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
