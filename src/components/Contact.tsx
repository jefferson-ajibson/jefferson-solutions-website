import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const PROJECT_TYPES = [
  'Custom Software Development',
  'Website Design and Development',
  'Web Application Development',
  'UI/UX Design',
  'Software Consulting',
  'Digital Solutions and Integration',
  'Other',
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  projectType: string;
  description: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  projectType: '',
  description: '',
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

type ContactProps = {
  preselectType?: string | null;
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!values.projectType) errors.projectType = 'Please select a project type.';
  if (!values.description.trim()) {
    errors.description = 'Please describe your project.';
  } else if (values.description.trim().length < 20) {
    errors.description = 'Please provide a little more detail (at least 20 characters).';
  }
  return errors;
}

export default function Contact({ preselectType }: ContactProps) {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus('submitting');
    setServerError(null);

    const { error } = await supabase.from('contact_messages').insert({
      full_name: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || null,
      subject: values.subject.trim(),
      project_type: values.projectType,
      description: values.description.trim(),
    });

    if (error) {
      setServerError('Something went wrong while sending your message. Please try again, or reach us directly using the contact details on this page.');
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(INITIAL);
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-md border bg-white px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 transition-colors duration-200 focus:outline-none focus:ring-2 ${
      hasError
        ? 'border-brand-500 focus:border-brand-500 focus:ring-brand-500/25'
        : 'border-charcoal-200 focus:border-brand-500 focus:ring-brand-500/25'
    }`;

  return (
    <section id="contact" className="scroll-mt-20 bg-charcoal-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Talk About Your Next Project."
            description="Tell us what you're looking to build. We'd be happy to discuss how we can help."
          />

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-charcoal-200 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                <Send className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-charcoal-900">Business Email</h3>
                <p className="mt-1 text-sm text-charcoal-500">Official business email — coming soon.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-charcoal-200 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-charcoal-900">Telephone</h3>
                <p className="mt-1 text-sm text-charcoal-500">Business telephone number — coming soon.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-charcoal-200 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                <AlertCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-charcoal-900">Address &amp; Social</h3>
                <p className="mt-1 text-sm text-charcoal-500">Business address and social media profiles — coming soon.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          {status === 'success' ? (
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-xl border border-charcoal-200 bg-white p-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-8 w-8 text-green-600" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-charcoal-900">Message Received</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal-500">
                Thank you for reaching out. Your message has been saved and the Jefferson Solutions team will review it
                and get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-8 rounded-md border border-charcoal-200 px-6 py-2.5 text-sm font-semibold text-charcoal-800 transition-colors hover:border-brand-500 hover:text-brand-500"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-charcoal-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-charcoal-800">
                    Full Name <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={values.fullName}
                    onChange={handleChange}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={inputClass(!!errors.fullName)}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 text-xs font-medium text-brand-600">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-800">
                    Email Address <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs font-medium text-brand-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal-800">
                    Phone Number <span className="text-charcoal-400">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                    value={values.phone}
                    onChange={handleChange}
                    className={inputClass(false)}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-charcoal-800">
                    Subject <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    value={values.subject}
                    onChange={handleChange}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={inputClass(!!errors.subject)}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs font-medium text-brand-600">{errors.subject}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-charcoal-800">
                    Project Type <span className="text-brand-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={preselectType ?? values.projectType}
                    onChange={handleChange}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                    className={`${inputClass(!!errors.projectType)} ${!values.projectType && !preselectType ? 'text-charcoal-400' : ''}`}
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="text-charcoal-900">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className="mt-1.5 text-xs font-medium text-brand-600">{errors.projectType}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-charcoal-800">
                    Project Description <span className="text-brand-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={values.description}
                    onChange={handleChange}
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? 'description-error' : undefined}
                    className={`${inputClass(!!errors.description)} resize-y`}
                  />
                  {errors.description && (
                    <p id="description-error" className="mt-1.5 text-xs font-medium text-brand-600">{errors.description}</p>
                  )}
                </div>
              </div>

              {serverError && (
                <div className="mt-5 flex items-start gap-3 rounded-md border border-brand-200 bg-brand-50 p-4" role="alert">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  <p className="text-sm text-brand-800">{serverError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
