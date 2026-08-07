import AboutSection from '@/components/landing/AboutSection';
import ContactFooter from '@/components/landing/ContactFooter';
import GallerySection from '@/components/landing/GallerySection';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import SiteHeader from '@/components/landing/SiteHeader';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf9f6] text-[#2c3e1f]">
      <SiteHeader />
      <main>
        <HeroSection />
        <GallerySection />
        <ServicesSection />
        <AboutSection />
      </main>
      <ContactFooter />
    </div>
  );
}
