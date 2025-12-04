import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

type MockView = "kana" | "wordup";

export function HeroSection() {
  const [currentMockView, setCurrentMockView] = useState<MockView>("kana");

  // Auto-cycle through views every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMockView(prev => prev === "kana" ? "wordup" : "kana");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Get background color based on current mock view
  const getContentBackground = (view: MockView) => {
    switch (view) {
      case "kana": return "bg-[#FAEDCB29]"; // Pastel Yellow
      case "wordup": return "bg-[#C9E4DE29]"; // Pastel Mint
      default: return "bg-white";
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-pastel-bg px-4 py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-6"
        >
          <div className="inline-block px-4 py-1.5 bg-pastel-purple neobrutalism-border rounded-full text-sm font-bold mb-2 neobrutalism-shadow-sm transform -rotate-1">
             🚀 v1.0 Public Beta Now Available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-foreground">
            Japanese Immersion, <span className="bg-pastel-mint px-2 neobrutalism-border inline-block transform rotate-1">Supercharged.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground font-medium max-w-lg">
            Stop switching between twelve different apps. Ajile combines a powerful dictionary, context-aware SRS, and sentence mining into one fast, local-first desktop app.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg neobrutalism-border neobrutalism-shadow hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
              <Download className="w-5 h-5" />
              Download for Free
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-foreground font-bold text-lg rounded-lg neobrutalism-border neobrutalism-shadow hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
              View Features
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground/80 font-medium">
            * Available for macOS, Windows, and Linux.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative p-6"
        >
          {/* Mock App Window - Matching Ajile Desktop Layout */}
          <div className="bg-background rounded-xl neobrutalism-border-thick neobrutalism-shadow-lg overflow-hidden aspect-[4/3] relative">
             {/* Window Title Bar */}
             <div className="h-8 bg-pastel-purple border-b-2 border-black flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 border border-black"></div>
             </div>
             
             {/* App Content - Mimics the sidebar + main content layout */}
             <div className="p-3 flex gap-3 bg-background h-[calc(100%-2rem)]">
                
                {/* Left Sidebar */}
                <div className="w-1/4 flex flex-col gap-2">
                   {/* Logo Card */}
                   <div className="bg-[#8B80F9] border-2 border-black neobrutalism-shadow-sm rounded-lg p-3 text-white">
                      <div className="text-sm font-black">Ajile Desktop</div>
                      <div className="text-[8px] opacity-80">Japanese Immersive Learning</div>
                   </div>
                   
                   {/* Nav Buttons */}
                   <div className="space-y-1.5">
                      <button 
                        onClick={() => setCurrentMockView("kana")}
                        className={`w-full text-left text-[10px] font-bold py-2 px-3 rounded-md border-2 border-black transition-all duration-300 ${
                          currentMockView === "kana" 
                            ? "bg-[#8B80F9] text-white neobrutalism-shadow-sm" 
                            : "bg-white text-black hover:bg-gray-50"
                        }`}
                      >
                         Kana
                      </button>
                      <button 
                        onClick={() => setCurrentMockView("wordup")}
                        className={`w-full text-left text-[10px] font-bold py-2 px-3 rounded-md border-2 border-black transition-all duration-300 ${
                          currentMockView === "wordup" 
                            ? "bg-[#8B80F9] text-white neobrutalism-shadow-sm" 
                            : "bg-white text-black hover:bg-gray-50"
                        }`}
                      >
                         Word Up
                      </button>
                      <div className="bg-white text-black text-[10px] font-bold py-2 px-3 rounded-md border-2 border-black">
                         History
                      </div>
                      <div className="bg-white text-black text-[10px] font-bold py-2 px-3 rounded-md border-2 border-black">
                         Settings
                      </div>
                   </div>
                </div>
                
                {/* Main Content Area */}
                <div className={`flex-1 rounded-xl border-2 border-black neobrutalism-shadow-sm p-4 flex flex-col gap-3 overflow-hidden transition-colors duration-500 ${getContentBackground(currentMockView)}`}>
                   <AnimatePresence mode="wait">
                     {currentMockView === "kana" && (
                       <motion.div
                         key="kana"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         transition={{ duration: 0.3 }}
                         className="flex flex-col gap-3 h-full"
                       >
                         {/* Kana Content Header */}
                         <div className="flex items-center justify-between">
                            <div className="h-5 w-24 bg-gray-200 rounded"></div>
                            <div className="h-5 w-16 bg-pastel-mint rounded border border-black/20 flex items-center justify-center text-[8px] font-bold">Hiragana</div>
                         </div>
                         
                         {/* Kana Grid */}
                         <div className="grid grid-cols-5 gap-1.5 flex-1">
                            {[...Array(15)].map((_, i) => (
                               <div 
                                  key={i} 
                                  className={`rounded border border-black/10 flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-pastel-purple' : i === 5 ? 'bg-pastel-mint' : 'bg-white'}`}
                               >
                                  {i === 0 && 'あ'}
                                  {i === 1 && 'い'}
                                  {i === 2 && 'う'}
                                  {i === 3 && 'え'}
                                  {i === 4 && 'お'}
                                  {i === 5 && 'か'}
                                  {i === 6 && 'き'}
                                  {i === 7 && 'く'}
                                  {i === 8 && 'け'}
                                  {i === 9 && 'こ'}
                               </div>
                            ))}
                         </div>

                         {/* Bottom Action */}
                         <div className="flex gap-2">
                            <div className="flex-1 h-8 bg-[#8B80F9] rounded-md border-2 border-black flex items-center justify-center">
                               <span className="text-white text-[10px] font-bold">Start Practice</span>
                            </div>
                         </div>
                       </motion.div>
                     )}

                     {currentMockView === "wordup" && (
                       <motion.div
                         key="wordup"
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         transition={{ duration: 0.3 }}
                         className="flex flex-col gap-3 h-full"
                       >
                         {/* Word Up Header */}
                         <div className="flex items-center justify-between">
                            <div className="text-[10px] font-black">My Decks</div>
                            <div className="h-5 w-16 bg-[#8B80F9] rounded border border-black text-white flex items-center justify-center text-[8px] font-bold">+ Import</div>
                         </div>
                         
                         {/* Deck Cards */}
                         <div className="space-y-2 flex-1">
                            <div className="bg-white rounded-lg border-2 border-black p-2 neobrutalism-shadow-sm">
                               <div className="flex items-center justify-between">
                                  <div>
                                     <div className="text-[10px] font-bold">Core 2000</div>
                                     <div className="text-[8px] text-gray-500">500 words • 120 due</div>
                                  </div>
                                  <div className="w-8 h-8 bg-pastel-peach rounded border border-black flex items-center justify-center text-xs">📚</div>
                               </div>
                            </div>
                            <div className="bg-white rounded-lg border-2 border-black p-2 neobrutalism-shadow-sm">
                               <div className="flex items-center justify-between">
                                  <div>
                                     <div className="text-[10px] font-bold">JLPT N5</div>
                                     <div className="text-[8px] text-gray-500">800 words • 45 due</div>
                                  </div>
                                  <div className="w-8 h-8 bg-pastel-blue rounded border border-black flex items-center justify-center text-xs">🎯</div>
                               </div>
                            </div>
                            <div className="bg-white rounded-lg border-2 border-black p-2 neobrutalism-shadow-sm">
                               <div className="flex items-center justify-between">
                                  <div>
                                     <div className="text-[10px] font-bold">Anime Vocab</div>
                                     <div className="text-[8px] text-gray-500">200 words • 30 due</div>
                                  </div>
                                  <div className="w-8 h-8 bg-pastel-yellow rounded border border-black flex items-center justify-center text-xs">🎬</div>
                               </div>
                            </div>
                         </div>

                         {/* Bottom Action */}
                         <div className="flex gap-2">
                            <div className="flex-1 h-8 bg-[#8B80F9] rounded-md border-2 border-black flex items-center justify-center">
                               <span className="text-white text-[10px] font-bold">Learn Now (195 due)</span>
                            </div>
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>

             </div>
          </div>
             
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute right-0 top-1/4 bg-pastel-yellow p-4 rounded-lg neobrutalism-border neobrutalism-shadow rotate-3 z-20"
          >
             <span className="text-2xl">🎌</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute left-0 bottom-1/4 bg-pastel-blue p-3 rounded-lg neobrutalism-border neobrutalism-shadow -rotate-2 z-20"
          >
             <span className="font-bold text-sm">Anki Compatible</span>
          </motion.div>

          {/* View Indicator Dots */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            <button 
              onClick={() => setCurrentMockView("kana")}
              className={`w-2.5 h-2.5 rounded-full border border-black transition-all ${currentMockView === "kana" ? "bg-[#8B80F9]" : "bg-white"}`}
            />
            <button 
              onClick={() => setCurrentMockView("wordup")}
              className={`w-2.5 h-2.5 rounded-full border border-black transition-all ${currentMockView === "wordup" ? "bg-[#8B80F9]" : "bg-white"}`}
            />
          </div>
        </motion.div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pastel-purple/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pastel-peach/30 rounded-full blur-3xl z-0"></div>
    </section>
  );
}
