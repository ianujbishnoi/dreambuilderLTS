"use client"

import { useInView } from "@/hooks/use-in-view"
import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "25+ Years of Excellence",
    description:
      "Over two decades of delivering exceptional homes has given us unmatched expertise and insight into luxury residential construction.",
  },
  {
    title: "Award-Winning Designs",
    description:
      "Our portfolio includes multiple HIA and MBA award-winning projects, recognized for innovation, design excellence, and craftsmanship.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs or surprises. We provide detailed, fixed-price contracts so you know exactly what your investment includes.",
  },
  {
    title: "Master Craftspeople",
    description:
      "Our team includes some of Adelaide's most skilled tradespeople, many with decades of experience in their respective fields.",
  },
  {
    title: "End-to-End Service",
    description:
      "From initial concept through to final handover, we manage every aspect of your build with dedicated project coordination.",
  },
]

export function WhyChooseUs() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Header */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Why Dream Builders
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The Difference Is in the Details
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Choosing the right builder is one of the most important decisions 
              you&apos;ll make. Here&apos;s why Adelaide families trust us with 
              their dream homes.
            </p>
          </div>

          {/* Reasons */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`flex gap-4 transition-all duration-700 ${
                  isInView
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
