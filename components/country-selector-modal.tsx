"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Country {
  name: string
  flag: string
  currency: string
}

interface CountrySelectorModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectCountry: (country: Country) => void
  selectedCountry: Country
}

const countries: Country[] = [
  { name: "Ireland", flag: "/images/flags/ireland.png", currency: "€" },
  { name: "Australia", flag: "/images/flags/australia.png", currency: "AUD" },
  { name: "België", flag: "/images/flags/belgium.png", currency: "€" },
  { name: "Bulgaria", flag: "/images/flags/bulgaria.png", currency: "BGN" },
  { name: "Canada", flag: "/images/flags/canada.png", currency: "CAD" },
  { name: "Denmark", flag: "/images/flags/denmark.png", currency: "DKK" }, // Added
  { name: "France", flag: "/images/flags/france.png", currency: "€" },
  { name: "Greece", flag: "/images/flags/greece.png", currency: "€" }, // Added
  { name: "Italia", flag: "/images/flags/italy.png", currency: "€" },
  { name: "Poland", flag: "/images/flags/poland.png", currency: "PLN" }, // Added
  { name: "Portugal", flag: "/images/flags/portugal.png", currency: "€" },
  { name: "España", flag: "/images/flags/spain.png", currency: "€" },
  { name: "United Kingdom", flag: "/images/flags/united-kingdom.png", currency: "GBP" }, // Added
  { name: "USA", flag: "/images/flags/usa.png", currency: "USD" }, // Added
  { name: "Rest of the World", flag: "/images/flags/globe.png", currency: "USD" },
]

export default function CountrySelectorModal({
  isOpen,
  onClose,
  onSelectCountry,
  selectedCountry,
}: CountrySelectorModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col">
      <div className="relative w-full py-4 border-b border-gray-200 flex justify-center items-center">
        <h2 className="text-lg font-bold uppercase">Deliver To</h2>
        <button onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 p-2" aria-label="Close">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          {/* Highlighted Ireland option */}
          <button
            onClick={() => onSelectCountry(countries[0])} // Assuming Ireland is always the first
            className={cn(
              "flex items-center gap-4 p-4 border-b-2 mb-8 w-full justify-center",
              selectedCountry.name === countries[0].name ? "border-black" : "border-gray-200",
            )}
          >
            <Image
              src={countries[0].flag || "/placeholder.svg"}
              alt={countries[0].name}
              width={40}
              height={30}
              className="rounded border border-gray-200"
            />
            <span className="text-lg font-bold">{countries[0].name.toUpperCase()}</span>
          </button>

          {/* Grid of other countries */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-6">
            {countries.slice(1).map(
              (
                country, // Skip Ireland as it's handled above
              ) => (
                <button
                  key={country.name}
                  onClick={() => onSelectCountry(country)}
                  className="flex flex-col items-center text-center p-2 hover:bg-gray-100 rounded-md"
                >
                  <Image
                    src={country.flag || "/placeholder.svg"}
                    alt={country.name}
                    width={60}
                    height={45}
                    className="rounded border border-gray-200 mb-2"
                  />
                  <span className="text-sm font-medium">{country.name.toUpperCase()}</span>
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
