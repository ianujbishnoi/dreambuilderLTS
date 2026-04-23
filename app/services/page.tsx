import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ContactCTA } from "@/components/home/contact-cta"

export const metadata: Metadata = {
  title: "Our Services | Dream Builders Adelaide",
  description:
    "Explore our comprehensive building services including custom homes, renovations, and extensions. Premium craftsmanship for Adelaide homeowners.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ContactCTA />
    </>
  )
}
