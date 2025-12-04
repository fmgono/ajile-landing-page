import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { KanaFeatureDemo } from "./components/KanaFeatureDemo";

function App() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-pastel-purple selection:text-black">
      <HeroSection />
      <FeaturesSection />
      <KanaFeatureDemo />
      <InteractiveDemo />
      <Footer />
    </div>
  );
}

export default App;
