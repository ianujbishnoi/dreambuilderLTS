"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    id: "custom-homes",
    title: "Custom Home Building",
    subtitle: "Your Vision, Our Expertise",
    description:
      "Every family is unique, and your home should reflect that. Our custom home building service brings your dream to life, from initial concept through to final handover. We work closely with you at every stage, ensuring your new home perfectly captures your lifestyle, preferences, and aspirations.",
    features: [
      "Collaborative design process with our in-house architects",
      "Premium materials sourced from local and international suppliers",
      "Energy-efficient building practices and sustainable options",
      "Comprehensive project management and regular updates",
      "Fixed-price contracts with no hidden costs",
    ],
    image: "/images/service-custom.jpg",
  },
  {
    id: "renovations",
    title: "Renovations",
    subtitle: "Transform Your Space",
    description:
      "Breathe new life into your existing home with our comprehensive renovation services. Whether you&apos;re updating a single room or undertaking a complete transformation, we approach every project with the same attention to detail and commitment to excellence.",
    features: [
      "Full interior and exterior renovations",
      "Heritage home restoration and modernization",
      "Kitchen and bathroom specialist upgrades",
      "Structural modifications and improvements",
      "Minimal disruption project planning",
    ],
    image: "/images/service-renovation.jpg",
  },
  {
    id: "extensions",
    title: "Extensions",
    subtitle: "Expand Your Living Space",
    description:
      "When you need more space but love your location, an extension is the perfect solution. Our team specializes in creating seamless additions that blend perfectly with your existing home while maximizing functionality and natural light.",
    features: [
      "Single and multi-story extensions",
      "Seamless integration with existing architecture",
      "Indoor-outdoor living solutions",
      "Second-story additions and lift conversions",
      "Council approval management",
    ],
    image: "/images/service-extension.jpg",
  },
]

export function ServicesList() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const { ref, isInView } = useInView()
  const isReversed = index % 2 === 1

  return (
    <div
      id={service.id}
      ref={ref}
      className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative aspect-[4/3] overflow-hidden transition-all duration-700 ${
          isReversed ? "lg:order-2" : ""
        } ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`transition-all delay-200 duration-700 ${
          isReversed ? "lg:order-1" : ""
        } ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          {service.subtitle}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {service.title}
        </h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        <ul className="mt-8 space-y-3">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
        >
          Discuss Your Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
