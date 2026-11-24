import { ArrowRight, Mail } from 'lucide-react';
import Reveal from './Reveal';

type CtaProps = {
  onStartProject: () => void;
  onContact: () => void;
};

export default function Cta({ onStartProject, onContact }: CtaProps) {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-[100px]" />
        <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-charcoal-900/20 blur-[100px]" />
      </div>

      <Reveal className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
          Have an Idea? Let&rsquo;s Build Something Exceptional.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
          Whether you have a new project in mind or need a technology partner to improve an existing solution, Jefferson
          Solutions is ready to help.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onStartProject}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-charcoal-900 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-charcoal-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onContact}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact Us
          </button>
        </div>
      </Reveal>
    </section>
  );
}
