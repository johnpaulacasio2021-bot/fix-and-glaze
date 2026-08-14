import Link from "next/link";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "About Fix and Glaze | Trusted Glazing Specialists",
  description:
    "Learn about Fix and Glaze — a dedicated glazing contractor offering professional window, door, and glass installation and repair.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-cyan py-12 md:py-16">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Fix and Glaze
          </h1>
          <p className="text-xl text-cyan-50">
            Expert Glazing, Exceptional Service
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built on a Passion for Precision
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {BRAND.name} was founded with one straightforward goal: to provide homeowners and
              businesses with a glazing service they could genuinely rely on. Too often, clients
              tell us about past experiences with tradespeople who showed up late, quoted one
              price and charged another, or left a job half-finished. We set out to be different.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              From our very first job, we committed to three non-negotiables: showing up when we
              said we would, doing the work to the highest standard, and charging a fair price
              that we quote upfront. That commitment hasn't changed — and it's why our customers
              keep calling us back and recommending us to their friends, family, and colleagues.
            </p>
            <p className="text-lg text-gray-600">
              Today, {BRAND.name} serves both residential and commercial clients, handling
              everything from emergency glass repairs to complete window and door installations.
              We work with all major frame materials — UPVC, aluminium, and timber — and all
              glass types, giving our customers a single, trusted point of contact for every
              glazing need.
            </p>
          </div>

          <hr className="my-12" />

          {/* Mission */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Our mission is simple: to deliver professional, reliable glass and glazing services
              that enhance the safety, functionality, and beauty of our customers' properties —
              while making the entire experience as easy and stress-free as possible.
            </p>
            <p className="text-lg text-gray-600">
              We believe every customer deserves a glazier who is honest about what's needed,
              skilled enough to do it well, and professional enough to leave the place in perfect
              order when the job is done.
            </p>
          </div>

          <hr className="my-12" />

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              What We Stand For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Quality First",
                  description:
                    "We never cut corners. From the glass we source to the way we seal and finish every installation, quality is at the heart of every job.",
                },
                {
                  title: "Honest & Transparent",
                  description:
                    "We tell you what we find, what we recommend, and what it will cost — before we start. No hidden fees, no surprises.",
                },
                {
                  title: "Customer-Focused",
                  description:
                    "Your satisfaction is our goal — and our measure of success. We listen, we adapt, and we go the extra mile.",
                },
                {
                  title: "Reliable & Punctual",
                  description:
                    "Your time is valuable. We honour our appointments, communicate proactively, and keep you informed every step.",
                },
                {
                  title: "Safe & Compliant",
                  description:
                    "All installations meet relevant safety codes. We take the wellbeing of your household or workforce seriously.",
                },
                {
                  title: "Passionate Professionals",
                  description:
                    "We genuinely care about our work and our customers. It shows in everything we do.",
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cyan-50 section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The {BRAND.name} Difference
          </h2>

          <ul className="space-y-4">
            {[
              "Experienced glaziers with hands-on expertise across residential and commercial projects",
              "Specialists in UPVC, aluminium, and timber window and door systems",
              "All glass types — float, toughened, laminated, double-glazed, frosted, and more",
              "Free, itemised quotes with no obligation",
              "Clean, tidy installations — we clean up after every job",
              "Prompt response for urgent and emergency repairs",
              "Honest advice — we'll tell you what you actually need, not what's most expensive",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Service Area
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {BRAND.name} proudly serves homeowners, property managers, developers, and businesses
            across <strong>{BRAND.serviceArea}</strong>. If you're unsure whether we cover your
            location, give us a call and we'll confirm right away.
          </p>

          <div className="bg-gradient-to-r from-brand-cyan to-brand-navy p-8 rounded-lg text-white">
            <p className="text-lg italic font-semibold mb-4">
              "{BRAND.tagline}"
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-block px-8 py-3"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
