import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [preselectType, setPreselectType] = useState<string | null>(null);

  const goToContact = useCallback((projectType?: string) => {
    if (projectType) setPreselectType(projectType);
    scrollToId('contact');
  }, []);

  const handleFooterNavigate = useCallback((href: string) => {
    scrollToId(href.slice(1));
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-50">
      <Navbar />
      <main>
        <Hero
          onPrimary={() => goToContact()}
          onSecondary={() => scrollToId('services')}
        />
        <About onCta={() => scrollToId('services')} />
        <Services onCta={() => goToContact()} />
        <WhyUs />
        <Portfolio onCta={() => goToContact()} />
        <Process />
        <Cta onStartProject={() => goToContact()} onContact={() => goToContact()} />
        <Contact preselectType={preselectType} />
      </main>
      <Footer onNavigate={handleFooterNavigate} />
    </div>
  );
}
