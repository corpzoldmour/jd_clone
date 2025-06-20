"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Youtube, Instagram } from "lucide-react" // Removed Tiktok, will use a placeholder image for TikTok

// Footer links data
const footerLinks = [
  {
    title: "Shopping with Us", // Updated
    links: [
      { name: "Students", href: "#" },
      { name: "Size Guides", href: "#" },
      { name: "Find a Store", href: "#" },
      { name: "Our Status Program", href: "#" }, // Updated
      { name: "Download The App", href: "#" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { name: "Delivery & Returns", href: "#" },
      { name: "Click and Collect", href: "#" },
      { name: "Help & Contact Us", href: "#" },
      { name: "Track My Order", href: "#" },
      { name: "Waste Electrical or Electronic Equipment", href: "#" },
    ],
  },
  {
    title: "Corporate",
    links: [
      { name: "Careers", href: "#" },
      { name: "Our Fashion Plc", href: "#" }, // Updated
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy & Cookies", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Cookie Settings", href: "#" },
      { name: "Modern Slavery Report", href: "#" },
    ],
  },
]

// Payment methods - updated to match screenshot
const paymentMethods = [
  { name: "Visa", image: "/placeholder.svg?height=20&width=30" },
  { name: "Visa Electron", image: "/placeholder.svg?height=20&width=30" },
  { name: "Mastercard", image: "/placeholder.svg?height=20&width=30" },
  { name: "Maestro", image: "/placeholder.svg?height=20&width=30" },
  { name: "American Express", image: "/placeholder.svg?height=20&width=30" },
  { name: "PayPal", image: "/placeholder.svg?height=20&width=30" },
  { name: "Klarna", image: "/placeholder.svg?height=20&width=30" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-white">
      {/* Top bar: Social media and Newsletter */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold">Follow us</span>
            <div className="flex gap-3">
              <Link href="#" aria-label="Facebook" className="hover:text-gray-400">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-gray-400">
                <Youtube size={20} />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-gray-400">
                <Instagram size={20} />
              </Link>
              {/* Placeholder for TikTok icon as it's not in Lucide React */}
              <Link href="#" aria-label="TikTok" className="hover:text-gray-400">
                <Image
                  src="/placeholder.svg?height=20&width=20" // Placeholder for TikTok logo
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="invert" // To make placeholder black on dark background
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-300">Sign up for the latest news</span> {/* Updated */}
            <button className="bg-green-500 text-white px-3 py-1.5 text-xs font-bold hover:bg-green-600 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Main footer content: Links */}
      <div className="bg-white text-black py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold text-xs mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[11px] text-gray-600 hover:text-black">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar: Corporate, Copyright, Language, Payment, Back to Top */}
      <div className="bg-gray-100 text-gray-600 py-4 text-[11px]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="text-center md:text-left flex-1">
            <p>
              Visit our corporate website at{" "}
              <Link href="https://www.yourcompany.com" className="underline hover:text-black">
                www.yourcompany.com
              </Link>{" "}
              {/* Updated */}
            </p>
            <p className="mt-1">© 2025 Your Company All rights reserved.</p> {/* Updated */}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 flex-1">
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-xs bg-white">
                <option>Selecione o idioma</option>
                {/* Add more language options here */}
              </select>
              <span>
                Powered by{" "}
                <Link href="#" className="underline hover:text-black">
                  Google Tradutor
                </Link>
              </span>
            </div>
            <div className="mt-2">
              <p className="mb-2 text-right">We accept the following payment methods</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="bg-white rounded p-0.5 h-6 w-10 flex items-center justify-center border border-gray-200"
                  >
                    <Image
                      src={method.image || "/placeholder.svg"}
                      alt={method.name}
                      width={30}
                      height={20}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Back to Top button - positioned on the right, within the light grey bar */}
          <button
            onClick={scrollToTop}
            className="bg-black text-white px-3 py-1.5 text-xs font-bold hover:bg-gray-800 transition-colors self-end md:self-start"
            aria-label="Back to top"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
