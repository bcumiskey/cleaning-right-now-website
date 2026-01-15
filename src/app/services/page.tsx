import Link from "next/link";

const services = [
  {
    id: "vacation-rentals",
    title: "Vacation Rental Turnovers",
    description: "Professional cleaning services designed specifically for short-term rental properties. We understand the tight turnaround times and high standards that Airbnb, VRBO, and vacation rental hosts need.",
    features: [
      "Same-day turnovers available",
      "Linen change and bed making",
      "Restocking essentials",
      "Guest-ready checklist",
      "Flexible scheduling",
      "Property photos for hosts",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description: "A comprehensive, top-to-bottom clean that reaches every corner. Perfect for seasonal refreshes, before special events, or as a starting point for new clients.",
    features: [
      "Inside appliances",
      "Behind and under furniture",
      "Baseboards and crown molding",
      "Light fixtures and ceiling fans",
      "Window sills and tracks",
      "Cabinet interiors",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: "regular",
    title: "Regular Housekeeping",
    description: "Consistent, scheduled cleaning to keep your home in perfect condition. Choose weekly, bi-weekly, or monthly service tailored to your lifestyle.",
    features: [
      "Customizable schedule",
      "Same cleaner each visit",
      "Detailed cleaning checklist",
      "Eco-friendly products available",
      "Priority scheduling",
      "No long-term contracts",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "move",
    title: "Move In/Out Cleaning",
    description: "Make your transition seamless with our thorough move-in or move-out cleaning service. Leave your old place spotless or start fresh in your new home.",
    features: [
      "Empty home deep clean",
      "Inside all cabinets and closets",
      "Appliance deep clean",
      "Wall spot cleaning",
      "Window cleaning included",
      "Deposit-back guarantee",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[var(--cream)]">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--charcoal)] mb-6">
              Our <span className="text-[var(--gold)]">Services</span>
            </h1>
            <p className="text-lg text-[var(--charcoal-light)] leading-relaxed">
              From quick turnovers to deep cleans, we offer comprehensive cleaning solutions tailored to your needs. Every service comes with our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[var(--gold)] mb-4">{service.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--charcoal)] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--charcoal-light)] mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[var(--charcoal-light)]">
                        <svg className="w-4 h-4 text-[var(--gold)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-[var(--cream-dark)] rounded-2xl aspect-video ${index % 2 === 1 ? "lg:order-1" : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-[var(--cream-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--charcoal)] mb-4">
            Transparent Pricing
          </h2>
          <p className="text-[var(--charcoal-light)] mb-8">
            Every home is unique, so we provide custom quotes based on your specific needs. No hidden fees, no surprises—just honest, upfront pricing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us and we&apos;ll help you find the perfect cleaning solution for your situation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
