import Link from "next/link";

const testimonials = [
  {
    quote: "5/5 - the best Airbnb we have ever stayed in. The house is pristine, well maintained, clean, and the amenities are top-tier! Easily the best house and experience we have ever booked in 10+ years!",
    author: "Shawn",
    title: "Columbus, Ohio",
    rating: 5,
  },
  {
    quote: "The home was spotless, beautifully decorated, and felt so welcoming the moment we walked in. Every little detail was thoughtfully considered. As Airbnb hosts ourselves, we know how much work goes into such detail and our standards are high.",
    author: "Robert",
    title: "Grand Rapids, Michigan",
    rating: 5,
  },
  {
    quote: "This is EXACTLY how an Airbnb should be run. Spotlessly cleaned home, absolutely EVERY household item you can think of. I would have given it 6 stars if that was an option!",
    author: "Drew",
    title: "Crystal Lake, Illinois",
    rating: 5,
  },
  {
    quote: "The house was extremely clean and comfortable. We feel refreshed after this relaxing fall break! More than enough room for our family of five.",
    author: "Jill",
    title: "Chicago, Illinois",
    rating: 5,
  },
  {
    quote: "This house is beautiful and is exactly as the pictures show. It was stocked with everything you could need for your stay and was squeaky clean. It's hard to find a house this nice that allows dogs.",
    author: "Melissa",
    title: "Vacation Rental Guest",
    rating: 5,
  },
  {
    quote: "The linens are plush, the beds are super comfortable and there is no skimping on the decor or quality. We even had robes and slippers provided, which added to the already over-the-top coziness. Don't hesitate to book!",
    author: "Sher",
    title: "Grand Rapids, Michigan",
    rating: 5,
  },
  {
    quote: "From the moment we walked in, we could tell this house was built with such incredible quality—it felt like it had never been stayed in before. It was so clean that even my wife, who never goes barefoot in Airbnbs, felt comfortable walking around barefoot!",
    author: "Nate & Sutton",
    title: "Georgia",
    rating: 5,
  },
  {
    quote: "Beautiful inside and out. Very clean. Kitchen was fully stocked with all supplies we needed. Beds were comfortable and common spaces were very cozy. Highly recommended stay.",
    author: "Christian",
    title: "Grand Haven, Michigan",
    rating: 5,
  },
  {
    quote: "We absolutely LOVED this home! I've stayed at many different Airbnb locations throughout the US, and have to say this home by far was THE BEST! Total peace on Earth, just what I needed!",
    author: "Chrissy",
    title: "Chicago, Illinois",
    rating: 5,
  },
  {
    quote: "I'd describe the house as luxurious, pristine with the coziness of home! The house amenities allowed us all to hang out but have our own space to relax too. Highly recommend!",
    author: "Bethany",
    title: "Lafayette, Indiana",
    rating: 5,
  },
  {
    quote: "This was the perfect house for a relaxing vacation. From top to bottom, it is spotless and tasteful, with thoughtful details that felt luxurious and welcoming. We would stay here again in a heartbeat!",
    author: "Olivia",
    title: "Ann Arbor, Michigan",
    rating: 5,
  },
  {
    quote: "This place was amazing from the moment we arrived. The kitchen was quite the experience - every tool, cooking item, spice was already there and in full supply. A hidden gem and worth more than 5 stars!",
    author: "Mike",
    title: "Oak Park, Illinois",
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
