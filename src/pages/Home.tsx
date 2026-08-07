import AboutSection from '@/components/landing/AboutSection';
import ContactFooter from '@/components/landing/ContactFooter';
import GallerySection from '@/components/landing/GallerySection';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import SiteHeader from '@/components/landing/SiteHeader';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf9f6] text-[#2c3e1f]">
      <a href="#main-content" className="focus-ring fixed right-4 top-3 z-[80] -translate-y-20 rounded-lg bg-white px-4 py-2 font-semibold text-[#2c3e1f] shadow-lg transition-transform focus:translate-y-0">
        דילוג לתוכן הראשי
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <GallerySection />
        <ServicesSection />
        <AboutSection />
      </main>
      <ContactFooter />
    </div>
  );
}
