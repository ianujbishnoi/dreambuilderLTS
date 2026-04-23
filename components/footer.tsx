import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-semibold tracking-tight">
                Dream Builders
              </span>
              <span className="ml-2 text-xs uppercase tracking-widest text-background/60">
                Adelaide
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Crafting exceptional homes with precision, passion, and an unwavering commitment to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {["Custom Homes", "Renovations", "Extensions", "Design Consultation"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/services"
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4" />
                <a href="tel:+61882345678" className="hover:text-background transition-colors">
                  (08) 8234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@dreambuildersadelaide.com.au" className="hover:text-background transition-colors">
                  info@dreambuildersadelaide.com.au
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 King William Street<br />Adelaide, SA 5000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-background/50">
              &copy; {new Date().getFullYear()} Dream Builders Adelaide. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-background/50 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
