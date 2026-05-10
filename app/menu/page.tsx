import type { Metadata } from "next";
import MenuPageClient from "@/components/menu/MenuPageClient";
import { getMenuCategories } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore Kinqsville's full menu — authentic Nigerian cuisine, exotic winery, cocktails, fresh juices, and premium wines. Every item tells a story of heritage and flavour.",
  alternates: { canonical: "https://kinqsville.com/menu" },
};

export default async function MenuPage() {
  const categories = await getMenuCategories();

  return (
    <>
      <div className="bg-charcoal pt-32 pb-16 px-6">
        <div className="max-w-site mx-auto text-center">
          <span className="font-body text-label-caps uppercase tracking-widest text-terracotta mb-4 block">
            Our Offerings
          </span>
          <h1 className="font-display font-bold text-headline-lg text-white mb-4">
            The Kinqsville Menu
          </h1>
          <p className="font-body text-body-lg text-white/60 max-w-xl mx-auto">
            Authentic Nigerian cuisine crafted with heritage spices, paired with
            an exotic winery and handcrafted drinks.
          </p>
        </div>
      </div>
      <MenuPageClient categories={categories} />
    </>
  );
}
