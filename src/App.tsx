import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { KanaFeatureDemo } from "./components/KanaFeatureDemo";
import { WordUpDemo } from "./components/WordUpDemo";
import { DownloadSection } from "./components/DownloadSection";

function App() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-pastel-purple selection:text-black">
      <HeroSection />
      <FeaturesSection />
      <WordUpDemo />
      <KanaFeatureDemo />
      <InteractiveDemo />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
