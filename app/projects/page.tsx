import { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ContactCTA } from "@/components/home/contact-cta"

export const metadata: Metadata = {
  title: "Our Projects | Dream Builders Adelaide",
  description:
    "Explore our portfolio of luxury custom homes, renovations, and extensions throughout Adelaide. See our commitment to excellence in every project.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ContactCTA />
    </>
  )
}
