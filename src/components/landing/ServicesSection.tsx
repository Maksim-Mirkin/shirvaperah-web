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
    <g key="party-popper">
      <path d="M5.8 11.3 2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01" />
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10M22 13l-.82-.33c-.86-.34-1.82.2-1.98 1.11-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
    </g>,
    <path key="heart" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article key={service.title} className="group rounded-2xl border-none bg-[#faf9f6] p-7 text-center shadow-lg shadow-[#2c3e1f]/5 transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#2c3e1f]/10">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white text-[#d4a5a5] shadow-sm transition duration-300 ease-out group-hover:scale-[1.15] group-hover:text-[#2c3e1f] group-hover:shadow-md">
                <ServiceIcon index={index} />
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
