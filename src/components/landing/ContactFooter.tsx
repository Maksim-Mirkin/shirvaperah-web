import { contact } from '@/content/site-content';

function ContactIcon({ type }: { type: 'phone' | 'instagram' | 'area' }) {
  const path = type === 'phone'
    ? <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
    : type === 'instagram'
      ? <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>
      : <><path d="M3 21h18M6 21V8l6-5 6 5v13" /><path d="M9 13h6" /></>;

  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">{path}</svg>;
}

export default function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-stone-100 bg-white px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-4xl font-bold text-[#2c3e1f]">צרו קשר</h2>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-[#5c6b4a]">אנחנו זמינות לכל שאלה, התייעצות או הזמנה. נשמח לעזור לכן לבחור את השירות המתאים לכן.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-12 items-center rounded-full bg-[#25d366] px-7 font-semibold text-white shadow-lg shadow-[#25d366]/20 transition hover:bg-[#20bd5a]">וואטסאפ</a>
              <a href={contact.phoneHref} className="focus-ring inline-flex min-h-12 items-center rounded-full border border-[#2c3e1f] px-7 font-semibold text-[#2c3e1f] transition hover:bg-[#2c3e1f] hover:text-white" dir="ltr">{contact.phoneDisplay}</a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#faf9f6] p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#d4a5a5]/15 text-[#b87980]"><ContactIcon type="phone" /></div>
              <h3 className="mt-4 font-bold text-[#2c3e1f]">טלפון</h3>
              <a href={contact.phoneHref} className="focus-ring mt-1 inline-block rounded text-[#5c6b4a] hover:text-[#d4a5a5]" dir="ltr">{contact.phoneDisplay}</a>
            </div>
            <div className="rounded-2xl bg-[#faf9f6] p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#d4a5a5]/15 text-[#b87980]"><ContactIcon type="instagram" /></div>
              <h3 className="mt-4 font-bold text-[#2c3e1f]">אינסטגרם</h3>
              <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" className="focus-ring mt-1 inline-block rounded text-[#5c6b4a] hover:text-[#d4a5a5]">{contact.instagramDisplay}</a>
            </div>
            <div className="rounded-2xl bg-[#faf9f6] p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#d4a5a5]/15 text-[#b87980]"><ContactIcon type="area" /></div>
              <h3 className="mt-4 font-bold text-[#2c3e1f]">אזור שירות</h3>
              <p className="mt-1 text-[#5c6b4a]">{contact.serviceArea}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-stone-100 pt-7 text-sm text-[#5c6b4a]/60 sm:flex-row">
          <p>© {new Date().getFullYear()} שיר ופרח. כל הזכויות שמורות.</p>
          <p>עיצוב באהבה לפרחים ולאנשים</p>
        </div>
      </div>
    </footer>
  );
}
