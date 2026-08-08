import { services } from '@/content/site-content';
import SectionHeading from './SectionHeading';

function ServiceIcon({ index }: { index: number }) {
  const symbols = [
    <g key="flower">
      <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
      <circle cx="12" cy="8" r="2" />
      <path d="M12 10v12M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5ZM12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
    </g>,
    <g key="sparkles">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0Z" />
      <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
    </g>,
    <g key="wedding-cake">
      <path d="M8 8h8v4H8zM5 12h14v4H5zM3 16h18v5H3z" />
      <path d="M12 8V6" />
      <path d="M12 6s-2.5-1.4-2.5-3.1A1.5 1.5 0 0 1 12 1.8a1.5 1.5 0 0 1 2.5 1.1C14.5 4.6 12 6 12 6Z" />
      <path d="M8 12v1M12 12v1M16 12v1M6 16v1M10 16v1M14 16v1M18 16v1" />
    </g>,
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      {symbols[index]}
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="מה אנחנו מציעות"
          title="השירותים שלנו"
          description={<>אנחנו מציעות מגוון שירותי שזירה ועיצוב.<br />עיצוב באווירה טבעית וססגונית עם הקפדה על אסתטיקה ודיוק.</>}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className={`service-card rounded-2xl border-none bg-[#faf9f6] p-7 text-center shadow-lg shadow-[#2c3e1f]/5 transition-all duration-300 ease-out ${index === 1 ? 'order-first md:order-none' : ''}`}>
              <div className="service-icon mx-auto grid h-20 w-20 place-items-center rounded-full bg-white text-[#d4a5a5] shadow-sm transition duration-300 ease-out">
                <ServiceIcon index={[1, 2, 0][index]} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#2c3e1f]">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#5c6b4a]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
