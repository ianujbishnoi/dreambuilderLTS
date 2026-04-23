"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(08) 8234 5678",
    href: "tel:+61882345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dreambuildersadelaide.com.au",
    href: "mailto:info@dreambuildersadelaide.com.au",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 King William Street, Adelaide, SA 5000",
    href: "https://maps.google.com/?q=123+King+William+Street+Adelaide+SA+5000",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 8am - 5pm",
    href: null,
  },
]

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Contact Information
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Reach out to us through any of the following channels, or fill out 
              the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Call Button */}
            <a
              href="tel:+61882345678"
              className="mt-10 inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:bg-foreground/90"
            >
              <Phone className="h-4 w-4" />
              Call Us Now
            </a>

            {/* Map */}
            <div className="mt-12 aspect-video w-full overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.1234567890123!2d138.5990!3d-34.9290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced1234567890%3A0x1234567890abcdef!2s123%20King%20William%20St%2C%20Adelaide%20SA%205000!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dream Builders Adelaide Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 lg:p-12">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Request a Consultation
            </h3>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we&apos;ll be in touch shortly.
            </p>

            {isSubmitted ? (
              <div className="mt-8 bg-background p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center bg-accent/20 text-accent">
                  <Send className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">
                  Thank You!
                </h4>
                <p className="mt-2 text-muted-foreground">
                  Your message has been received. We&apos;ll get back to you within 
                  24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="mt-2 block w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="mt-2 block w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="mt-2 block w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="mt-2 block w-full resize-none border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:bg-foreground/90",
                    isSubmitting && "cursor-not-allowed opacity-50"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>

                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our privacy policy. We&apos;ll 
                  never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
