import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Kinqsville Restaurant & Lounge is located at No. 60 Okpanam Road, Asaba, Delta State. Open Monday–Sunday. Click to call or order via WhatsApp.",
  alternates: {
    canonical: "https://kinqsville.com/find-us",
  },
};

export default function FindUsPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-charcoal pt-32 pb-16 px-6">
        <div className="max-w-site mx-auto">
          <span className="font-body text-label-caps uppercase tracking-widest text-terracotta mb-4 block">
            We&apos;re Easy to Find
          </span>
          <h1 className="font-display font-bold text-headline-lg text-white mb-4">
            Find Kinqsville
          </h1>
          <p className="font-body text-body-lg text-white/60 max-w-xl">
            Located in the heart of Asaba — come dine with us, or order ahead
            via WhatsApp.
          </p>
        </div>
      </div>

      <div className="bg-cream">
        <div className="max-w-site mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Map */}
            <div>
              <div className="aspect-[4/3] bg-surface-container overflow-hidden border border-cream-dim">
                <iframe
                  title="Kinqsville Restaurant & Lounge — Google Maps location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1209!2d6.68250!3d6.19890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104359b4b0000001%3A0x0!2zNsKwMTEnNTYuMCJOIDfCsDQwJzU3LjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-body text-label-caps uppercase tracking-widest text-terracotta hover:opacity-70 transition-opacity"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Open in Google Maps →
              </a>
            </div>

            {/* Info */}
            <div className="space-y-10">
              {/* Address */}
              <div>
                <h2 className="font-body text-label-caps uppercase tracking-widest text-terracotta mb-4">
                  Address
                </h2>
                <address className="not-italic">
                  <p className="font-display font-semibold text-headline-sm text-charcoal mb-1">
                    Kinqsville Restaurant & Lounge
                  </p>
                  <p className="font-body text-body-lg text-on-surface-variant">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state}<br />
                    {siteConfig.address.country}
                  </p>
                </address>
              </div>

              {/* Hours */}
              <div>
                <h2 className="font-body text-label-caps uppercase tracking-widest text-terracotta mb-4">
                  Opening Hours
                </h2>
                <dl className="space-y-3">
                  {siteConfig.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-center justify-between border-b border-cream-dim pb-3 last:border-0"
                    >
                      <dt className="font-body text-body-md text-on-surface-variant">
                        {h.days}
                      </dt>
                      <dd className="font-body text-body-md font-medium text-charcoal">
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Call buttons */}
              <div>
                <h2 className="font-body text-label-caps uppercase tracking-widest text-terracotta mb-4">
                  Call Us
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:+234${phone.number.replace(/^0/, "")}`}
                      className="inline-flex items-center gap-2.5 border border-charcoal text-charcoal px-6 py-4 font-body text-label-caps uppercase tracking-widest hover:bg-charcoal hover:text-cream transition-colors duration-200 group justify-center sm:justify-start"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.32 1.85.56 2.81.68A2 2 0 0122 16.92z" />
                      </svg>
                      <div className="text-left">
                        <p>{phone.display}</p>
                        <p className="text-[10px] opacity-60 normal-case tracking-normal">
                          {phone.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-surface-container p-6 border border-cream-dim">
                <h2 className="font-display font-semibold text-headline-sm text-charcoal mb-2">
                  Prefer to Order Online?
                </h2>
                <p className="font-body text-body-md text-on-surface-variant mb-5">
                  Send us a WhatsApp message with your order. We&apos;ll confirm
                  it right away.
                </p>
                <a
                  href={siteConfig.whatsapp.url()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-terracotta text-white px-6 py-3.5 font-body text-label-caps uppercase tracking-widest hover:bg-terracotta-light transition-colors duration-200 active:scale-95"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Message Us on WhatsApp
                </a>
              </div>

              {/* Instagram */}
              <div>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-terracotta transition-colors group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Follow us @kinqsville_restaurant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
