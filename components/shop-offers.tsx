import Link from "next/link"

export default function ShopOffers() {
  const offers = [
    { text: "UP TO 50% OFF HOODIES", href: "#" },
    { text: "UP TO 40% OFF FOOTWEAR", href: "#" },
    { text: "UP TO 40% OFF ADIDAS", href: "#" },
    { text: "UP TO 50% OFF PANTS", href: "#" },
    { text: "UP TO 40% OFF T-SHIRTS", href: "#" },
    { text: "UP TO 40% OFF NIKE", href: "#" },
    { text: "UP TO 40% OFF SHORTS", href: "#" },
    { text: "UP TO 40% OFF THE NORTH FACE", href: "#" },
  ]

  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Shop the Offers</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {offers.map((offer, index) => (
            <Link
              key={index}
              href={offer.href}
              className="bg-red-600 aspect-square flex items-center justify-center p-4 hover:bg-red-700 transition-colors"
            >
              <span className="text-white text-center font-bold text-lg md:text-xl lg:text-2xl">{offer.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
