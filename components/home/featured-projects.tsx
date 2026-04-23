"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    id: 1,
    title: "The Riverfront Residence",
    category: "Custom Home",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "Coastal Modern Retreat",
    category: "Custom Home",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Urban Contemporary",
    category: "Renovation",
    image: "/images/project-3.jpg",
  },
  {
    id: 4,
    title: "The Heritage Transformation",
    category: "Extension",
    image: "/images/project-4.jpg",
  },
]

export function FeaturedProjects() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Our Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={`group relative aspect-[4/3] overflow-hidden bg-muted transition-all duration-700 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  {project.category}
                </p>
                <h3 className="mt-1 text-xl font-medium text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
