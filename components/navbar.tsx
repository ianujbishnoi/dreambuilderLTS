"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              "text-xl font-semibold tracking-tight transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            Dream Builders
          </span>
          <span
            className={cn(
              "text-xs uppercase tracking-widest transition-colors",
              isScrolled ? "text-accent" : "text-white/80"
            )}
          >
            Adelaide
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "px-5 py-2.5 text-sm font-medium transition-all",
              isScrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-white text-foreground hover:bg-white/90"
            )}
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-background",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground text-base font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 bg-foreground text-background px-5 py-3 text-center text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </header>
  )
}
