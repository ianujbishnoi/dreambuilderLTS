"use client"

import { useInView } from "@/hooks/use-in-view"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Dream Builders exceeded every expectation. Their attention to detail and commitment to our vision was remarkable. Our home is everything we dreamed of and more.",
    author: "Sarah & Michael Thompson",
    location: "Burnside",
  },
  {
    quote:
      "The entire process was seamless from start to finish. Their transparency and communication made what could have been a stressful experience an absolute pleasure.",
    author: "James Patterson",
    location: "Glenelg",
  },
  {
    quote:
      "Outstanding craftsmanship and professionalism. They transformed our dated property into a stunning contemporary home. Highly recommend to anyone seeking excellence.",
    author: "Emma & David Chen",
    location: "North Adelaide",
  },
]

export function Testimonials() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-background/60">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`relative bg-background/5 p-8 transition-all duration-700 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="mt-6 text-lg leading-relaxed text-background/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-background/10 pt-6">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-background/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
