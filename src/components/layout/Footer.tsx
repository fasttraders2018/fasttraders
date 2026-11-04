import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink-900 text-ink-200">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="inline-block rounded-xl bg-white p-3">
            <img
              src="/Logo_Fast_Traders-01_(2).jpg.jpeg"
              alt={`${COMPANY.name} logo`}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-400">
            Home and office renovations, kitchens, washrooms, flooring and other building work.
          </p>
          <p className="mt-6 text-2xl font-extrabold tracking-tight text-white">{COMPANY.tagline}.</p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">Services</h3>
          <ul className="mt-6 space-y-3">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.title}>
                <a
                  href="#services"
                  className="link-underline text-sm text-ink-200 transition-colors hover:text-white"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">Explore</h3>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-sm text-ink-200 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">Visit or call</h3>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span className="text-sm leading-relaxed text-ink-200">{COMPANY.address}</span>
            </li>
            <li>
              <a
                href={COMPANY.phoneHref}
                className="group flex items-center gap-3 text-sm text-ink-200 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-brand-500" />
                {COMPANY.phoneDisplay}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-center gap-3 break-all text-sm text-ink-200 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-brand-500" />
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <p>Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
