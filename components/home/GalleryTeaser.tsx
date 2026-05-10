import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    alt: "Perfectly grilled Nigerian suya with peppers and onions",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    alt: "Slow-cooked Nigerian stew with assorted meat pieces",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    alt: "Traditional pounded yam with egusi soup in elegant setting",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
    alt: "Premium red wine pour in crystal glass at Kinqsville lounge",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80",
    alt: "Handcrafted cocktails with fresh garnish at the bar",
    className: "",
  },
];

export default function GalleryTeaser() {
  return (
    <section className="py-section px-6 max-w-site mx-auto" aria-label="Food gallery">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="font-body text-label-caps uppercase tracking-widest text-terracotta mb-3 block">
            The Experience
          </span>
          <h2 className="font-display font-bold text-headline-lg text-charcoal">
            Captured in Every Plate
          </h2>
        </div>
        <a
          href="https://www.instagram.com/kinqsville_restaurant"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-label-caps uppercase tracking-widest text-terracotta border-b border-terracotta pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap self-start sm:self-auto"
        >
          @kinqsville_restaurant →
        </a>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-[400px] md:h-[500px]">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden group ${img.className}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
