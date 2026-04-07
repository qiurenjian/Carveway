import HeroSection from '@/components/sections/HeroSection';
import ProductGrid from '@/components/sections/ProductGrid';
import IndustryGrid from '@/components/sections/IndustryGrid';
import StatsBar from '@/components/sections/StatsBar';
import AboutTeaser from '@/components/sections/AboutTeaser';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <StatsBar />
      <IndustryGrid />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}
