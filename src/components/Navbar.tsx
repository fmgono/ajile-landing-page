import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  currentView: "home" | "roadmap";
  onNavigate: (view: "home" | "roadmap") => void;
}

export function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (currentView !== "home") {
      onNavigate("home");
      // Wait for render then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-black">
      <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onNavigate("home")}
        >
          <img src="/logo.svg" alt="Ajile Logo" className="w-8 h-8 rounded border border-black bg-white" />
          <span className="text-xl font-black tracking-tight">Ajile</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("features")}
            className="text-sm font-bold text-muted-foreground hover:text-black transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => onNavigate("roadmap")}
            className={`text-sm font-bold transition-colors ${currentView === "roadmap" ? "text-primary" : "text-muted-foreground hover:text-black"}`}
          >
            Roadmap
          </button>
          <a 
            href="https://github.com/fmgono/ajile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold text-muted-foreground hover:text-black transition-colors flex items-center gap-1"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <button 
            onClick={() => scrollToSection("download")}
            className="px-4 py-2 bg-pastel-purple text-black font-bold text-sm rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0 active:shadow-none"
          >
            Download
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-black bg-white overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-left font-bold text-muted-foreground hover:text-black py-2"
              >
                Features
              </button>
              <button 
                onClick={() => {
                  onNavigate("roadmap");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left font-bold py-2 ${currentView === "roadmap" ? "text-primary" : "text-muted-foreground hover:text-black"}`}
              >
                Roadmap
              </button>
              <a 
                href="https://github.com/fmgono/ajile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left font-bold text-muted-foreground hover:text-black py-2"
              >
                GitHub
              </a>
              <button 
                onClick={() => scrollToSection("download")}
                className="w-full px-4 py-3 bg-pastel-purple text-black font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none text-center"
              >
                Download
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
