import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { MissionValues } from "@/components/about/mission-values"
import { WhyChooseUs } from "@/components/about/why-choose-us"
import { TeamSection } from "@/components/about/team-section"
import { ContactCTA } from "@/components/home/contact-cta"

export const metadata: Metadata = {
  title: "About Us | Dream Builders Adelaide",
  description:
    "Learn about Dream Builders Adelaide - over 25 years of excellence in luxury custom home building in Adelaide.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionValues />
      <WhyChooseUs />
      <TeamSection />
      <ContactCTA />
    </>
  )
}
