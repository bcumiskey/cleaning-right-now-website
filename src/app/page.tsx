import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "500+", label: "5-Star Reviews" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Satisfaction" },
];

const services = [
  {
    title: "Vacation Rental Turnovers",
    description: "Same-day turnovers with restocking, staging, and that barefoot-clean standard your guests will rave about.",
    image: "/images/vacation-rental.jpg",
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Luxury Deep Cleaning",
    description: "Top-to-bottom refresh that makes your property feel brand new. Every surface, every detail.",
    image: "/images/deep-clean.jpg",
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Pet-Friendly Expertise",
    description: "Spotless results even with furry guests. We know how to handle pet-friendly properties.",
    image: "/images/pet-friendly.jpg",
    color: "from-sky-400 to-blue-500",
  },
];

const details = [
  "Fully stocked kitchens - every spice, tool, and item",
  "Plush linens and Turkish towels",
  "Robes and slippers arranged",
  "S'mores kits and coffee syrups restocked",
  "Beach gear organized and ready",
  "Pet bowls and supplies refreshed",
];

export default function Home() {
  return (
    <div className="bg-[var(--cream)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Bright gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-sky-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--gold)]/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm text-[var(--charcoal-light)] mb-6 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Serving Lake Michigan&apos;s Premier Vacation Rentals
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[var(--charcoal)] leading-tight mb-6">
                The Barefoot
                <span className="block text-[var(--gold)]">Standard</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--charcoal-light)] mb-4 leading-relaxed">
                So clean your guests walk barefoot without thinking twice.
              </p>
              <p className="text-[var(--charcoal-light)] mb-8">
                Premium vacation rental turnovers in Saugatuck, Douglas, Fennville, and the Lake Michigan shoreline. Trusted by property managers who demand 5-star reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 rounded-full text-center font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
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

            {/* Hero Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-amber-200 to-amber-300 shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-amber-600">
                      <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-200 to-sky-300 shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-sky-600">
                      <svg className="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-300 shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-emerald-600">
                      <svg className="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-rose-200 to-rose-300 shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-rose-600">
                      <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--charcoal)]">5.0 Rating</div>
                    <div className="text-sm text-[var(--charcoal-light)]">500+ Reviews</div>
                  </div>
                </div>
              </div>
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

      {/* Featured Quote */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-white to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1 text-[var(--gold)] mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif text-[var(--charcoal)] mb-6 italic leading-relaxed">
            &ldquo;It was so clean that even my wife, who never goes barefoot in Airbnbs, felt comfortable walking around barefoot!&rdquo;
          </blockquote>
          <cite className="text-[var(--charcoal-light)] not-italic">
            — Nate & Sutton, Georgia
          </cite>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--charcoal)] mb-4">
              What We Do Best
            </h2>
            <p className="text-[var(--charcoal-light)] max-w-2xl mx-auto">
              Specialized in luxury vacation rentals. Every turnover is a chance to earn another 5-star review.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Colorful top banner */}
                <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-semibold text-[var(--charcoal)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--charcoal-light)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
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

      {/* The Details Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--charcoal)] mb-6">
                It&apos;s the Details That<br />
                <span className="text-[var(--gold)]">Get You 5 Stars</span>
              </h2>
              <p className="text-[var(--charcoal-light)] mb-8">
                We don&apos;t just clean—we prepare your property for a luxury experience. Every turnover includes the touches that make guests say &ldquo;wow.&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {details.map((detail) => (
                  <div key={detail} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--charcoal-light)]">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bright image placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-100 via-amber-200 to-orange-200 shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-amber-600/50">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Photo Coming Soon</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-200 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--charcoal)] mb-4">
              What Guests Are Saying
            </h2>
            <p className="text-[var(--charcoal-light)]">
              Real reviews from guests who stayed at properties we service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "5/5 - the best Airbnb we have ever stayed in. The house is pristine, well maintained, clean, and the amenities are top-tier!",
                author: "Shawn",
                location: "Columbus, Ohio",
                color: "from-amber-50 to-orange-50",
              },
              {
                quote: "Spotlessly cleaned home, absolutely EVERY household item you can think of. I would have given it 6 stars if that was an option!",
                author: "Drew",
                location: "Crystal Lake, Illinois",
                color: "from-sky-50 to-blue-50",
              },
              {
                quote: "This house is beautiful and squeaky clean. It's hard to find a house this nice that allows dogs.",
                author: "Melissa",
                location: "Vacation Rental Guest",
                color: "from-emerald-50 to-teal-50",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${testimonial.color} rounded-2xl p-8 border border-white shadow-sm`}
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
                  <div className="text-sm text-[var(--charcoal-light)]">{testimonial.location}</div>
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

      {/* Location Section */}
      <section className="py-16 bg-gradient-to-r from-sky-100 via-sky-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--charcoal)] mb-4">
              Proudly Serving Lake Michigan&apos;s Vacation Rental Community
            </h2>
            <p className="text-[var(--charcoal-light)] max-w-2xl mx-auto mb-8">
              Saugatuck • Douglas • Fennville • Holland • South Haven • Grand Haven
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-[var(--charcoal-light)]">
              <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Western Michigan
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Ready for the Barefoot Standard?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the property managers who trust us for consistent 5-star turnovers. Get your free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
