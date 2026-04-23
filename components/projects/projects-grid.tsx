"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { projects, Project } from "@/lib/projects"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const categories = ["All", "Custom Home", "Renovation", "Extension"] as const

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const { ref, isInView } = useInView()

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: Project
  index: number
  isInView: boolean
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        "group relative aspect-[4/3] overflow-hidden bg-muted transition-all duration-700",
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={project.images[0]}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-xs uppercase tracking-widest text-white/70">
          {project.category} &bull; {project.location}
        </p>
        <h3 className="mt-1 text-xl font-medium text-white">{project.title}</h3>
      </div>
    </Link>
  )
}
