import { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { AmbientGlow } from './components/AmbientGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroMarquee } from './components/HeroMarquee';
import { BrandPhilosophySection } from './components/BrandPhilosophySection';
import { CreativeServicesExperience } from './components/CreativeServicesExperience';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { PreFooterCTA } from './components/PreFooterCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { OurStoryPage } from './components/OurStoryPage';
import { ServicePage } from './components/ServicePage';
import { WorksPage } from './components/WorksPage';
import { ExclusiveVipPage } from './components/ExclusiveVipPage';
import { BlogSection } from './components/BlogSection';
import { BlogArticlePage } from './components/BlogArticlePage';
import { BLOG_POSTS } from './data/blogData';
import { Project, BlogPost } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#blog/')) {
      const slug = hash.replace('#blog/', '');
      return BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
    }
    return BLOG_POSTS[0];
  });
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<'home' | 'our-story' | 'services' | 'works' | 'exclusive' | 'blog-article'>(() => {
    const hash = window.location.hash;
    if (hash === '#our-story' || hash === '#story' || hash === '#about') return 'our-story';
    if (hash === '#services') return 'services';
    if (hash === '#works' || hash === '#portfolio') return 'works';
    if (hash === '#exclusive' || hash === '#vip') return 'exclusive';
    if (hash.startsWith('#blog')) return 'blog-article';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#our-story' || hash === '#story' || hash === '#about') {
        setCurrentView('our-story');
      } else if (hash === '#services') {
        setCurrentView('services');
      } else if (hash === '#works' || hash === '#portfolio') {
        setCurrentView('works');
      } else if (hash === '#exclusive' || hash === '#vip') {
        setCurrentView('exclusive');
      } else if (hash.startsWith('#blog')) {
        const slug = hash.replace('#blog/', '');
        const found = BLOG_POSTS.find((p) => p.slug === slug);
        if (found) setSelectedPost(found);
        setCurrentView('blog-article');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 relative bg-noise selection:bg-[#FF7A1A] selection:text-white ${
        isDarkMode ? 'dark bg-[#0A0A0A] text-[#D4D4D8]' : 'bg-[#FAF9F6] text-[#111111]'
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
        onNavigateStory={() => {
          window.location.hash = '#our-story';
          setCurrentView('our-story');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateServices={() => {
          window.location.hash = '#services';
          setCurrentView('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateBlog={() => {
          if (currentView !== 'home') {
            setCurrentView('home');
          }
          window.location.hash = '#insights';
          setTimeout(() => {
            const el = document.getElementById('insights');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onNavigateHome={() => {
          window.location.hash = '';
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Switching */}
      {currentView === 'our-story' ? (
        <OurStoryPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
          isDarkMode={isDarkMode}
          onNavigateHome={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentView === 'services' ? (
        <ServicePage
          onOpenInquiry={() => setIsInquiryOpen(true)}
          isDarkMode={isDarkMode}
          onNavigateHome={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentView === 'works' ? (
        <WorksPage
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
          isDarkMode={isDarkMode}
          onNavigateHome={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentView === 'exclusive' ? (
        <ExclusiveVipPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onNavigateHome={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentView === 'blog-article' ? (
        <BlogArticlePage
          post={selectedPost}
          onNavigateBack={() => {
            window.location.hash = '#insights';
            setCurrentView('home');
            setTimeout(() => {
              const el = document.getElementById('insights');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          onOpenInquiry={() => setIsInquiryOpen(true)}
          isDarkMode={isDarkMode}
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
          
          {/* Executive Insights (Blog) & Case Studies Dual Section */}
          <BlogSection
            onSelectPost={(post) => {
              setSelectedPost(post);
              window.location.hash = `#blog/${post.slug}`;
              setCurrentView('blog-article');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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
      <Footer isDarkMode={isDarkMode} />

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
