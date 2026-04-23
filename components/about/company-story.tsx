"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function CompanyStory() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Our Story
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A Foundation Built on Passion
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dream Builders Adelaide began in 1999 with a simple vision: to 
                redefine what it means to build a home. Founded by master builder 
                Marcus Sullivan, our company has grown from a small team of 
                dedicated craftspeople to one of Adelaide&apos;s most respected 
                luxury home builders.
              </p>
              <p>
                Our journey has been defined by a relentless pursuit of excellence. 
                Every home we build represents not just walls and foundations, but 
                the hopes and dreams of the families who will call it home. This 
                understanding drives everything we do.
              </p>
              <p>
                Today, we combine traditional building techniques with contemporary 
                design principles and sustainable practices. Our team of architects, 
                designers, and master craftspeople work collaboratively to deliver 
                homes that exceed expectations in every way.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative aspect-square overflow-hidden transition-all delay-200 duration-700 ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <Image
              src="/images/project-5.jpg"
              alt="Dream Builders Adelaide craftmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
