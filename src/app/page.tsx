import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import FAQSection from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import FeatureShowcase from "@/components/sections/FeatureShowcase";

export default function HomePage() {
  return (
    <main role="main" aria-label="Hauptinhalt der ZusammenWachsen App Webseite">
      <Hero />
      <Features />
      <Testimonials />
      <FeatureShowcase />
      <FAQSection />
    </main>
  );
}
