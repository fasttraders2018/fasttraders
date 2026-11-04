import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { COMPANY, SERVICES } from '@/data/site';
import { supabase } from '@/lib/supabase';

const OTHER_SERVICE = 'Other / not sure';
const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

interface QuoteFormProps {
  service: string;
  onServiceChange: (service: string) => void;
}

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues | 'service', string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_VALUES: FormValues = { name: '', phone: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d\s()-]+$/;

function validate(values: FormValues, service: string): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!PHONE_PATTERN.test(values.phone) || values.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!service) errors.service = 'Please choose a service.';
  return errors;
}

const fieldClass = (hasError: boolean) =>
  `w-full rounded-2xl border bg-white px-4 py-3.5 text-base text-ink-900 placeholder:text-ink-400 transition-all duration-300 focus:outline-none focus:ring-4 ${
    hasError
      ? 'border-brand-500 focus:border-brand-600 focus:ring-brand-600/10'
      : 'border-ink-200 hover:border-ink-300 focus:border-brand-600 focus:ring-brand-600/10'
  }`;

export default function QuoteForm({ service, onServiceChange }: QuoteFormProps) {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const updateField = (field: keyof FormValues) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, service);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (!supabase) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const { error } = await supabase.from('quote_requests').insert({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim() || null,
      service,
      message: values.message.trim() || null,
    });

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(EMPTY_VALUES);
  };

  const resetForm = () => {
    setStatus('idle');
    onServiceChange('');
  };

  return (
    <section id="quote" className="scroll-mt-20 relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-px w-8 bg-brand-600" />
              Get a quote
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              Tell us the job. We will price it clearly.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Share a few details and our team will get back to you with an itemized quotation, valid for 10 days.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            <Reveal delay={300}>
              <a
                href={COMPANY.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Call us</span>
                  <span className="block text-lg font-bold text-ink-900">{COMPANY.phoneDisplay}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={400}>
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Email us</span>
                  <span className="block truncate text-lg font-bold text-ink-900">{COMPANY.email}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-center gap-4 rounded-2xl border border-ink-200 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-base font-semibold leading-relaxed text-ink-800">{COMPANY.address}</span>
              </div>
            </Reveal>
            <Reveal delay={600}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-whatsapp-600 transition-colors hover:text-ink-900"
              >
                <MessageCircle className="h-4 w-4" />
                Prefer WhatsApp? Message us directly
              </a>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal variant="right">
            <div className="relative rounded-[2rem] border border-ink-200 bg-ink-50 p-6 shadow-lift sm:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="flex h-20 w-20 animate-[rise_600ms_cubic-bezier(0.16,1,0.3,1)] items-center justify-center rounded-full bg-success-100 text-success-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h3 className="mt-8 text-3xl font-extrabold tracking-tight text-ink-900">Request received</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-500">
                    Thank you. Our team will review your details and contact you shortly with your quotation.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-900"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="quote-name" className="mb-2 block text-sm font-semibold text-ink-800">
                      Full name
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      autoComplete="name"
                      maxLength={120}
                      value={values.name}
                      onChange={updateField('name')}
                      placeholder="Your name"
                      className={fieldClass(Boolean(errors.name))}
                    />
                    {errors.name && <p className="mt-2 text-sm font-medium text-brand-700">{errors.name}</p>}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="quote-phone" className="mb-2 block text-sm font-semibold text-ink-800">
                      Phone number
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      value={values.phone}
                      onChange={updateField('phone')}
                      placeholder="+92 300 0000000"
                      className={fieldClass(Boolean(errors.phone))}
                    />
                    {errors.phone && <p className="mt-2 text-sm font-medium text-brand-700">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="quote-email" className="mb-2 block text-sm font-semibold text-ink-800">
                      Email <span className="font-normal text-ink-400">(optional)</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      autoComplete="email"
                      maxLength={200}
                      value={values.email}
                      onChange={updateField('email')}
                      placeholder="you@example.com"
                      className={fieldClass(Boolean(errors.email))}
                    />
                    {errors.email && <p className="mt-2 text-sm font-medium text-brand-700">{errors.email}</p>}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="quote-service" className="mb-2 block text-sm font-semibold text-ink-800">
                      Service needed
                    </label>
                    <select
                      id="quote-service"
                      value={service}
                      onChange={(event) => {
                        onServiceChange(event.target.value);
                        setErrors((current) => ({ ...current, service: undefined }));
                      }}
                      className={`${fieldClass(Boolean(errors.service))} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path d=%22M2 4l4 4 4-4%22 fill=%22none%22 stroke=%22%230e0e0d%22 stroke-width=%221.8%22/></svg>')] bg-[length:12px] bg-[right_1.25rem_center] bg-no-repeat pr-12`}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((item) => (
                        <option key={item.title} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                      <option value={OTHER_SERVICE}>{OTHER_SERVICE}</option>
                    </select>
                    {errors.service && <p className="mt-2 text-sm font-medium text-brand-700">{errors.service}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="quote-message" className="mb-2 block text-sm font-semibold text-ink-800">
                      Project details <span className="font-normal text-ink-400">(optional)</span>
                    </label>
                    <textarea
                      id="quote-message"
                      rows={5}
                      maxLength={2000}
                      value={values.message}
                      onChange={updateField('message')}
                      placeholder="Area size, location, timeline, anything we should know"
                      className={`${fieldClass(false)} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="sm:col-span-2 rounded-2xl bg-brand-50 px-5 py-4 text-sm font-medium text-brand-800">
                      {supabase
                        ? 'We could not send your request right now. Please try again, or reach us on WhatsApp.'
                        : 'Quote requests are not connected in this local setup. Please contact us on WhatsApp or email.'}
                    </p>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink-900 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-ink-900"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader className="h-5 w-5 animate-spin" />
                          Sending your request
                        </>
                      ) : (
                        <>
                          Request my quotation
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
