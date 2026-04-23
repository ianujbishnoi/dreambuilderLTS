"use client"

import { useInView } from "@/hooks/use-in-view"
import { Target, Heart, Shield, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every detail matters. We approach each project with meticulous attention to craftsmanship and quality.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We love what we do. Our passion for building exceptional homes drives us to continuously improve.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency and honesty guide every interaction. We build trust through open communication.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new technologies and techniques to deliver homes that are modern, efficient, and timeless.",
  },
]

export function MissionValues() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mission */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Our Mission
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Creating Homes That Inspire
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our mission is to craft extraordinary living spaces that reflect the 
            unique personalities and aspirations of our clients, while setting new 
            standards for quality, design, and sustainability in residential 
            construction.
          </p>
        </div>

        {/* Values */}
        <div className="mt-20">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Our Values
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center transition-all duration-700 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center bg-foreground text-background">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
