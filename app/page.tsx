import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MenuHighlights from "@/components/home/MenuHighlights";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import LocationStrip from "@/components/home/LocationStrip";

export const metadata: Metadata = {
  title: "Kinqsville Restaurant & Lounge | Asaba's Finest Dining",
  description:
    "Experience exquisite Nigerian cuisine, exotic winery, and a luxurious ambience at Kinqsville Restaurant & Lounge — No. 60 Okpanam Road, Asaba, Delta State.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuHighlights />
      <GalleryTeaser />
      <LocationStrip />
    </>
  );
}
