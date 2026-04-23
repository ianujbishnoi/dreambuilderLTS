"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ContactCTA() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ready to Build Your Dream Home?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Let&apos;s discuss your vision. Schedule a consultation with our team 
            and take the first step towards your perfect home.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:bg-foreground/90"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="tel:+61882345678"
              className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Call (08) 8234 5678
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
