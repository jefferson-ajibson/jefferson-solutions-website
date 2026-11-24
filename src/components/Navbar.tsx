import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const LOGO_URL = 'https://res.cloudinary.com/ozy6v63h/image/upload/v1795520452/Modern_Red_J_Orbit_Logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
        (el): el is HTMLElement => el !== null
      );
      let current = '#home';
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 140) current = `#${section.id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-charcoal-900/95 shadow-lg shadow-charcoal-900/30 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }} className="flex shrink-0 items-center" aria-label="Jefferson Solutions home">
          <img src={LOGO_URL} alt="Jefferson Solutions logo" className="h-11 w-auto" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                active === link.href ? 'text-white' : 'text-charcoal-300 hover:text-white'
              }`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-brand-500 transition-all duration-300 ${
                  active === link.href ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="inline-flex items-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-charcoal-900 transition-[max-height] duration-300 ease-out lg:hidden ${
          menuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 px-6 pb-6 pt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                active === link.href ? 'bg-white/5 text-brand-400' : 'text-charcoal-200 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="mt-3 block rounded-md bg-brand-500 px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
