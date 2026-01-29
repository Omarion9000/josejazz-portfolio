import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Songs from './components/Songs';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-jazz-black text-jazz-light">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Songs />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;