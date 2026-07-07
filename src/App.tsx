import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import DemoPage from './components/DemoPage';
import Footer from './components/Footer';

export type Path = '/' | '/demo';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<Path>('/');

  const navigateToSection = (sectionId: string) => {
    if (currentPath !== '/') {
      setCurrentPath('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-emerald-100">
      <Header 
        currentPath={currentPath} 
        setCurrentPath={setCurrentPath} 
        onNavigateSection={navigateToSection} 
      />
      
      <main className="pt-20">
        {currentPath === '/' ? (
          <>
            <Hero setCurrentPath={setCurrentPath} onNavigateSection={navigateToSection} />
            <ProblemSolution />
            <Features />
            <HowItWorks />
            <Pricing setCurrentPath={setCurrentPath} />
            <Testimonials />
            <ContactForm isStandalone={false} />
          </>
        ) : (
          <DemoPage />
        )}
      </main>

      <Footer currentPath={currentPath} setCurrentPath={setCurrentPath} onNavigateSection={navigateToSection} />
    </div>
  );
};

export default App;
