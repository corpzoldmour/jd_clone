import Image from "next/image"

export default function BrandsYouLove() {
  return (
    <section className="py-10 bg-white border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Brands You Love</h2>
      </div>
      {/* This div now allows the image to stretch wider, beyond the standard container */}
      <div className="w-full max-w-[2560px] mx-auto px-0">
        {" "}
        {/* Increased max-width and removed px-4 */}
        <Image
          src="/images/brand-logos.png"
          alt="Brand logos including Nike, adidas, The North Face, New Balance, Montrex, Under Armour, On, Berghaus, Jordan, Crocs, Asics, Columbia, McKenzie, Hoka"
          width={2560} // Increased width significantly
          height={300} // Adjusted height for better visual balance
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}
