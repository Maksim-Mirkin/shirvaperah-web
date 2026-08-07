import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { contact, logo } from '@/content/site-content';

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2a8.5 8.5 0 1 1 15.6-4.6Z" />
      <path d="M8.5 8c.8 4 3.4 6.6 7.4 7.5" />
    </svg>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const hero = document.getElementById('home');
      const threshold = hero ? hero.offsetTop + hero.offsetHeight - 96 : 56;
      setScrolled(window.scrollY > threshold);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);
    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || menuOpen ? 'border-stone-200/70 bg-white/85 py-3 shadow-sm backdrop-blur-md' : 'border-transparent bg-transparent py-6'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-7 md:flex">
            <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-1.5 rounded-md text-sm font-medium text-[#5c6b4a] transition hover:text-[#d4a5a5]">
              <InstagramIcon />
              <span>shirvaperah</span>
            </a>
            <span className="h-4 w-px bg-stone-300" aria-hidden="true" />
            <a href={contact.phoneHref} className="focus-ring flex items-center gap-1.5 rounded-md text-sm font-medium text-[#5c6b4a] transition hover:text-[#2c3e1f]" dir="ltr">
              <PhoneIcon />
              <span>{contact.phoneDisplay}</span>
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex h-10 items-center gap-2 rounded-full bg-[#2c3e1f] px-6 text-sm font-semibold text-white shadow-lg shadow-[#2c3e1f]/10 transition hover:-translate-y-0.5 hover:bg-[#1a2613]">
              <WhatsAppIcon />
              <span>צרו קשר</span>
            </a>
          </div>

          <button type="button" className="focus-ring grid h-11 w-11 place-items-center rounded-full text-[#2c3e1f] md:hidden" aria-label={menuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'} aria-expanded={menuOpen} aria-controls="mobile-contact-menu" onClick={() => setMenuOpen((current) => !current)}>
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <a href="/" onClick={scrollToTop} className="focus-ring rounded-full" aria-label="שיר ופרח — דף הבית">
          <img src={logo} alt="שיר ופרח" className="h-16 w-16 rounded-full border border-stone-200 object-cover shadow-sm transition hover:scale-105 md:h-20 md:w-20" />
        </a>
        </div>
      </header>

      <div id="mobile-contact-menu" aria-hidden={!menuOpen} className={`fixed inset-0 z-40 min-h-[100dvh] bg-white/95 px-6 pt-32 backdrop-blur-md transition-all duration-300 md:hidden ${menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'}`}>
        <nav aria-label="אפשרויות יצירת קשר" className={`flex flex-col gap-6 text-center transition-all delay-75 duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}>
          <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-lg py-2 text-xl font-medium" onClick={() => setMenuOpen(false)}>
            Instagram
          </a>
          <a href={contact.phoneHref} className="focus-ring rounded-lg py-2 text-xl font-medium" dir="ltr" onClick={() => setMenuOpen(false)}>
            {contact.phoneDisplay}
          </a>
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="focus-ring mt-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-6 text-lg font-semibold text-white" onClick={() => setMenuOpen(false)}>
            <WhatsAppIcon />
            וואטסאפ
          </a>
        </nav>
      </div>
    </>
  );
}
