import { ArrowUpRight, Eye, Hammer, MessagesSquare } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { WORK_GALLERY } from '@/data/site';

const PILLARS = [
  { icon: Eye, title: 'Clean sites, handed back ready', text: 'We protect your space and leave it spotless.' },
  { icon: Hammer, title: 'Skilled, supervised crews', text: 'Each trade is handled by people who do it every day.' },
  { icon: MessagesSquare, title: 'One point of contact', text: 'From the first quote to the final handover.' },
];

export default function WorkGallery() {
  return (
    <section id="work" className="scroll-mt-20 relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our work"
          title="Craftsmanship you can see in every finish."
          description="A look at the kind of finishing, flooring and fit-out work our crews deliver."
        />

        <div className="mt-16 grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[300px]">
          {WORK_GALLERY.map((item, index) => (
            <Reveal
              key={item.title}
              variant="scale"
              delay={index * 120}
              className={index === 0 ? 'sm:row-span-2 lg:col-span-2 lg:row-span-2' : ''}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-3xl bg-ink-200">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                  <span className="text-lg font-extrabold tracking-tight sm:text-xl">{item.title}</span>
                  <span className="flex h-10 w-10 shrink-0 translate-y-2 items-center justify-center rounded-full bg-white text-ink-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 120}>
              <div className="flex h-full gap-5 rounded-3xl border border-ink-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-100 text-accent-800">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-ink-900">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-500">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
