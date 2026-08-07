import { about } from '@/content/site-content';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#f9f7f2] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeading eyebrow="הסיפור שלנו" title="קצת עלינו" align="right" />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#5c6b4a]">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <blockquote className="relative mt-10 border-r-4 border-[#d4a5a5] pr-7">
            <span className="absolute -right-3 -top-4 bg-[#f9f7f2] px-1 text-4xl text-[#d4a5a5]" aria-hidden="true">״</span>
            <p className="font-serif text-2xl font-semibold italic text-[#2c3e1f]">ימי הפרח והאהבה</p>
            <footer className="mt-1 text-sm text-[#5c6b4a]/65">— י. רוטבליט</footer>
          </blockquote>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 rotate-2 rounded-[2rem] bg-[#d4a5a5]/20" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-[#2c3e1f]/10">
              <img src={about.image} alt={about.imageAlt} loading="lazy" className="h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
