import { SERVICES } from '@/data/site';

export default function ServicesMarquee() {
  const items = [...SERVICES, ...SERVICES];

  return (
    <div className="relative overflow-hidden border-y border-ink-200 bg-white py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((service, index) => (
          <span key={`${service.title}-${index}`} className="flex items-center gap-10">
            <span className="text-2xl font-extrabold tracking-tight text-ink-300 transition-colors duration-300 hover:text-brand-600 sm:text-3xl">
              {service.title}
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />
          </span>
        ))}
      </div>
    </div>
  );
}
