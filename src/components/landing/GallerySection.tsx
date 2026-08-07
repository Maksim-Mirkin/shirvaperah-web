import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, UIEvent } from 'react';
import { galleryCategories } from '@/content/site-content';
import SectionHeading from './SectionHeading';

type GalleryImage = (typeof galleryCategories)[number]['images'][number];
type Direction = -1 | 1;
type DragState = {
  active: boolean;
  moved: boolean;
  startX: number;
  startScroll: number;
  image: GalleryImage | null;
};

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d={direction === 'right' ? 'm9 18 6-6-6-6' : 'm15 18-6-6 6-6'} />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
      <circle cx="10.5" cy="10.5" r="7.5" />
      <path d="m16 16 5 5M10.5 7.5v6M7.5 10.5h6" />
    </svg>
  );
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);
  const [visible, setVisible] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [galleryInView, setGalleryInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const transitionTimer = useRef<number | undefined>(undefined);
  const lightboxTimer = useRef<number | undefined>(undefined);
  const dragState = useRef<DragState>({ active: false, moved: false, startX: 0, startScroll: 0, image: null });
  const selectedCategory = galleryCategories.find((category) => category.id === activeCategory) ?? galleryCategories[0];
  const cardStep = 316;
  const loopWidth = selectedCategory.images.length * cardStep;
  const loopImages = [0, 1, 2].flatMap((copy) => selectedCategory.images.map((image, index) => ({ copy, image, index })));

  const openLightbox = (image: GalleryImage) => {
    window.clearTimeout(lightboxTimer.current);
    setLightboxImage(image);
    lightboxTimer.current = window.setTimeout(() => setLightboxVisible(true), 20);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    window.clearTimeout(lightboxTimer.current);
    lightboxTimer.current = window.setTimeout(() => setLightboxImage(null), 300);
  };

  useEffect(() => {
    if (!lightboxImage) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && closeLightbox();
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [lightboxImage]);

  useEffect(() => () => {
    window.clearTimeout(transitionTimer.current);
    window.clearTimeout(lightboxTimer.current);
  }, []);

  useLayoutEffect(() => {
    if (carouselRef.current) carouselRef.current.scrollLeft = -loopWidth;
  }, [activeCategory, loopWidth]);

  const selectCategory = (categoryId: string) => {
    if (categoryId === activeCategory) return;
    setVisible(false);
    window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      setActiveCategory(categoryId);
      window.requestAnimationFrame(() => setVisible(true));
    }, 220);
  };

  const moveCarousel = (direction: Direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cards = [...carousel.querySelectorAll<HTMLElement>('[data-gallery-copy]')];
    const carouselRect = carousel.getBoundingClientRect();
    const alignedIndex = cards.reduce((closestIndex, card, index) => {
      const currentDistance = Math.abs(card.getBoundingClientRect().right - carouselRect.right);
      const closestDistance = Math.abs(cards[closestIndex].getBoundingClientRect().right - carouselRect.right);
      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
    const targetIndex = direction < 0 ? alignedIndex + 1 : alignedIndex - 1;
    const target = cards[targetIndex];
    if (!target) return;
    const distanceToAlign = target.getBoundingClientRect().right - carouselRect.right;
    carousel.scrollTo({ left: carousel.scrollLeft + distanceToAlign, behavior: 'smooth' });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setGalleryInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!galleryInView || lightboxImage) return undefined;
    const handleArrowKeys = (event: KeyboardEvent) => {
      if (event.target instanceof Element && event.target.matches('input, textarea, select')) return;
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        moveCarousel(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        moveCarousel(1);
      }
    };
    window.addEventListener('keydown', handleArrowKeys);
    return () => window.removeEventListener('keydown', handleArrowKeys);
  }, [galleryInView, lightboxImage, activeCategory]);

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    const galleryItem = (event.target as Element).closest<HTMLElement>('[data-gallery-index]');
    dragState.current = {
      active: true,
      image: galleryItem
        ? selectedCategory.images[Number(galleryItem.dataset.galleryIndex)]
        : null,
      moved: false,
      startX: event.clientX,
      startScroll: carouselRef.current?.scrollLeft ?? 0,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const dragCarousel = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    if (event.buttons !== 1) {
      dragState.current = { ...dragState.current, active: false, moved: false };
      return;
    }
    const distance = event.clientX - dragState.current.startX;
    if (Math.abs(distance) > 14) dragState.current.moved = true;
    if (carouselRef.current) carouselRef.current.scrollLeft = dragState.current.startScroll - distance;
  };

  const stopDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const imageToOpen = event.pointerType === 'mouse' && !dragState.current.moved
      ? dragState.current.image
      : null;
    dragState.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (imageToOpen) openLightbox(imageToOpen);
  };

  const cancelDrag = () => {
    dragState.current = { ...dragState.current, active: false };
  };

  const keepCarouselLooped = (event: UIEvent<HTMLDivElement>) => {
    const carousel = event.currentTarget;
    if (carousel.scrollLeft > -cardStep) {
      carousel.scrollLeft -= loopWidth;
    } else if (carousel.scrollLeft < -(loopWidth * 2 - cardStep)) {
      carousel.scrollLeft += loopWidth;
    }
  };

  return (
    <section ref={sectionRef} id="gallery" className="scroll-mt-24 overflow-hidden bg-[#faf9f6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="העבודות שלנו"
          title="גלריה"
          description="הצצה קטנה ליצירות הפרחים שלנו. כל זר נשזר באהבה ותשומת לב לפרטים הקטנים."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-4" role="group" aria-label="סינון גלריה">
          {galleryCategories.map((category) => {
            const selected = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={selected}
                onClick={() => selectCategory(category.id)}
                className={`focus-ring min-h-11 rounded-full border px-6 py-2.5 text-base font-medium transition-all duration-300 ${selected ? 'scale-105 border-[#2c3e1f] bg-[#2c3e1f] text-white shadow-lg shadow-[#2c3e1f]/20' : 'border-[#e8d5c4] bg-white text-[#5c6b4a] hover:border-[#d4a5a5] hover:text-[#2c3e1f]'}`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="relative mt-12">
          <div
            ref={carouselRef}
            className={`no-scrollbar flex cursor-grab gap-4 overflow-x-auto pb-3 transition-all duration-300 active:cursor-grabbing ${visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
            aria-live="polite"
            onPointerDown={startDrag}
            onPointerMove={dragCarousel}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
            onLostPointerCapture={cancelDrag}
            onScroll={keepCarouselLooped}
            style={{ touchAction: 'pan-y' }}
          >
            {loopImages.map(({ copy, image, index }) => (
              <button
                key={`${selectedCategory.id}-${copy}-${image}`}
                type="button"
                onClick={(event) => {
                  if ((event.nativeEvent as PointerEvent).pointerType !== 'mouse') openLightbox(image);
                }}
                className="focus-ring group relative aspect-[4/5] w-[min(300px,85vw)] flex-none overflow-hidden rounded-2xl bg-[#e8d5c4]"
                aria-label={`פתיחת תמונה ${index + 1} מתוך ${selectedCategory.images.length}`}
                aria-hidden={copy !== 1}
                tabIndex={copy === 1 ? 0 : -1}
                data-gallery-index={index}
                data-gallery-copy={copy}
              >
                <img src={image} alt={`${selectedCategory.label} בעיצוב שיר ופרח`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 z-10 bg-black/15 transition-colors group-hover:bg-black/40" aria-hidden="true" />
                <span className="absolute inset-0 z-20 grid place-items-center text-white opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true"><ExpandIcon /></span>
              </button>
            ))}
          </div>

          <button type="button" onClick={() => moveCarousel(1)} className="focus-ring absolute right-0 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 translate-x-1/4 place-items-center rounded-full border border-[#e8d5c4] bg-white text-[#2c3e1f] shadow-lg transition hover:scale-110 hover:bg-[#faf9f6] sm:h-12 sm:w-12 sm:translate-x-1/2" aria-label="התמונות הקודמות">
            <ArrowIcon direction="right" />
          </button>
          <button type="button" onClick={() => moveCarousel(-1)} className="focus-ring absolute left-0 top-1/2 z-30 grid h-10 w-10 -translate-x-1/4 -translate-y-1/2 place-items-center rounded-full border border-[#e8d5c4] bg-white text-[#2c3e1f] shadow-lg transition hover:scale-110 hover:bg-[#faf9f6] sm:h-12 sm:w-12 sm:-translate-x-1/2" aria-label="התמונות הבאות">
            <ArrowIcon direction="left" />
          </button>
        </div>
      </div>

      {lightboxImage ? (
        <div role="dialog" aria-modal="true" aria-label="תצוגת תמונה מוגדלת" className={`fixed inset-0 z-[70] grid place-items-center bg-black/90 p-4 transition-opacity duration-300 ${lightboxVisible ? 'opacity-100' : 'opacity-0'}`} onClick={closeLightbox}>
          <button type="button" onClick={closeLightbox} className={`focus-ring absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full text-4xl text-white transition-all duration-300 hover:text-[#d4a5a5] ${lightboxVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} aria-label="סגירת תמונה">×</button>
          <img src={lightboxImage} alt="סידור פרחים בתצוגה מוגדלת" className={`max-h-[90vh] max-w-full rounded-lg object-contain transition-all duration-300 ease-out ${lightboxVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} onClick={closeLightbox} />
        </div>
      ) : null}
    </section>
  );
}
