import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Contact Fix and Glaze | Free Quotes | Glass & Glazing Services",
  description:
    "Contact Fix and Glaze for a free, no-obligation quote on glass repair, window installation, door fitting, and glazing services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-16">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Fix and Glaze
          </h1>
          <p className="text-xl text-gray-300">
            We'd love to hear from you. Get a free quote today.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="text-cyan-600" size={24} />
                  <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                </div>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-cyan-600 font-bold text-lg hover:text-red-600 transition-colors"
                >
                  {BRAND.phone}
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  Mon-Sat: 7:00 AM – 6:00 PM
                  <br />
                  Sun: By appointment
                </p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-cyan-600" size={24} />
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-cyan-600 font-bold hover:text-red-600 transition-colors break-all"
                >
                  {BRAND.email}
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  We aim to respond within 24 hours
                </p>
              </div>

              {/* Service Area */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-cyan-600" size={24} />
                  <h3 className="text-lg font-bold text-gray-900">Service Area</h3>
                </div>
                <p className="text-gray-700 font-semibold">{BRAND.serviceArea}</p>
                <p className="text-gray-600 text-sm mt-2">
                  Not sure if we cover your area? Call us and we'll confirm right away.
                </p>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-cyan-600" size={24} />
                  <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>
                    <strong>Mon-Fri:</strong> {BRAND.hours.weekday}
                  </p>
                  <p>
                    <strong>Sat:</strong> {BRAND.hours.saturday}
                  </p>
                  <p>
                    <strong>Sun:</strong> {BRAND.hours.sunday}
                  </p>
                </div>
              </div>

              {/* Emergency Note */}
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <p className="text-red-700 font-semibold">
                  Emergency Glass Repairs?
                </p>
                <p className="text-red-600 text-sm mt-2">
                  We respond promptly to urgent situations. Call us immediately for emergency
                  glass damage.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How do I get a quote?",
                a: "Simply call us on 0432 800 802 or fill out the contact form above. We'll gather the details of your project and arrange a time to provide a free, no-obligation measure and quote.",
              },
              {
                q: "Do you offer emergency glass repair?",
                a: "Yes. If you have urgent glass damage — from a break-in, accident, or storm — contact us as soon as possible. We'll do our best to attend promptly and make your property safe and secure.",
              },
              {
                q: "How long does a glass replacement take?",
                a: "Simple glass replacements can often be completed on the same day or within 24–48 hours, subject to glass availability. More complex installations are discussed and scheduled at the time of quoting.",
              },
              {
                q: "Do you work on both residential and commercial properties?",
                a: "Absolutely. Fix and Glaze works across residential homes, rental properties, apartments, retail shops, offices, and commercial buildings of all types.",
              },
              {
                q: "What frame materials do you work with?",
                a: "We work with all major window and door frame materials — aluminium, uPVC, and timber — across a full range of window and door styles.",
              },
              {
                q: "Are your glaziers licensed and insured?",
                a: "Yes. Fix and Glaze carries appropriate insurance and our work meets relevant building codes and glazing standards. We're happy to provide documentation on request.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
