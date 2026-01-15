import Link from "next/link";

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "5.0", label: "Star Rating" },
  { number: "10+", label: "Years Experience" },
];

const services = [
  {
    title: "Vacation Rentals",
    description: "Professional turnover cleaning for Airbnb, VRBO, and short-term rentals. Quick turnarounds, guest-ready results.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Deep Cleaning",
    description: "Comprehensive top-to-bottom cleaning. Perfect for seasonal refreshes, special occasions, or first-time clients.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Regular Housekeeping",
    description: "Weekly, bi-weekly, or monthly maintenance cleaning. Keep your home consistently spotless with scheduled service.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "5/5 - the best Airbnb we have ever stayed in. The house is pristine, well maintained, clean, and the amenities are top-tier!",
    author: "Shawn",
    title: "Columbus, Ohio",
  },
  {
    quote: "Spotlessly cleaned home, absolutely EVERY household item you can think of. I would have given it 6 stars if that was an option!",
    author: "Drew",
    title: "Crystal Lake, Illinois",
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--cream)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--cream)] via-[var(--cream)] to-[var(--gold)]/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[var(--charcoal)] leading-tight mb-6">
              A Cleaner Home,{" "}
              <span className="text-[var(--gold)]">A Clearer Mind</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--charcoal-light)] mb-8 leading-relaxed">
              Premium cleaning services for vacation rentals, homes, and businesses.
              Trusted by property managers and homeowners throughout Portland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 rounded-full text-center font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white text-[var(--charcoal)] px-8 py-4 rounded-full text-center font-medium transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[var(--charcoal)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-semibold text-[var(--gold)] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--charcoal)] mb-4">
              Our Services
            </h2>
            <p className="text-[var(--charcoal-light)] max-w-2xl mx-auto">
              From vacation rental turnovers to regular housekeeping, we deliver exceptional results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[var(--gold)]/10"
              >
                <div className="text-[var(--gold)] mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-[var(--charcoal)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--charcoal-light)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-[var(--gold)] hover:text-[var(--gold-dark)] font-medium transition-colors inline-flex items-center gap-2"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[var(--cream-dark)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--charcoal)] mb-6">
                Why Property Managers Trust Us
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Same-Day Availability", desc: "Last-minute booking? We've got you covered with flexible scheduling." },
                  { title: "Consistent Quality", desc: "Every clean follows our detailed checklist for reliable, predictable results." },
                  { title: "Insured & Bonded", desc: "Full coverage for your peace of mind. Professional and trustworthy." },
                  { title: "Eco-Friendly Options", desc: "Green cleaning products available for health-conscious clients." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--gold)] flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--charcoal)] mb-1">{item.title}</h3>
                      <p className="text-[var(--charcoal-light)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--gold)]/10">
              <div className="text-center">
                <div className="inline-flex items-center gap-1 text-[var(--gold)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg font-serif text-[var(--charcoal)] mb-4 italic">
                  &ldquo;It was so clean that even my wife, who never goes barefoot in Airbnbs, felt comfortable walking around barefoot!&rdquo;
                </blockquote>
                <cite className="text-sm text-[var(--charcoal-light)] not-italic">
                  — Nate & Sutton, Georgia
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--charcoal)] mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--gold)]/10"
              >
                <div className="flex gap-1 text-[var(--gold)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[var(--charcoal)] mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-[var(--charcoal)]">{testimonial.author}</div>
                  <div className="text-sm text-[var(--charcoal-light)]">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="text-[var(--gold)] hover:text-[var(--gold-dark)] font-medium transition-colors inline-flex items-center gap-2"
            >
              Read More Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--charcoal)] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. We&apos;ll assess your needs and provide transparent pricing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
