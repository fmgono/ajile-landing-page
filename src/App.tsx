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

function App() {
  const [currentView, setCurrentView] = useState<View>("home");

  // Handle browser back/forward buttons (simple implementation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-pastel-purple selection:text-black pt-16">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      {currentView === "home" && (
        <>
          <HeroSection />
          <FeaturesSection />
          <WordUpDemo />
          <KanaFeatureDemo />
          <InteractiveDemo />
          <DownloadSection onNavigate={setCurrentView} />
        </>
      )}

      {currentView === "roadmap" && <RoadmapPage />}
      
      {currentView === "privacy" && <PrivacyPage />}

      {currentView === "terms" && <TermsPage />}
      
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}

export default App;
