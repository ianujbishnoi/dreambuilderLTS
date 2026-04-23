"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const team = [
  {
    name: "Marcus Sullivan",
    role: "Founder & Managing Director",
    image: "/images/team.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Lead Architect",
    image: "/images/team.jpg",
  },
  {
    name: "James Morrison",
    role: "Construction Manager",
    image: "/images/team.jpg",
  },
  {
    name: "Emily Watson",
    role: "Interior Design Director",
    image: "/images/team.jpg",
  },
]

export function TeamSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Our Team
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Meet the Experts
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A dedicated team of professionals committed to bringing your vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-700 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-6 font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
