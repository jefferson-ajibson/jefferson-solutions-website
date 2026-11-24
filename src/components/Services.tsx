import { ArrowRight, Boxes, Code2, Layers, MessageSquareCode, PenTool, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const SERVICES = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Tailored software built around your exact workflows — from internal tools to full-scale platforms designed to grow with your business.',
  },
  {
    icon: Layers,
    title: 'Website Design and Development',
    description:
      'Fast, polished, responsive websites that present your brand professionally and turn visitors into customers.',
  },
  {
    icon: Rocket,
    title: 'Web Application Development',
    description:
      'Modern, interactive web applications with the performance, security, and reliability your users expect.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description:
      'Thoughtful, research-driven interfaces that make complex products feel simple, intuitive, and enjoyable to use.',
  },
  {
    icon: MessageSquareCode,
    title: 'Software Consulting',
    description:
      'Practical technical guidance on architecture, technology choices, and strategy — so you build the right thing, the right way.',
  },
  {
    icon: Boxes,
    title: 'Digital Solutions and Integration',
    description:
      'Connecting your systems, tools, and data so information flows smoothly across every part of your operation.',
  },
];

type ServicesProps = {
  onCta: () => void;
};

export default function Services({ onCta }: ServicesProps) {
  return (
    <section id="services" className="bg-charcoal-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Our Services"
            title="What We Do"
            description="From concept to deployment, we provide technology solutions designed to solve problems, improve experiences, and create lasting value."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-charcoal-800/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:bg-charcoal-800 hover:shadow-2xl hover:shadow-brand-500/10">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-300">{description}</p>
                <button
                  type="button"
                  onClick={onCta}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
