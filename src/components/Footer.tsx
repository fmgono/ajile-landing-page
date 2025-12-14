import type { View } from "../App";

interface FooterProps {
  onNavigate?: (view: View) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="py-12 px-4 bg-white border-t-2 border-black">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Ajile Logo" className="w-10 h-10 rounded-lg border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
          <div>
            <h4 className="text-2xl font-black">Ajile</h4>
            <p className="text-muted-foreground text-sm">Built with ❤️ by <a href="https://fmgono.dev" target="_blank"  className="text-primary hover:underline">Fathan Margono</a> . © 2025</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {onNavigate && (
            <>
              <button 
                onClick={() => onNavigate("roadmap")}
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Roadmap
              </button>
              <button 
                onClick={() => onNavigate("privacy")}
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Privacy
              </button>
              <button 
                onClick={() => onNavigate("terms")}
                className="text-muted-foreground hover:text-black transition-colors"
              >
                Terms
              </button>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
