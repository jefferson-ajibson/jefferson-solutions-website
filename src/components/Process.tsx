import { ClipboardList, Code2, Rocket, Search } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const STAGES = [
  {
    icon: Search,
    stage: '01',
    title: 'Discovery',
    description: "Understand the client's needs, objectives, and project requirements.",
  },
  {
    icon: ClipboardList,
    stage: '02',
    title: 'Planning',
    description: 'Define the solution, technical direction, scope, and implementation strategy.',
  },
  {
    icon: Code2,
    stage: '03',
    title: 'Development',
    description: 'Design, build, and refine the solution using appropriate technologies.',
  },
  {
    icon: Rocket,
    stage: '04',
    title: 'Delivery',
    description: 'Test, deploy, and deliver the completed solution.',
  },
];

export default function Process() {
  return (
    <section className="bg-charcoal-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our Process"
            title="From Vision to Execution."
            description="A clear, proven way of working — so you always know where your project stands and what happens next."
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-1/2 top-1/2 hidden h-px w-[76%] -translate-x-1/2 -translate-y-1/2 bg-charcoal-200 lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STAGES.map(({ icon: Icon, stage, title, description }, i) => (
              <Reveal key={title} as="li" delay={i * 120} className="relative">
                <div className="flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  <div className="relative flex shrink-0 flex-col items-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal-900 text-white shadow-lg shadow-charcoal-900/20 transition-colors duration-300 hover:bg-brand-500">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 font-display text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    {i < STAGES.length - 1 && (
                      <span className="absolute left-8 top-16 h-10 w-px bg-charcoal-200 lg:hidden" aria-hidden="true" />
                    )}
                  </div>
                  <div className="lg:mt-6">
                    <p className="font-display text-xs font-bold tracking-[0.2em] text-brand-500">STAGE {stage}</p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-charcoal-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
