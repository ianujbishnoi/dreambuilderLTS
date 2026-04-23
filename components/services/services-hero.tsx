import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero.jpg"
          alt="Dream Builders Adelaide services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">
            Our Services
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Comprehensive Building Solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            From custom homes to complete renovations, we deliver exceptional 
            results tailored to your unique requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
