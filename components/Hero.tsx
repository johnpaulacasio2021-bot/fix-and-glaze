import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="gradient-cyan-navy relative overflow-hidden py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full -mr-36 -mt-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-50 mb-8 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="btn-primary text-lg px-8 py-4 text-center"
              >
                {primaryCTA.text}
              </Link>
            )}
            {secondaryCTA && (
              <a
                href={`tel:0432800802`}
                className="btn-outline text-lg px-8 py-4 text-center"
              >
                {secondaryCTA.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
