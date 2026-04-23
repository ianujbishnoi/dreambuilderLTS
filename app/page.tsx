import { Hero } from "@/components/home/hero"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { ServicesOverview } from "@/components/home/services-overview"
import { AboutPreview } from "@/components/home/about-preview"
import { Testimonials } from "@/components/home/testimonials"
import { Process } from "@/components/home/process"
import { ContactCTA } from "@/components/home/contact-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <AboutPreview />
      <Testimonials />
      <Process />
      <ContactCTA />
    </>
  )
}
