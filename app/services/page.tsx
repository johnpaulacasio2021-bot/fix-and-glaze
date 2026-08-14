import Link from "next/link";
import { readFileSync } from "fs";
import { join } from "path";
import { Service } from "@/lib/types";

export const metadata = {
  title: "Our Services | Glass Repair, Window & Door Installation | Fix and Glaze",
  description:
    "Explore Fix and Glaze's full range of glazing services — window installation, glass repair, door fitting, shower screens, and commercial glazing.",
};

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

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-cyan to-brand-navy py-12 md:py-16">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expert Glass & Glazing Services
          </h1>
          <p className="text-xl text-cyan-50">
            Residential & Commercial Solutions — Residential & Commercial
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="border-b border-gray-200 pb-12 last:border-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Content */}
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.fullDescription}
                    </p>

                    {service.materials && service.materials.length > 0 && (
                      <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-2">Materials:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.materials.map((material) => (
                            <span
                              key={material}
                              className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.glassTypes && service.glassTypes.length > 0 && (
                      <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-2">Glass Types:</h3>
                        <ul className="text-gray-600 space-y-1">
                          {service.glassTypes.map((type) => (
                            <li key={type} className="flex gap-2">
                              <span className="text-cyan-600">•</span>
                              <span>{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.applications && service.applications.length > 0 && (
                      <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-2">Applications:</h3>
                        <ul className="text-gray-600 space-y-1">
                          {service.applications.map((app) => (
                            <li key={app} className="flex gap-2">
                              <span className="text-cyan-600">•</span>
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="text-gray-600">
                      <strong>Ideal for:</strong> {service.idealFor}
                    </p>
                  </div>

                  {/* Sidebar */}
                  <div>
                    <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-lg sticky top-24">
                      <h3 className="font-bold text-gray-900 mb-3">What's Included</h3>
                      <ul className="space-y-2 text-sm text-gray-700 mb-6">
                        {service.whatsIncluded.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-red-600 font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="btn-primary block text-center text-sm w-full"
                      >
                        Get Free Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Our friendly team is happy to help you work out exactly what's required for your
            project. Contact us for honest advice and a transparent quote.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Call 0432 800 802 — Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
