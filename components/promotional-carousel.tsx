"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const promoSlides = [
  {
    id: 1,
    image: "/images/promo-man-utd.jpeg",
    alt: "Manchester United 25/26 Home Jersey",
    ctaText: "Shop Now",
    ctaLink: "#",
  },
  {
    id: 2,
    image: "/images/promo-headlining-heat.jpeg",
    alt: "Headlining Heat campaign",
    ctaText: "Shop Now",
    ctaLink: "#",
  },
  {
    id: 3,
    image: "/images/promo-fathers-day.jpeg",
    alt: "Father's Day Picks",
    ctaText: "Shop Now",
    ctaLink: "#",
  },
  {
    id: 4,
    image: "/images/promo-montirex.jpeg",
    alt: "Montirex - Challenge Accepted",
    ctaText: "Shop Now",
    ctaLink: "#",
  },
]

export default function PromotionalCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const totalSlides = promoSlides.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentSlide])

  // Pause autoplay on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false)
  const resumeAutoPlay = () => setIsAutoPlaying(true)

  return (
    <section
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="relative">
        {promoSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "transition-opacity duration-1000",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 absolute inset-0",
            )}
          >
            <div className="relative w-full aspect-[16/7]">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute bottom-10 right-10">
                <Link
                  href={slide.ctaLink}
                  className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition-colors"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={(e) => {
          e.preventDefault()
          prevSlide()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/70 text-black p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault()
          nextSlide()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/70 text-black p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {promoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
