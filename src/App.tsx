import { useState, useEffect } from "react";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { KanaFeatureDemo } from "./components/KanaFeatureDemo";
import { WordUpDemo } from "./components/WordUpDemo";
import { DownloadSection } from "./components/DownloadSection";
import { Navbar } from "./components/Navbar";
import { RoadmapPage } from "./components/RoadmapPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";

export type View = "home" | "roadmap" | "privacy" | "terms";

interface AppProps {
  initialView?: View;
}

function App({ initialView }: AppProps = {}) {
  // Initialize from URL or prop
  const getInitialView = (): View => {
    if (initialView) return initialView;
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/') return 'home';
      if (path.startsWith('/roadmap')) return 'roadmap';
      if (path.startsWith('/privacy')) return 'privacy';
      if (path.startsWith('/terms')) return 'terms';
    }
    return 'home';
  };

  const [currentView, setCurrentView] = useState<View>(getInitialView);

  // Sync URL with view changes
  const handleNavigate = (view: View) => {
    setCurrentView(view);
    const path = view === 'home' ? '/' : `/${view}`;
    if (typeof window !== 'undefined') {
      window.history.pushState({ view }, '', path);
    }
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handlePopState = () => {
      const view = getInitialView();
      setCurrentView(view);
    };

    window.addEventListener('popstate', handlePopState);
    window.scrollTo(0, 0);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-pastel-purple selection:text-black pt-16" suppressHydrationWarning>
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      {currentView === "home" && (
        <>
          <HeroSection />
          <FeaturesSection />
          <WordUpDemo />
          <KanaFeatureDemo />
          <InteractiveDemo />
          <DownloadSection onNavigate={handleNavigate} />
        </>
      )}

      {currentView === "roadmap" && <RoadmapPage />}
      
      {currentView === "privacy" && <PrivacyPage />}

      {currentView === "terms" && <TermsPage />}
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
