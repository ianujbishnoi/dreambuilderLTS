import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact Us | Dream Builders Adelaide",
  description:
    "Get in touch with Dream Builders Adelaide. Request a consultation for your custom home, renovation, or extension project.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  )
}
