import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Service, Testimonial } from "@/lib/types";
import { BRAND } from "@/lib/constants";
import Link from "next/link";
import { readFileSync } from "fs";
import { join } from "path";

function getServices(): Service[] {
  try {
    const filePath = join(process.cwd(), "public/data/services.json");
    const data = JSON.parse(readFileSync(filePath, "utf-8"));
    return data.services || [];
  } catch (error) {
    console.error("Failed to load services:", error);
    return [];
  }
}

function getTestimonials(): Testimonial[] {
  try {
    const filePath = join(process.cwd(), "public/data/testimonials.json");
    const data = JSON.parse(readFileSync(filePath, "utf-8"));
    return data.testimonials || [];
  } catch (error) {
    console.error("Failed to load testimonials:", error);
    return [];
  }
}

export default function Home() {
  const services = getServices();
  const testimonials = getTestimonials();
  const featuredServices = services.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Professional Glass Repair & Installation — Done Right, Every Time"
        subtitle="Fix and Glaze is your trusted specialist for residential and commercial glass repair, window installation, door fitting, and glazing. Whether it's a broken window, a new shower screen, or a full commercial glass fit-out — we've got you covered."
        primaryCTA={{
          text: "Get Your Free Quote Today",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "Call Us Now: 0432 800 802",
          href: "tel:0432800802",
        }}
      />

      {/* Trust Bar */}
      <section className="bg-gray-100 border-b border-gray-200 py-6">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                ✔ Licensed & Insured Glazing Specialists
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                ✔ UPVC · Aluminium · Timber Frames
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                ✔ Residential & Commercial Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide">
              WHAT WE DO
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Complete Glass & Glazing Services for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From emergency glass repairs to full residential renovations and commercial fit-outs,
              Fix and Glaze handles every job with precision and care.
            </p>
          </div>

          {/* Service Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={`/images/services/${service.id}.svg`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block text-cyan-600 font-bold text-lg hover:text-red-600 transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Homeowners and Businesses Trust Fix and Glaze
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with genuine care for our customers. When you call
              Fix and Glaze, you're getting a skilled glazier who shows up on time, does the job
              properly, and leaves your property cleaner than they found it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description:
                  "Our glaziers are trained professionals with hands-on experience in all types of glass and frame systems.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No surprise fees. We provide honest, itemised quotes before we start any work.",
              },
              {
                title: "All Materials, One Contractor",
                description:
                  "Whether timber, aluminium, or uPVC — we work with all frame types and glass specifications.",
              },
              {
                title: "Fast Turnaround",
                description:
                  "We respect your time and move efficiently to complete your job on schedule.",
              },
              {
                title: "Free, No-Obligation Quotes",
                description:
                  "Call us and we'll assess the job and provide a free, no-pressure quote.",
              },
              {
                title: "Professional Guarantee",
                description:
                  "Your satisfaction is our priority. We stand behind every job we do.",
              },
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Are Saying
              </h2>
              <p className="text-xl text-gray-600">
                We let our work — and our customers — speak for themselves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white border-l-4 border-cyan-600 p-6 rounded-lg shadow-sm"
                >
                  <div className="mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  {testimonial.location && (
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="gradient-cyan-navy py-16 md:py-24">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Crystal Clear Results?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
            Whether you need a quick repair or a complete installation, Fix and Glaze is ready to
            help. Contact us today for a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 text-center">
              Get a Free Quote
            </Link>
            <a
              href="tel:0432800802"
              className="btn-outline text-lg px-8 py-4 text-center text-white border-white hover:bg-white hover:text-cyan-600"
            >
              Call 0432 800 802
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
