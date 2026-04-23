"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "200+", label: "Homes Built" },
  { value: "15", label: "Industry Awards" },
]

export function AboutPreview() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div
            className={`relative aspect-[4/3] overflow-hidden transition-all duration-700 ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <Image
              src="/images/project-5.jpg"
              alt="Dream Builders Adelaide team at work"
              fill
              className="object-cover"
            />
            {/* Accent Border */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border-2 border-accent" />
          </div>

          {/* Content */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Crafting Exceptional Homes Since 1999
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Dream Builders Adelaide was founded on a simple principle: every 
              family deserves a home that reflects their aspirations. For over two 
              decades, we&apos;ve been turning that principle into reality.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our approach combines traditional craftsmanship with contemporary 
              design, ensuring every project we undertake stands as a testament to 
              our commitment to excellence.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-accent">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Learn Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
