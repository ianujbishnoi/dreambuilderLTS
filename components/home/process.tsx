"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with an in-depth consultation to understand your vision, requirements, and budget. This is where your dream starts taking shape.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team develops detailed plans and 3D visualizations, refining every aspect until the design perfectly captures your aspirations.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "With meticulous project management and skilled craftspeople, we bring your vision to life with precision and care.",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "We conduct thorough quality checks before handing you the keys to your new home, backed by our comprehensive warranty.",
  },
]

export function Process() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            How We Work
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A transparent, collaborative approach from concept to completion
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-6 hidden h-px w-full bg-border lg:block" />
              )}
              
              <div className="relative bg-background">
                <span className="text-5xl font-light text-accent">{step.number}</span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
