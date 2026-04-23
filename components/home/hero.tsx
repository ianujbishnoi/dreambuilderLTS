"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home.jpg"
          alt="Luxury modern home exterior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl">
          <p
            className={`mb-4 text-sm uppercase tracking-[0.3em] text-white/80 transition-all duration-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Luxury Home Builders
          </p>
          <h1
            className={`text-balance text-4xl font-semibold leading-tight tracking-tight text-white transition-all delay-100 duration-700 sm:text-5xl md:text-6xl lg:text-7xl ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Building Dream Homes with Precision & Excellence
          </h1>
          <p
            className={`mt-6 max-w-lg text-lg leading-relaxed text-white/80 transition-all delay-200 duration-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Adelaide&apos;s premier custom home builders, delivering exceptional 
            craftsmanship and modern architecture for discerning homeowners.
          </p>
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row sm:items-center transition-all delay-300 duration-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-foreground"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/60">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
