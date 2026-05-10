import Image from "next/image";
import Link from "next/link";
import { getFeaturedItems } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function MenuHighlights() {
  const featuredItems = await getFeaturedItems();

  return (
    <section className="py-section bg-surface-container" aria-label="Menu highlights">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="font-body text-label-caps uppercase tracking-widest text-terracotta mb-3 block">
              Chef&apos;s Specials
            </span>
            <h2 className="font-display font-bold text-headline-lg text-charcoal">
              Signature Flavours
            </h2>
          </div>
          <Link
            href="/menu"
            className="font-body text-label-caps uppercase tracking-widest text-terracotta border-b border-terracotta pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap self-start sm:self-auto"
          >
            View Full Menu →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, i) => (
            <article
              key={item._id}
              className="group bg-white overflow-hidden hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={urlFor(item.image).width(600).height(448).fit("crop").auto("format").url()}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.tags && item.tags.length > 0 && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.slice(0, 1).map((tag) => (
                      <span key={tag} className="bg-terracotta text-white font-body text-[10px] uppercase tracking-widest px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-headline-sm text-charcoal mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-8 py-4 font-body text-label-caps uppercase tracking-widest hover:bg-charcoal hover:text-cream transition-colors duration-200"
          >
            Explore the Full Menu
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
