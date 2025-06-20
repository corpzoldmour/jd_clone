"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Menu, X, ShoppingCart, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import CountrySelectorModal from "./country-selector-modal" // Import the new modal component

// Navigation items with their dropdown menus
const navItems = [
  {
    title: "Men",
    href: "#",
  },
  {
    title: "Women",
    href: "#",
  },
  {
    title: "Kids",
    href: "#",
  },
  {
    title: "Collections",
    href: "#",
  },
  {
    title: "Football",
    href: "#",
  },
  {
    title: "Sports",
    href: "#",
  },
  {
    title: "Brands",
    href: "#",
  },
  {
    title: "SALE",
    href: "#",
    highlight: true,
  },
]

// Define countries here to be used as initial state and passed to modal
const initialCountries = [
  { name: "Ireland", flag: "/images/flags/ireland.png", currency: "€" },
  { name: "Australia", flag: "/images/flags/australia.png", currency: "AUD" },
  { name: "België", flag: "/images/flags/belgium.png", currency: "€" },
  { name: "Bulgaria", flag: "/images/flags/bulgaria.png", currency: "BGN" },
  { name: "Canada", flag: "/images/flags/canada.png", currency: "CAD" },
  { name: "Denmark", flag: "/images/flags/denmark.png", currency: "DKK" },
  { name: "France", flag: "/images/flags/france.png", currency: "€" },
  { name: "Greece", flag: "/images/flags/greece.png", currency: "€" },
  { name: "Italia", flag: "/images/flags/italy.png", currency: "€" },
  { name: "Poland", flag: "/images/flags/poland.png", currency: "PLN" },
  { name: "Portugal", flag: "/images/flags/portugal.png", currency: "€" },
  { name: "España", flag: "/images/flags/spain.png", currency: "€" },
  { name: "United Kingdom", flag: "/images/flags/united-kingdom.png", currency: "GBP" },
  { name: "USA", flag: "/images/flags/usa.png", currency: "USD" },
  { name: "Rest of the World", flag: "/images/flags/globe.png", currency: "USD" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showCountrySelectorModal, setShowCountrySelectorModal] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(initialCountries[0]) // Default to Ireland

  const handleCountrySelect = (country: (typeof initialCountries)[0]) => {
    setSelectedCountry(country)
    setShowCountrySelectorModal(false)
  }

  return (
    <header className="z-50 bg-white">
      {/* Top utility bar */}
      <div className="bg-white text-black text-[11px] border-b">
        <div className="container mx-auto px-4 py-2.5 flex justify-end items-center gap-4">
          <Link href="#" className="hover:underline">
            My Account
          </Link>
          <Link href="#" className="hover:underline">
            Find a Store
          </Link>
          <Link href="#" className="hover:underline">
            Help
          </Link>
          <Link href="#" className="hover:underline">
            Track my order
          </Link>
          <div className="flex items-center gap-1">
            <Link href="#" className="hover:underline flex items-center">
              Wishlist <Heart size={14} className="ml-1" />
            </Link>
          </div>
          <div className="relative flex items-center gap-1">
            <button
              onClick={() => setShowCountrySelectorModal(true)}
              className="flex items-center gap-1 hover:underline"
            >
              <span>Deliver To:</span>
              <Image
                src={selectedCountry.flag || "/placeholder.svg"}
                alt={selectedCountry.name}
                width={20}
                height={15}
                className="rounded border border-gray-200"
              />
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Placeholder for logo area, now empty */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              {/* You can add your new logo here if desired */}
              <span className="text-4xl font-black tracking-tighter">YOUR STORE</span> {/* Placeholder text */}
            </Link>
          </div>

          {/* Search and basket */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search: Nike, adidas, North Face..."
                className="border border-gray-300 px-3 py-2 w-72 text-sm"
              />
              <button className="bg-green-500 text-white px-5 py-2.5 text-sm">Search</button>
            </div>
            <div className="bg-gray-200 px-5 py-2.5 text-sm flex items-center justify-center">
              <ShoppingCart size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto">
          <ul className="hidden md:flex justify-center">
            {navItems.map((item) => (
              <li key={item.title} className="relative">
                <Link
                  href={item.href}
                  className={cn("px-5 py-3.5 block hover:underline", item.highlight ? "text-red-600 font-bold" : "")}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 pt-16 overflow-y-auto">
          <div className="container mx-auto px-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "w-full block py-3 border-b border-gray-200",
                      item.highlight ? "text-red-600 font-bold" : "",
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <CountrySelectorModal
        isOpen={showCountrySelectorModal}
        onClose={() => setShowCountrySelectorModal(false)}
        onSelectCountry={handleCountrySelect}
        selectedCountry={selectedCountry}
      />
    </header>
  )
}
