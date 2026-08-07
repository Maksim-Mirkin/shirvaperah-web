import { useEffect, useState } from 'react';
import { hero } from '@/content/site-content';

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0Z" />
      <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
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
    <section id="home" className="relative flex min-h-[90vh] scroll-mt-24 items-start justify-center overflow-hidden pt-28 lg:items-center lg:pt-24">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img src={hero.backgroundImage} alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7f2]/70 via-[#f9f7f2]/60 to-[#f9f7f2]/75" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-8 lg:grid-cols-2 lg:py-20">
        <div className="order-2 text-center lg:order-1 lg:text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a5a5]/55 bg-white/80 px-4 py-1.5 text-sm font-bold tracking-wide text-[#a95f68] shadow-sm backdrop-blur-sm">
            <SparklesIcon />
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
