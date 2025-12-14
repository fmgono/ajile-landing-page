import { useState } from "react";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { KanaFeatureDemo } from "./components/KanaFeatureDemo";
import { WordUpDemo } from "./components/WordUpDemo";
import { DownloadSection } from "./components/DownloadSection";
import { Navbar } from "./components/Navbar";
import { RoadmapPage } from "./components/RoadmapPage";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "roadmap">("home");

  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-pastel-purple selection:text-black pt-16">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      {currentView === "home" ? (
        <>
          <HeroSection />
          <FeaturesSection />
          <WordUpDemo />
          <KanaFeatureDemo />
          <InteractiveDemo />
          <DownloadSection />
        </>
      ) : (
        <RoadmapPage />
      )}
      
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}

export default App;
