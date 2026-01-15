"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We proudly serve the Lake Michigan vacation rental community including Saugatuck, Douglas, Fennville, Holland, South Haven, and Grand Haven. If you're unsure whether we cover your property location, please contact us.",
  },
  {
    question: "How do I book a cleaning?",
    answer: "You can book a cleaning by filling out our contact form, calling us directly, or sending an email. We'll get back to you within 24 hours to confirm your appointment and provide a quote.",
  },
  {
    question: "What's included in a standard cleaning?",
    answer: "Our standard cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning bathrooms and kitchens, making beds, and general tidying. We can customize the service based on your specific needs.",
  },
  {
    question: "Do you bring your own supplies?",
    answer: "Yes, we bring all necessary cleaning supplies and equipment. If you prefer we use specific products (such as eco-friendly options), just let us know and we can accommodate.",
  },
  {
    question: "Are you insured and bonded?",
    answer: "Absolutely. We carry full liability insurance and are bonded for your peace of mind. All our team members are background-checked and professionally trained.",
  },
  {
    question: "How much does cleaning cost?",
    answer: "Pricing varies based on the size of your space, type of service, and frequency. We provide free, no-obligation quotes tailored to your specific needs. Contact us for a custom quote.",
  },
  {
    question: "What if I need to reschedule or cancel?",
    answer: "We understand plans change. We ask for at least 24 hours notice for cancellations or rescheduling to avoid a cancellation fee. Contact us as soon as possible and we'll work with you.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you don't need to be present. Many of our clients provide a key or access code. We ensure the security of your home and can send photos when the job is complete.",
  },
  {
    question: "What if something is damaged during cleaning?",
    answer: "While we take every precaution to protect your belongings, accidents can happen. We're fully insured and will address any concerns immediately. Your satisfaction is our priority.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes, we offer same-day service for vacation rental turnovers and emergency cleaning needs when our schedule permits. Contact us as early as possible and we'll do our best to accommodate you.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-[var(--charcoal)] pr-8">{question}</span>
        <svg
          className={`w-5 h-5 text-[var(--gold)] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 text-[var(--charcoal-light)] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-[var(--cream)]">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--charcoal)] mb-6">
              Frequently Asked <span className="text-[var(--gold)]">Questions</span>
            </h1>
            <p className="text-lg text-[var(--charcoal-light)] leading-relaxed">
              Have questions? We have answers. If you don&apos;t see what you&apos;re looking for, feel free to contact us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--gold)]/10">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-[var(--cream-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--charcoal)] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-[var(--charcoal-light)] mb-8">
            We&apos;re happy to help. Reach out and we&apos;ll get back to you as soon as possible.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8">
            Book your first cleaning today and see the difference for yourself.
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
