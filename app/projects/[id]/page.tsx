import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Bed, Bath, Square, Clock } from "lucide-react"
import { projects, getProjectById } from "@/lib/projects"
import { ContactCTA } from "@/components/home/contact-cta"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Project Not Found | Dream Builders Adelaide",
    }
  }

  return {
    title: `${project.title} | Dream Builders Adelaide`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex h-full items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-accent">
              {project.category}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                About This Project
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Key Features
              </h3>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-secondary p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Project Details
                </h3>
                <div className="mt-6 space-y-4">
                  {project.stats.bedrooms && (
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Bed className="h-4 w-4" />
                        Bedrooms
                      </span>
                      <span className="font-medium text-foreground">
                        {project.stats.bedrooms}
                      </span>
                    </div>
                  )}
                  {project.stats.bathrooms && (
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Bath className="h-4 w-4" />
                        Bathrooms
                      </span>
                      <span className="font-medium text-foreground">
                        {project.stats.bathrooms}
                      </span>
                    </div>
                  )}
                  {project.stats.area && (
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Square className="h-4 w-4" />
                        Floor Area
                      </span>
                      <span className="font-medium text-foreground">
                        {project.stats.area}
                      </span>
                    </div>
                  )}
                  {project.stats.duration && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        Build Time
                      </span>
                      <span className="font-medium text-foreground">
                        {project.stats.duration}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {project.images.length > 1 && (
            <div className="mt-16">
              <h3 className="text-xl font-semibold text-foreground">Gallery</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] overflow-hidden bg-muted"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
