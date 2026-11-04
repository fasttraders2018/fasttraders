import { useEffect, useRef, type CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE =
  'https://images.pexels.com/photos/15124970/pexels-photo-15124970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const update = () => {
      const node = parallaxRef.current;
      if (node) {
        const offset = Math.min(window.scrollY, 1000);
        node.style.transform = `translate3d(0, ${offset * 0.12}px, 0) scale(1.1)`;
      }
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32 sm:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14,14,13,0.12) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full bg-brand-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            <span className="hero-rise block" style={{ '--delay': '200ms' } as CSSProperties}>
              Renovation you can
            </span>
            <span
              className="hero-rise block text-brand-600"
              style={{ '--delay': '320ms' } as CSSProperties}
            >
              count on.
            </span>
          </h1>

          <p
            className="hero-rise mt-8 max-w-xl text-lg leading-relaxed text-ink-500"
            style={{ '--delay': '450ms' } as CSSProperties}
          >
            We take on home and office renovations, kitchens, washrooms, flooring and more. Get in touch to discuss
            the work you have in mind.
          </p>

          <div
            className="hero-rise mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ '--delay': '580ms' } as CSSProperties}
          >
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-2xl"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-300 bg-white px-8 py-4 text-base font-semibold text-ink-900 transition-all duration-300 hover:-translate-y-1 hover:border-ink-900 hover:shadow-soft"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="hero-reveal-image relative h-[460px] overflow-hidden rounded-[2rem] shadow-lift sm:h-[560px] lg:h-[640px]">
            <div ref={parallaxRef} className="absolute inset-x-0 -top-[8%] h-[116%] will-change-transform">
              <img
                src={HERO_IMAGE}
                alt="Renovation crew working on a modern kitchen"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
