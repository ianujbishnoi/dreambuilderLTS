"use client"

import Link from "next/link"
import { Home, Hammer, ArrowRight, Maximize } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Home,
    title: "Custom Homes",
    description:
      "From concept to completion, we bring your vision to life with meticulous attention to detail and uncompromising craftsmanship.",
    href: "/services#custom-homes",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description:
      "Transform your existing space into something extraordinary. We revitalize homes while preserving their unique character.",
    href: "/services#renovations",
  },
  {
    icon: Maximize,
    title: "Extensions",
    description:
      "Expand your living space seamlessly. Our extensions blend perfectly with your existing home architecture.",
    href: "/services#extensions",
  },
]

export function ServicesOverview() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Comprehensive building solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-background p-8 transition-all duration-700 hover:shadow-lg ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center bg-foreground text-background">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
