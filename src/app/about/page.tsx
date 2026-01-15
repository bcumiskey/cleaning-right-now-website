import Link from "next/link";

const values = [
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards. Every space we clean reflects our commitment to exceptional quality.",
  },
  {
    title: "Reliability",
    description: "When we say we'll be there, we're there. Our clients count on us, and we never let them down.",
  },
  {
    title: "Integrity",
    description: "Honesty and transparency in everything we do. From pricing to service, you can trust us completely.",
  },
  {
    title: "Care",
    description: "We treat every home like it's our own. Your space and belongings are handled with the utmost respect.",
  },
];

const team = [
  { name: "Alex Cumiskey", role: "Founder & Lead Specialist" },
  { name: "Team Member", role: "Senior Cleaning Specialist" },
  { name: "Team Member", role: "Cleaning Specialist" },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--cream)]">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--charcoal)] mb-6">
              About <span className="text-[var(--gold)]">Cleaning Right Now</span>
            </h1>
            <p className="text-lg text-[var(--charcoal-light)] leading-relaxed">
              We&apos;re more than just a cleaning service. We&apos;re your partners in creating spaces that inspire comfort, productivity, and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[var(--cream-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-[var(--charcoal)] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[var(--charcoal-light)]">
                <p>
                  Cleaning Right Now was founded with a simple mission: to provide exceptional cleaning services that make a real difference in people&apos;s lives.
                </p>
                <p>
                  What started as a small operation has grown into a trusted name in the Portland area, serving hundreds of homes and vacation rentals. Our growth is built entirely on word-of-mouth referrals from satisfied clients who experience the difference our attention to detail makes.
                </p>
                <p>
                  Today, we continue to uphold the same values that started our journey: treating every space with respect, delivering consistent quality, and building lasting relationships with our clients.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--gold)]/10">
              <div className="text-center">
                <div className="text-5xl font-serif font-semibold text-[var(--gold)] mb-2">10+</div>
                <div className="text-[var(--charcoal-light)] mb-6">Years of Excellence</div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-serif font-semibold text-[var(--charcoal)]">500+</div>
                    <div className="text-sm text-[var(--charcoal-light)]">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-semibold text-[var(--charcoal)]">5.0</div>
                    <div className="text-sm text-[var(--charcoal-light)]">Star Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--charcoal)] mb-4">
              Our Values
            </h2>
            <p className="text-[var(--charcoal-light)] max-w-2xl mx-auto">
              These principles guide every interaction, every clean, and every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[var(--gold)] rounded-full" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[var(--charcoal)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--charcoal-light)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[var(--cream-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--charcoal)] mb-4">
              Meet Our Team
            </h2>
            <p className="text-[var(--charcoal-light)] max-w-2xl mx-auto">
              Dedicated professionals who take pride in making your space shine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[var(--gold)]/10">
                <div className="w-24 h-24 bg-[var(--cream-dark)] rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[var(--charcoal)]">{member.name}</h3>
                <p className="text-sm text-[var(--charcoal-light)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-400 mb-8">
            Let us show you what professional cleaning really means.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
