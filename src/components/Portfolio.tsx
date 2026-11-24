import { ArrowRight, ArrowUpRight, MonitorSmartphone, ShoppingBag, Stethoscope, LineChart } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Project = {
  icon: typeof LineChart;
  name: string;
  category: string;
  description: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    icon: LineChart,
    name: 'InsightBoard',
    category: 'Web Application · Dashboard',
    description:
      'A demonstration analytics dashboard concept — real-time charts, configurable reports, and a clean admin interface for data-driven teams.',
    accent: 'bg-brand-500/15 text-brand-400',
  },
  {
    icon: ShoppingBag,
    name: 'Storefront',
    category: 'Web Application · E-commerce',
    description:
      'An online store concept showcasing product browsing, cart and checkout flows, and a responsive storefront experience.',
    accent: 'bg-white/10 text-white',
  },
  {
    icon: Stethoscope,
    name: 'CareBook',
    category: 'Custom Software · Booking',
    description:
      'A scheduling platform concept for service businesses — appointment booking, calendar management, and client reminders.',
    accent: 'bg-white/10 text-white',
  },
];

type PortfolioProps = {
  onCta: () => void;
};

export default function Portfolio({ onCta }: PortfolioProps) {
  return (
    <section id="work" className="bg-charcoal-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Our Work"
              title="Ideas Transformed Into Digital Solutions."
              description="Explore the possibilities of thoughtful design and effective technology."
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xs rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs leading-relaxed text-charcoal-300">
              Demonstration project concepts shown for illustration. Replace these with your completed projects.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ icon: Icon, name, category, description, accent }, i) => (
            <Reveal key={name} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-charcoal-800/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10">
                <div className="relative h-48 overflow-hidden border-b border-white/10 bg-gradient-to-br from-charcoal-700 to-charcoal-800">
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #F5F5F5 1px, transparent 1px), linear-gradient(to bottom, #F5F5F5 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-lg bg-charcoal-900/80 backdrop-blur">
                    <Icon className={`h-5 w-5 ${i === 0 ? 'text-brand-400' : 'text-charcoal-200'}`} aria-hidden="true" />
                  </div>
                  <div className="absolute inset-x-5 bottom-0 top-16 rounded-t-lg border border-white/10 bg-charcoal-900/90 p-3 shadow-lg transition-transform duration-500 group-hover:-translate-y-2" aria-hidden="true">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-brand-500/70" />
                      <span className="h-2 w-2 rounded-full bg-charcoal-500" />
                      <span className="h-2 w-2 rounded-full bg-charcoal-500" />
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="col-span-2 h-14 rounded bg-white/5 p-2">
                        <div className="h-full w-full rounded-sm bg-gradient-to-tr from-brand-500/40 to-brand-500/10" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-6 rounded bg-white/5" />
                        <div className="h-6 rounded bg-white/5" />
                      </div>
                    </div>
                    <div className="mt-2 space-y-1.5">
                      <div className="h-1.5 w-3/4 rounded bg-white/10" />
                      <div className="h-1.5 w-1/2 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${accent.split(' ')[1]}`}>{category}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">{name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-300">{description}</p>
                  <button
                    type="button"
                    onClick={onCta}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={300} className="md:col-span-2 lg:col-span-3">
            <div className="mt-2 flex flex-col items-center justify-between gap-5 rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-7 py-8 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-4">
                <span className="hidden h-12 w-12 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400 sm:flex">
                  <MonitorSmartphone className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Your project could be next.</h3>
                  <p className="mt-1 text-sm text-charcoal-300">We are ready to turn your idea into a working digital solution.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onCta}
                className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
