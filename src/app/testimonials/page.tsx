import Link from "next/link";

const testimonials = [
  {
    quote: "They transformed my Airbnb turnover process. My guests constantly compliment how spotless the place is, and I've seen a noticeable improvement in my reviews since switching to Cleaning Right Now.",
    author: "Sarah M.",
    title: "Vacation Rental Owner",
    rating: 5,
  },
  {
    quote: "Professional, reliable, and thorough. I've been using them for over two years for my weekly cleaning and couldn't be happier. They treat my home like it's their own.",
    author: "Michael R.",
    title: "Homeowner",
    rating: 5,
  },
  {
    quote: "The deep clean they did before we moved in was incredible. Every surface was spotless, and they even cleaned inside all the cabinets and appliances. Highly recommend!",
    author: "Jennifer K.",
    title: "Property Manager",
    rating: 5,
  },
  {
    quote: "I manage 12 vacation rentals and Cleaning Right Now handles all of them. Their consistency is unmatched—every property looks perfect for every guest.",
    author: "David L.",
    title: "Property Manager",
    rating: 5,
  },
  {
    quote: "After trying several cleaning services, we finally found one that meets our standards. The attention to detail is remarkable, and the team is always friendly and professional.",
    author: "Amanda T.",
    title: "Homeowner",
    rating: 5,
  },
  {
    quote: "They helped me get my full deposit back when I moved out of my apartment. The landlord was impressed with how clean everything was. Worth every penny!",
    author: "Chris B.",
    title: "Renter",
    rating: 5,
  },
  {
    quote: "We use them for our office space and the difference is night and day. Coming into a clean office every morning really improves the team's morale.",
    author: "Patricia H.",
    title: "Business Owner",
    rating: 5,
  },
  {
    quote: "Same-day turnovers for my rental property? They make it happen every time. I don't know how they do it, but they're lifesavers during busy season.",
    author: "Robert W.",
    title: "Airbnb Superhost",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-[var(--gold)]">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="bg-[var(--cream)]">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--charcoal)] mb-6">
              What Our <span className="text-[var(--gold)]">Clients Say</span>
            </h1>
            <p className="text-lg text-[var(--charcoal-light)] leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what homeowners, property managers, and business owners have to say about working with us.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--gold)]/10 inline-flex items-center gap-6">
            <div className="text-5xl font-serif font-semibold text-[var(--gold)]">5.0</div>
            <div>
              <div className="flex gap-1 text-[var(--gold)] mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[var(--charcoal-light)]">Based on 100+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--gold)]/10"
              >
                <StarRating rating={testimonial.rating} />
                <blockquote className="text-[var(--charcoal)] my-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-semibold text-[var(--charcoal)]">{testimonial.author}</div>
                  <div className="text-sm text-[var(--charcoal-light)]">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Join Our Happy Clients
          </h2>
          <p className="text-gray-400 mb-8">
            Experience the difference professional cleaning makes. Get your free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
