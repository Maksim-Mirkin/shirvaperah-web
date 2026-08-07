import { useEffect, useState } from 'react';
import { hero } from '@/content/site-content';

function FlowerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
      <path d="M12 7.5C9.5 5.7 9.7 2.7 12 2c2.3.7 2.5 3.7 0 5.5Z" />
      <path d="M16.5 12c1.8-2.5 4.8-2.3 5.5 0-.7 2.3-3.7 2.5-5.5 0Z" />
      <path d="M12 16.5c2.5 1.8 2.3 4.8 0 5.5-2.3-.7-2.5-3.7 0-5.5Z" />
      <path d="M7.5 12C5.7 14.5 2.7 14.3 2 12c.7-2.3 3.7-2.5 5.5 0Z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);
  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % hero.images.length);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setTimeout(() => {
      setActiveImage((current) => (current + 1) % hero.images.length);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [activeImage]);

  return (
    <section id="home" className="relative flex min-h-[90vh] scroll-mt-24 items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img src={hero.backgroundImage} alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7f2]/70 via-[#f9f7f2]/60 to-[#f9f7f2]/75" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="order-2 text-center lg:order-1 lg:text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a5a5]/55 bg-white/80 px-4 py-1.5 text-sm font-bold tracking-wide text-[#a95f68] shadow-sm backdrop-blur-sm">
            <FlowerIcon />
            <span>{hero.eyebrow}</span>
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-[#2c3e1f] sm:text-7xl lg:text-8xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg font-semibold italic tracking-wide text-[#34422b] [text-shadow:0_1px_3px_rgba(255,255,255,0.9)] sm:text-xl">
            {hero.quote}
          </p>
          <p className="mx-auto mt-8 max-w-lg text-xl font-bold leading-relaxed text-[#2f3f28] [text-shadow:0_1px_3px_rgba(255,255,255,0.85)] sm:text-2xl lg:mx-0">
            {hero.description}
          </p>
        </div>

        <div className="order-1 hidden lg:order-2 lg:block">
          <div className="relative mx-auto aspect-[4/5] max-w-md">
            <button type="button" onClick={showNextImage} className="focus-ring absolute inset-0 rotate-2 cursor-pointer overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl" aria-label="הצגת תמונת הפרחים הבאה">
              {hero.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={index === activeImage ? hero.imageAlt : ''}
                  aria-hidden={index !== activeImage}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </button>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-[#e8d5c4] bg-white p-6 text-center shadow-xl">
              <span className="block text-3xl font-bold text-[#d4a5a5]">100%</span>
              <span className="text-sm font-medium text-[#5c6b4a]">אהבה בכל זר</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
