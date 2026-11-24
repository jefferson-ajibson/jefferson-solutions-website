import { ArrowRight, Code2, GitBranch, ShieldCheck, Workflow } from 'lucide-react';
import Reveal from './Reveal';

type AboutProps = {
  onCta: () => void;
};

const PILLARS = [
  { icon: Code2, label: 'Clean engineering' },
  { icon: Workflow, label: 'Modern workflows' },
  { icon: ShieldCheck, label: 'Quality assurance' },
  { icon: GitBranch, label: 'Versioned delivery' },
];

export default function About({ onCta }: AboutProps) {
  return (
    <section id="about" className="bg-charcoal-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-500">
            <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
            About Jefferson Solutions
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-charcoal-900 sm:text-4xl lg:text-[2.75rem]">
            Technology Built Around Possibility.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-500 sm:text-lg">
            Jefferson Solutions is a software and web solutions organization committed to delivering exceptional digital
            products and technology services. We approach every project with a focus on quality, functionality,
            innovation, and consistency.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal-500">
            From the first conversation to final delivery, our focus stays the same: understand the problem deeply,
            engineer the right solution, and execute with discipline — so the technology we build keeps working for the
            businesses that depend on it.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {PILLARS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-lg border border-charcoal-200 bg-white px-4 py-3 transition-shadow duration-200 hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-500/10 text-brand-500">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-charcoal-800">{label}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onCta}
            className="group mt-9 inline-flex items-center gap-2 rounded-md bg-charcoal-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-charcoal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal-900"
          >
            Discover Jefferson Solutions
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-charcoal-900 shadow-2xl shadow-charcoal-900/20">
            <div className="grid grid-cols-2 gap-0">
              <div className="flex h-56 flex-col justify-between border-b border-white/10 p-6 sm:h-64 lg:h-72">
                <Code2 className="h-8 w-8 text-brand-400" aria-hidden="true" />
                <div>
                  <p className="font-display text-4xl font-bold text-white" aria-hidden="true">
                    &lt;/&gt;
                  </p>
                  <p className="mt-2 text-sm text-charcoal-300">Engineered solutions, written to last and built to scale.</p>
                </div>
              </div>
              <div className="flex h-56 flex-col justify-between border-b border-l border-white/10 bg-charcoal-800 p-6 sm:h-64 lg:h-72">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500">
                  <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-4xl font-bold text-brand-400">100%</p>
                  <p className="mt-2 text-sm text-charcoal-300">Commitment to quality, functionality, and consistency on every project.</p>
                </div>
              </div>
              <div className="flex h-56 flex-col justify-between p-6 sm:h-64 lg:h-72">
                <GitBranch className="h-8 w-8 text-brand-400" aria-hidden="true" />
                <div>
                  <p className="font-display text-4xl font-bold text-white">4</p>
                  <p className="mt-2 text-sm text-charcoal-300">Clear stages from first idea to delivered solution.</p>
                </div>
              </div>
              <div className="flex h-56 flex-col justify-between border-l border-white/10 bg-brand-500 p-6 sm:h-64 lg:h-72">
                <Workflow className="h-8 w-8 text-white" aria-hidden="true" />
                <div>
                  <p className="font-display text-2xl font-bold leading-snug text-white">Built around your goals.</p>
                  <p className="mt-2 text-sm text-brand-100">Technology shaped to fit the way your business works.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border-2 border-brand-200" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
