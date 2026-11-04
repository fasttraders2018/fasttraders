import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/data/site';

interface ServicesProps {
  onSelectService: (service: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-20 relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Eleven specialist services, one dependable team."
          description="Whether it is one room or a full office floor, we bring the right trade to every stage of the job."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 100}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectService(service.title);
                    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 text-left shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-lift"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-50 opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100" />

                  <div className="relative flex w-full items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:rotate-6 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-bold text-ink-300 transition-colors group-hover:text-brand-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="relative mt-8 text-xl font-extrabold tracking-tight text-ink-900">{service.title}</h3>
                  <p className="relative mt-3 flex-1 text-base leading-relaxed text-ink-500">{service.description}</p>

                  <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-600">
                    Request this service
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
