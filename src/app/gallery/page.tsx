import Link from "next/link";

const galleryItems = [
  { category: "Vacation Rental", description: "Beach house turnover" },
  { category: "Deep Clean", description: "Kitchen transformation" },
  { category: "Vacation Rental", description: "Downtown condo" },
  { category: "Move Out", description: "Apartment deep clean" },
  { category: "Regular Service", description: "Weekly maintenance" },
  { category: "Deep Clean", description: "Bathroom restoration" },
  { category: "Vacation Rental", description: "Mountain cabin" },
  { category: "Move In", description: "New home preparation" },
];

export default function GalleryPage() {
  return (
    <div className="bg-[var(--cream)]">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--charcoal)] mb-6">
              Our <span className="text-[var(--gold)]">Work</span>
            </h1>
            <p className="text-lg text-[var(--charcoal-light)] leading-relaxed">
              See the transformation for yourself. Browse our gallery of before and after photos showcasing the quality of our work.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative bg-[var(--cream-dark)] rounded-2xl aspect-square overflow-hidden cursor-pointer"
              >
                {/* Placeholder for images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="text-xs uppercase tracking-wider text-[var(--gold-light)]">
                    {item.category}
                  </span>
                  <p className="font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-[var(--cream-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--charcoal-light)] italic">
            Photos coming soon. Contact us to see examples of our work for specific service types.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-gray-400 mb-8">
            Let us add your home to our gallery of success stories.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Book Your Clean
          </Link>
        </div>
      </section>
    </div>
  );
}
