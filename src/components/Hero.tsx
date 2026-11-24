import { ArrowRight, ChevronRight, Terminal } from 'lucide-react';

type HeroProps = {
  onPrimary: () => void;
  onSecondary: () => void;
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const CODE_LINES = [
  { indent: 0, parts: [{ t: 'const', c: 'text-brand-400' }, { t: ' partnership', c: 'text-charcoal-100' }, { t: ' = {', c: 'text-charcoal-300' }] },
  { indent: 1, parts: [{ t: 'quality', c: 'text-charcoal-100' }, { t: ': ', c: 'text-charcoal-300' }, { t: "'consistent'", c: 'text-brand-300' }, { t: ',', c: 'text-charcoal-300' }] },
  { indent: 1, parts: [{ t: 'stack', c: 'text-charcoal-100' }, { t: ': [', c: 'text-charcoal-300' }, { t: "'web'", c: 'text-brand-300' }, { t: ', ', c: 'text-charcoal-300' }, { t: "'software'", c: 'text-brand-300' }, { t: ', ', c: 'text-charcoal-300' }, { t: "'cloud'", c: 'text-brand-300' }, { t: '],', c: 'text-charcoal-300' }] },
  { indent: 1, parts: [{ t: 'delivery', c: 'text-charcoal-100' }, { t: ': ', c: 'text-charcoal-300' }, { t: "'on time, every time'", c: 'text-brand-300' }, { t: ',', c: 'text-charcoal-300' }] },
  { indent: 0, parts: [{ t: '};', c: 'text-charcoal-300' }] },
];

export default function Hero({ onPrimary, onSecondary }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-charcoal-900 pt-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-24 h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-[140px] animate-pulse-slow" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-700/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #F5F5F5 1px, transparent 1px), linear-gradient(to bottom, #F5F5F5 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-28">
        <div className="animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-charcoal-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
            Software &amp; Web Solutions, Delivered Consistently
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            Building Digital Solutions That{' '}
            <span className="relative whitespace-nowrap text-brand-400">
              Move Businesses
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 9C60 3 180 2 298 7" stroke="#DD3D4E" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>{' '}
            Forward.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-charcoal-300 sm:text-lg">
            At Jefferson Solutions, we deliver exceptional software and web solutions, consistently. We combine
            technology, creativity, and engineering excellence to build digital experiences and solutions that help
            businesses operate, grow, and succeed.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onPrimary}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
            >
              Let&rsquo;s Work Together
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onSecondary}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
            >
              Explore Our Services
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative hidden animate-fade-up lg:block" style={{ animationDelay: '200ms' }} aria-hidden="true">
          <div className="relative ml-auto w-full max-w-lg animate-float">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-charcoal-800/90 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-brand-500" />
                <span className="h-3 w-3 rounded-full bg-charcoal-500" />
                <span className="h-3 w-3 rounded-full bg-charcoal-600" />
                <span className="ml-3 flex items-center gap-1.5 text-xs text-charcoal-300">
                  <Terminal className="h-3.5 w-3.5" /> partnership.ts — jefferson-solutions
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
                {CODE_LINES.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 20}px` }}>
                    {line.parts.map((part, j) => (
                      <span key={j} className={part.c}>{part.t}</span>
                    ))}
                  </div>
                ))}
              </pre>
            </div>

            <div className="absolute -bottom-10 -left-14 w-56 rounded-xl border border-white/10 bg-charcoal-800/95 p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-charcoal-200">Deployment</p>
                <span className="rounded-full bg-brand-500/15 px-2 py-0.5 text-[10px] font-semibold text-brand-300">Live</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-charcoal-600">
                <div className="h-full w-full rounded-full bg-brand-500" />
              </div>
              <p className="mt-2 text-[11px] text-charcoal-300">Build passed · 0 issues</p>
            </div>

            <div className="absolute -right-8 -top-8 rounded-xl border border-white/10 bg-charcoal-800/95 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur">
              <p className="text-[11px] text-charcoal-300">Uptime</p>
              <p className="font-display text-lg font-bold text-white">99.9%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5 bg-charcoal-900/60 backdrop-blur" aria-hidden="true">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-400 lg:px-8">
          <span>Custom Software</span>
          <span className="h-1 w-1 rounded-full bg-brand-500" />
          <span>Web Development</span>
          <span className="h-1 w-1 rounded-full bg-brand-500" />
          <span>UI/UX Design</span>
          <span className="h-1 w-1 rounded-full bg-brand-500" />
          <span>Consulting</span>
        </div>
      </div>
    </section>
  );
}
