"use client";

import { useState } from "react";
import Image from "next/image";
import { SanityMenuCategory, SanityMenuItem } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { siteConfig } from "@/lib/config";

type Props = {
  categories: SanityMenuCategory[];
};

function MenuItemCard({ item }: { item: SanityMenuItem }) {
  const imageUrl = urlFor(item.image).width(600).height(416).fit("crop").auto("format").url();

  return (
    <article className="group bg-white overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageUrl}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {item.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-terracotta text-white font-body text-[10px] uppercase tracking-widest px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-headline-sm text-charcoal mb-2 leading-snug">
          {item.name}
        </h3>
        <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
          {item.description}
        </p>
        <div className="mt-4 pt-4 border-t border-cream-dim flex items-center justify-between">
          <span className="font-body text-label-caps text-on-surface-variant uppercase tracking-widest">
            Ask for pricing
          </span>
          <a
            href={siteConfig.whatsapp.url(item.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-label-caps uppercase tracking-widest text-terracotta hover:underline transition-all"
            aria-label={`Order ${item.name} via WhatsApp`}
          >
            Order →
          </a>
        </div>
      </div>
    </article>
  );
}

export default function MenuPageClient({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?._id ?? "");
  const currentCategory = categories.find((c) => c._id === activeCategory) ?? categories[0];

  if (!currentCategory) {
    return (
      <div className="bg-cream min-h-screen flex items-center justify-center">
        <p className="font-body text-body-lg text-on-surface-variant">Menu coming soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="sticky top-16 md:top-20 z-40 bg-cream/95 backdrop-blur-sm border-b border-cream-dim shadow-sm">
        <div className="max-w-site mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto scrollbar-none" role="tablist" aria-label="Menu categories">
            {categories.map((cat) => (
              <button
                key={cat._id}
                role="tab"
                aria-selected={activeCategory === cat._id}
                aria-controls={`panel-${cat._id}`}
                onClick={() => setActiveCategory(cat._id)}
                className={`flex-shrink-0 px-6 md:px-10 py-5 font-body text-label-caps uppercase tracking-widest border-b-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-inset ${
                  activeCategory === cat._id
                    ? "border-terracotta text-terracotta"
                    : "border-transparent text-on-surface-variant hover:text-charcoal"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id={`panel-${currentCategory._id}`} role="tabpanel" aria-label={currentCategory.name} className="max-w-site mx-auto px-6 py-14">
        <div className="mb-12">
          <h2 className="font-display font-bold text-headline-md text-charcoal mb-3">{currentCategory.name}</h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-xl">{currentCategory.description}</p>
          <div className="mt-4 w-12 h-0.5 bg-terracotta" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.items.map((item) => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>

      <div className="bg-terracotta py-12 px-6">
        <div className="max-w-site mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-headline-sm text-white mb-2">Ready to Order?</h2>
            <p className="font-body text-body-md text-white/80">Place your order via WhatsApp or call us directly.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.whatsapp.url()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-terracotta px-6 py-3 font-body text-label-caps uppercase tracking-widest hover:bg-cream transition-colors duration-200">
              Order via WhatsApp
            </a>
            {siteConfig.phones.slice(0, 1).map((phone) => (
              <a key={phone.number} href={`tel:+234${phone.number.replace(/^0/, "")}`} className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 font-body text-label-caps uppercase tracking-widest hover:bg-white/10 transition-colors duration-200">
                Call Us
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
