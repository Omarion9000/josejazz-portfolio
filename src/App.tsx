import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Songs from './components/Songs';
import Projects from './components/Projects';
import Promotional from './components/Promotional';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-ink-900 text-bone selection:bg-brass-400/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Songs />
        <Projects />
        <Promotional />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
