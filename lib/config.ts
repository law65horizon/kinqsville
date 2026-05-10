export const siteConfig = {
  name: "Kinqsville Restaurant & Lounge",
  shortName: "Kinqsville",
  tagline: "Good Food. Exotic Winery. Lovely Ambience.",
  description:
    "Kinqsville Restaurant & Lounge — Asaba's premier dining destination. Exquisite Nigerian cuisine, exotic winery, and a warm, luxurious ambience at No. 60 Okpanam Road, Asaba, Delta State.",
  url: "https://kinqsville.com",
  address: {
    street: "No. 60 Okpanam Road",
    city: "Asaba",
    state: "Delta State",
    country: "Nigeria",
    full: "No. 60 Okpanam Road, Asaba, Delta State, Nigeria",
  },
  phones: [
    { number: "09131726086", display: "0913 172 6086", label: "Main Line" },
    { number: "08132063895", display: "0813 206 3895", label: "Reservations" },
  ],
  whatsapp: {
    number: "2349131726086",
    defaultMessage: "Hi, I'd like to place an order from Kinqsville 🍽️",
    url(itemName?: string): string {
      const message = itemName
        ? `Hi, I'd like to place an order for *${itemName}* from Kinqsville 🍽️`
        : this.defaultMessage;
      return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
    },
  },
  instagram: "https://www.instagram.com/kinqsville_restaurant",
  hours: [
    { days: "Monday – Thursday", time: "11:00 AM – 11:00 PM" },
    { days: "Friday – Saturday", time: "11:00 AM – 12:00 AM" },
    { days: "Sunday", time: "12:00 PM – 10:00 PM" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7!2d6.683!3d6.199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKinqsville+Restaurant+%26+Lounge!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng",
  coordinates: { lat: 6.199, lng: 6.683 },
  cuisine: "Nigerian",
  priceRange: "$$",
  socialLinks: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/kinqsville_restaurant",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
