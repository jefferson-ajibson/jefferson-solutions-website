import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const LOGO_URL = 'https://res.cloudinary.com/ozy6v63h/image/upload/v1795520452/Modern_Red_J_Orbit_Logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  'Custom Software Development',
  'Website Design and Development',
  'Web Application Development',
  'UI/UX Design',
  'Software Consulting',
  'Digital Solutions and Integration',
];

const SOCIALS = [
  { label: 'LinkedIn', icon: Linkedin, href: '#contact' },
  { label: 'Twitter / X', icon: Twitter, href: '#contact' },
  { label: 'GitHub', icon: Github, href: '#contact' },
  { label: 'Instagram', icon: Instagram, href: '#contact' },
  { label: 'Facebook', icon: Facebook, href: '#contact' },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

type FooterProps = {
  onNavigate: (href: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const handleLink = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-charcoal-900 text-charcoal-300">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <img src={LOGO_URL} alt="Jefferson Solutions logo" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              A software and web solutions organization delivering exceptional digital products and technology services
              for businesses that value quality and consistency.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={handleLink('#contact')}
                  aria-label={label}
                  title={`${label} — profile coming soon`}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-charcoal-300 transition-all duration-200 hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToId(link.href); }}
                    className="text-sm transition-colors duration-200 hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollToId('#services'); }}
                    className="text-sm transition-colors duration-200 hover:text-brand-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>Business email — coming soon</li>
              <li>Telephone — coming soon</li>
              <li>Business address — coming soon</li>
              <li>Social media — coming soon</li>
            </ul>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToId('#contact'); }}
              className="mt-6 inline-flex items-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-600"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-center font-display text-sm font-semibold tracking-wide text-white">
            Jefferson: Delivering exceptional software and web solutions, consistently.
          </p>
          <p className="mt-4 text-center text-xs text-charcoal-400">
            &copy; 2026 Jefferson Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
