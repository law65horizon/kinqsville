import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero — Kinqsville Restaurant & Lounge"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          // src={heroImg}
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85"
          alt="Elegant restaurant interior with warm ambient lighting, set tables and premium decor"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        {/* Multi-layer overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/20" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-terracotta to-transparent opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-site mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow label */}
          <span className="inline-block font-body text-label-caps uppercase tracking-widest text-terracotta mb-6 animate-fade-up">
            Asaba&apos;s Finest Dining
          </span>

          {/* Headline */}
          <h1 className="font-display font-bold text-display-xl text-white mb-6 animate-fade-up animate-delay-100">
            Good Food.{" "}
            <em className="not-italic text-gold">Exotic</em>{" "}
            Winery.{" "}
            <span className="block">Lovely Ambience.</span>
          </h1>

          {/* Subtext */}
          <p className="text-body-lg text-white/80 mb-10 max-w-xl animate-fade-up animate-delay-200">
            An unparalleled culinary journey where Nigerian heritage meets
            contemporary luxury — in the heart of Asaba, Delta State.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
            <a
              href={siteConfig.whatsapp.url()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-terracotta text-white px-8 py-4 font-body text-label-caps uppercase tracking-widest hover:bg-terracotta-light active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Order via WhatsApp
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-8 py-4 font-body text-label-caps uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all duration-200"
            >
              Explore Menu
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="font-body text-label-caps text-white/60 tracking-widest">SCROLL</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
