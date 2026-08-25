import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { AmbientGlow } from './components/AmbientGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroMarquee } from './components/HeroMarquee';
import { BrandPhilosophySection } from './components/BrandPhilosophySection';
import { CreativeServicesExperience } from './components/CreativeServicesExperience';
import { ProcessSection } from './components/ProcessSection';
import { Portfolio } from './components/Portfolio';
import { FAQSection } from './components/FAQSection';
import { PreFooterCTA } from './components/PreFooterCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'about'>('home');

  return (
    <div
      className={`min-h-screen transition-colors duration-500 relative bg-noise selection:bg-[#F97316] selection:text-white ${
        isDarkMode ? 'dark bg-[#0A0A0A] text-[#D4D4D8]' : 'bg-white text-[#111111]'
      }`}
    >
      {/* 3-Second Circular Gauge Telemetry Preloader */}
      <Preloader />

      {/* Interactive Brand Ambient Glow Overlay */}
      <AmbientGlow />

      {/* Floating Header */}
      <Navbar
        onOpenInquiry={() => setIsInquiryOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onNavigateServices={() => {
          setCurrentView('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => {
          setCurrentView('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Switching */}
      {currentView === 'services' ? (
        <ServicesPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
          isDarkMode={isDarkMode}
          onNavigateHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentView === 'about' ? (
        <AboutPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
          isDarkMode={isDarkMode}
          onNavigateHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <main>
          <Hero onOpenInquiry={() => setIsInquiryOpen(true)} isDarkMode={isDarkMode} />
          <HeroMarquee isDarkMode={isDarkMode} />
          <BrandPhilosophySection isDarkMode={isDarkMode} />
          <CreativeServicesExperience
            onOpenInquiry={() => setIsInquiryOpen(true)}
            isDarkMode={isDarkMode}
          />
          <ProcessSection isDarkMode={isDarkMode} />
          
          {/* Case Studies & Featured Works Section (Positioned Directly Above FAQ) */}
          <Portfolio
            onSelectProject={(project) => setSelectedProject(project)}
            isDarkMode={isDarkMode}
          />

          <FAQSection
            onOpenInquiry={() => setIsInquiryOpen(true)}
            isDarkMode={isDarkMode}
          />

          {/* High-Impact Pre-Footer Demo Booking Banner */}
          <PreFooterCTA
            onOpenInquiry={() => setIsInquiryOpen(true)}
            isDarkMode={isDarkMode}
          />
        </main>
      )}

      {/* Global Studio Footer */}
      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} isDarkMode={isDarkMode} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}

export default App;
