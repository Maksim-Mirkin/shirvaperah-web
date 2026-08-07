import HeroSection from '@/components/landing/HeroSection';
import SiteHeader from '@/components/landing/SiteHeader';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf9f6] text-[#2c3e1f]">
      <SiteHeader />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
