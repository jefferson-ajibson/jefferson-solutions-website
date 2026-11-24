import { HeartHandshake, Lightbulb, Medal, ShieldCheck, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const PRINCIPLES = [
  {
    icon: Medal,
    title: 'Quality First',
    description: 'We prioritise quality, functionality, and attention to detail in every solution.',
  },
  {
    icon: ShieldCheck,
    title: 'Consistency',
    description: 'We are committed to dependable service delivery and maintaining high standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace modern technologies and thoughtful approaches to solving problems.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Focused',
    description: 'We prioritise understanding project requirements and delivering solutions that address real needs.',
  },
  {
    icon: Wrench,
    title: 'Technical Excellence',
    description: 'We value sound engineering practices, maintainability, and effective implementation.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-charcoal-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Jefferson Solutions"
            title="Why Work With Us?"
            description="Five principles guide every project we take on — they are the standards we hold ourselves to, on every delivery."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {PRINCIPLES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article
                className={`group flex h-full flex-col rounded-xl border border-charcoal-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl hover:shadow-charcoal-900/10 ${
                  i === 4 ? 'sm:col-span-2 sm:mx-auto sm:max-w-sm lg:col-span-1 lg:max-w-none' : ''
                }`}
              >
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-semibold text-charcoal-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal-500">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
