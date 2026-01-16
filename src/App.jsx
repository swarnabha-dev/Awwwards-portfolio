import React, { useState, useEffect, useCallback } from 'react';

// Import modular components
import Preloader from './components/ui/Preloader';
import Monogram from './components/ui/Monogram';
import FluidCurtain from './components/layout/FluidCurtain';
import FullScreenArchive from './views/FullScreenArchive';
import Navbar from './components/layout/Navbar';

// Import modals
import ProjectDetailModal from './components/modals/ProjectDetailModal';
import ResearchDetailModal from './components/modals/ResearchDetailModal';
import AboutModal from './components/modals/AboutModal';
import ContactModal from './components/modals/ContactModal';

// Import views
import HomeView from './views/HomeView';

// Import custom hooks
import useScroll from './hooks/useScroll';
import useTypewriter from './hooks/useTypewriter';
import useSmoothMouse from './hooks/useSmoothMouse';

// Import data
import { SKILLS, ALL_PROJECTS, ALL_RESEARCH, FAVICON } from './data/constants';

// Main App Component
export default function App() {
  const scrollY = useScroll();
  const { raw: mousePos } = useSmoothMouse();
  const [loading, setLoading] = useState(true);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextView, setNextView] = useState(null);
  const [curtainLabel, setCurtainLabel] = useState('');

  const [viewState, setViewState] = useState('home');

  const [activeProject, setActiveProject] = useState(null);
  const [activeResearch, setActiveResearch] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleViewChange = (target, label) => {
    setNextView(target);
    setCurtainLabel(label || target);
    setIsTransitioning(true);
  };

  const onCurtainCovered = useCallback(() => {
    if (nextView) {
      setViewState(nextView);
      window.scrollTo(0, 0);
    }
  }, [nextView]);

  // Favicon Logic
  useEffect(() => {
    const updateFavicon = () => {
      // Resolve path similarly to UnifiedImage
      // Note: We duplicate the glob import here because it needs to be statically analyzed by Vite
      const localIcons = import.meta.glob('/src/assets/**/*', { eager: true, import: 'default' });

      let iconSrc = FAVICON;
      if (!iconSrc.startsWith('http') && !iconSrc.startsWith('data:')) {
        const normalizedPath = iconSrc.startsWith('/') ? iconSrc : `/${iconSrc}`;
        if (localIcons[normalizedPath]) {
          iconSrc = localIcons[normalizedPath];
        }
      }

      const link = document.querySelector("link[rel~='icon']");
      if (!link) {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = iconSrc;
        document.head.appendChild(newLink);
      } else {
        link.href = iconSrc;
      }
    };
    updateFavicon();
  }, []);

  const onCurtainRevealed = useCallback(() => {
    setIsTransitioning(false);
    setNextView(null);
    setCurtainLabel('');
  }, []);

  const handleLoadComplete = useCallback(() => setLoading(false), []);
  const activeSkill = useTypewriter(SKILLS);
  const isScrolled = scrollY > 50;

  return (
    <>
      {loading && <Preloader onComplete={handleLoadComplete} />}

      <FluidCurtain
        isVisible={isTransitioning}
        label={curtainLabel}
        onCovered={onCurtainCovered}
        onRevealed={onCurtainRevealed}
      />

      <div className={`min-h-screen font-sans selection:bg-[#20e0d0] selection:text-white text-[#1d1d1f] overflow-x-hidden transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>

        {viewState === 'home' && <Monogram className="text-black" fixed={true} />}

        <Navbar
          isScrolled={isScrolled}
          viewState={viewState}
          onNavigate={handleViewChange}
          onShowAbout={() => setShowAbout(true)}
          onShowContact={() => setShowContact(true)}
        />

        {viewState === 'home' && (
          <HomeView
            activeSkill={activeSkill}
            scrollY={scrollY}
            setActiveProject={setActiveProject}
            setActiveResearch={setActiveResearch}
            onViewAllProjects={() => handleViewChange('all-projects', 'Project Archive')}
            onViewAllResearch={() => handleViewChange('all-research', 'Research Archive')}
            onContact={() => setShowContact(true)}
            mousePos={mousePos}
          />
        )}

        {viewState === 'all-projects' && (
          <FullScreenArchive
            title="All Projects"
            projects={ALL_PROJECTS}
            onClose={() => handleViewChange('home', 'Home')}
            onProjectClick={setActiveProject}
          />
        )}

        {viewState === 'all-research' && (
          <FullScreenArchive
            title="Research Archive"
            projects={ALL_RESEARCH}
            onClose={() => handleViewChange('home', 'Home')}
            onProjectClick={setActiveResearch}
          />
        )}

        <ProjectDetailModal project={activeProject} onClose={() => setActiveProject(null)} />
        <ResearchDetailModal research={activeResearch} onClose={() => setActiveResearch(null)} />
        <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
        <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 0px; }
        .perspective-1000 { perspective: 1000px; }
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-slow { animation: marquee 30s linear infinite; }
        @keyframes blob-bounce {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1); }
            50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: scale(1.05); }
        }
        .animate-blob { animation: blob-bounce 4s ease-in-out infinite; }
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
        @keyframes float-element {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-element {
          animation: float-element 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}