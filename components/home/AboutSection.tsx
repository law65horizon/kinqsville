import Image from "next/image";

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>
      </svg>
    ),
    label: "Exquisite Cuisine",
    description: "Authentic Nigerian flavours elevated to fine-dining standards.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M8 3v1m8-1v1M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
      </svg>
    ),
    label: "Exotic Winery",
    description: "A curated cellar of Old World and New World wines & spirits.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Lovely Ambience",
    description: "A sanctuary of warmth and elegance in the heart of Asaba.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-section px-6 max-w-site mx-auto" aria-label="About Kinqsville">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image column */}
        <div className="relative">
          {/* Main image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
              alt="Beautifully plated Nigerian cuisine — jollof rice with grilled chicken and plantains in elegant presentation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating accent card */}
          <div className="absolute -bottom-6 -right-6 md:-right-8 bg-terracotta p-6 md:p-8 text-white max-w-[180px] shadow-xl">
            <p className="font-display font-bold text-3xl">320+</p>
            <p className="font-body text-label-caps uppercase tracking-widest text-white/80 mt-1">
              Posts of Culinary Excellence
            </p>
          </div>

          {/* Gold accent border */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold opacity-60" aria-hidden="true" />
        </div>

        {/* Text column */}
        <div>
          <span className="font-body text-label-caps uppercase tracking-widest text-terracotta mb-4 block">
            Our Story
          </span>
          <h2 className="font-display font-bold text-headline-lg text-charcoal mb-6">
            Where Nigerian Heritage Meets Contemporary Luxury
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
            At Kinqsville, dining is an art form. Our chefs meticulously craft
            every dish to celebrate the richness of Nigerian culinary heritage —
            bold spices, slow-cooked broths, and fresh local ingredients elevated
            to their fullest expression.
          </p>
          <p className="text-body-md text-on-surface-variant mb-10 leading-relaxed">
            Paired with our exotic winery and the warm, inviting ambience of our
            lounge, Kinqsville is more than a meal. It is an experience — designed
            for those who appreciate the finer things in Delta State&apos;s most
            vibrant city.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="border-t-2 border-cream-dim pt-4">
                <div className="text-terracotta mb-3">{p.icon}</div>
                <p className="font-body font-semibold text-body-sm uppercase tracking-wider text-charcoal mb-1">
                  {p.label}
                </p>
                <p className="font-body text-body-sm text-on-surface-variant">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
