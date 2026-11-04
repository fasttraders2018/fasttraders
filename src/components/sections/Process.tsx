import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { PROCESS_STEPS } from '@/data/site';

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <div>
          <SectionHeading
            eyebrow="How it works"
            title="From first conversation to finished work."
            description="We discuss your requirements, explain the work involved and agree on the details before starting."
          />

          <div className="relative mt-14">
            <Reveal className="pointer-events-none absolute inset-y-6 left-[23px] w-px">
              <span className="line-draw block h-full w-full bg-gradient-to-b from-brand-600 to-brand-300" />
            </Reveal>

            <ol className="relative space-y-12">
              {PROCESS_STEPS.map((step, index) => (
                <li key={step.title}>
                  <Reveal delay={index * 150}>
                    <div className="flex gap-6">
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-base font-extrabold text-brand-600 shadow-soft">
                        {index + 1}
                      </span>
                      <div className="pt-1.5">
                        <h3 className="text-xl font-extrabold tracking-tight text-ink-900">{step.title}</h3>
                        <p className="mt-2 max-w-md text-base leading-relaxed text-ink-500">{step.description}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
