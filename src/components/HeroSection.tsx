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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-pastel-bg px-4 py-20 overflow-hidden border-b-2 border-black">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-6"
          >

            <div className="inline-block px-4 py-1.5 bg-pastel-purple neobrutalism-border rounded-full text-sm font-bold mb-2 neobrutalism-shadow-sm transform -rotate-1">
             🚀 v1.1.0 Now Available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-foreground">
            The Japanese learning app <span className="bg-pastel-mint px-2 neobrutalism-border inline-block transform rotate-1">I wish I had.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground font-medium max-w-lg">
            I was tired of juggling apps, so I built one that does it all. Dictionary, SRS, and sentence mining—running fast and local on your machine. No subscriptions, no tracking.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#download" className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg neobrutalism-border neobrutalism-shadow hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
              <Download className="w-5 h-5" />
              Download for Free
            </a>
            <a href="#features" className="flex items-center gap-2 px-8 py-4 bg-white text-foreground font-bold text-lg rounded-lg neobrutalism-border neobrutalism-shadow hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
              View Features
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground/80 font-medium">
            * Built with love for macOS, Windows, and Linux. Completely free and runs entirely on your machine.
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
                   <div className="bg-[#8B80F9] border-2 border-black neobrutalism-shadow-sm rounded-lg p-3 text-white flex items-center gap-2">
                      <img src="/logo.svg" alt="Logo" className="w-8 h-8 rounded border border-black bg-white" />
                      <div>
                        <div className="text-sm font-black">Ajile</div>
                        <div className="text-[8px] opacity-80 leading-tight">Desktop App</div>
                      </div>
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
                         className="flex flex-col gap-2 h-full"
                       >
                         {/* Kana Content Header - New Style */}
                         <div className="flex items-center justify-between gap-2 bg-white/50 p-1.5 rounded-lg border border-black/10">
                            <div className="flex items-center gap-1.5">
                                <div className="p-1 bg-white rounded border border-black/10">
                                    <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 10v6M2 10v6M22 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" />
                                    </svg>
                                </div>
                                <div className="text-[9px] font-black leading-tight">
                                    Kana Mastery
                                </div>
                            </div>
                            <button className="px-2 py-0.5 bg-primary text-white text-[8px] font-bold rounded border border-black shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
                                Practice
                            </button>
                         </div>

                         {/* Mock Tabs */}
                         <div className="flex items-center justify-between px-1">
                             <div className="flex gap-1">
                                 <div className="px-2 py-0.5 bg-white border border-black rounded text-[7px] font-bold shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
                                     Lessons
                                 </div>
                                 <div className="px-2 py-0.5 text-black/50 text-[7px] font-bold">
                                     Reference
                                 </div>
                             </div>
                             <div className="flex bg-black/5 p-0.5 rounded gap-1">
                                <div className="px-1.5 bg-white rounded text-[6px] font-bold shadow-sm">あ</div>
                                <div className="px-1.5 text-black/50 text-[6px] font-bold">ア</div>
                             </div>
                         </div>
                         
                         {/* Kana Cards Grid (Lessons View) */}
                         <div className="grid grid-cols-2 gap-2 flex-1 overflow-hidden content-start">
                            {/* Card 1: Vowels */}
                            <div className="bg-green-50 rounded border border-black p-2 relative shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[8px] font-black">Vowels</span>
                                    <svg className="w-2 h-2 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                                </div>
                                <div className="flex gap-0.5 mb-1.5 justify-between">
                                    <span className="text-[10px] font-bold text-yellow-600">あ</span>
                                    <span className="text-[10px] font-bold text-yellow-600">い</span>
                                    <span className="text-[10px] font-bold text-yellow-600">う</span>
                                    <span className="text-[10px] font-bold text-yellow-600">え</span>
                                    <span className="text-[10px] font-bold text-yellow-600">お</span>
                                </div>
                                <div className="w-full bg-white border border-black rounded flex items-center justify-center py-0.5 text-[6px] font-bold">
                                    Review
                                </div>
                            </div>

                            {/* Card 2: K-Column */}
                            <div className="bg-white rounded border border-black p-2 relative shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[8px] font-black">"K" Column</span>
                                </div>
                                <div className="flex gap-0.5 mb-1.5 justify-between">
                                    <span className="text-[10px] font-bold text-indigo-500">か</span>
                                    <span className="text-[10px] font-bold text-indigo-500">き</span>
                                    <span className="text-[10px] font-bold text-indigo-500">く</span>
                                    <span className="text-[10px] font-bold text-gray-300">け</span>
                                    <span className="text-[10px] font-bold text-gray-300">こ</span>
                                </div>
                                <div className="w-full bg-black text-white border border-black rounded flex items-center justify-center py-0.5 text-[6px] font-bold">
                                    Start
                                </div>
                            </div>

                             {/* Card 3: S-Column */}
                             <div className="bg-white rounded border border-black p-2 relative shadow-[2px_2px_0_0_rgba(0,0,0,1)] opacity-50">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[8px] font-black">"S" Column</span>
                                </div>
                                <div className="flex gap-0.5 mb-1.5 justify-between">
                                    <span className="text-[10px] font-bold text-gray-300">さ</span>
                                    <span className="text-[10px] font-bold text-gray-300">し</span>
                                    <span className="text-[10px] font-bold text-gray-300">す</span>
                                    <span className="text-[10px] font-bold text-gray-300">せ</span>
                                    <span className="text-[10px] font-bold text-gray-300">そ</span>
                                </div>
                                <div className="w-full bg-gray-100 border border-black/20 rounded flex items-center justify-center py-0.5 text-[6px] font-bold">
                                    Locked
                                </div>
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
                         className="flex flex-col gap-1.5 h-full"
                       >
                         {/* Header - matches WordProgressCard header */}
                         <div className="flex items-center gap-1 pb-1 border-b border-black/10">
                            <svg className="w-3 h-3 text-[#8B80F9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                               <path d="M23 6l-9.5 9.5-5-5L1 18" />
                               <path d="M17 6h6v6" />
                            </svg>
                            <div className="text-[9px] font-black">Learning Progress</div>
                         </div>
                         
                         {/* Words Due Today - Full Width (peach bg like real app) */}
                         <div className="bg-[#FFD8C4] rounded-lg border-2 border-black p-2 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <div className="bg-white p-1 rounded-full border border-black">
                                  <svg className="w-3 h-3 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                     <circle cx="12" cy="12" r="10" />
                                     <line x1="12" y1="8" x2="12" y2="12" />
                                     <line x1="12" y1="16" x2="12.01" y2="16" />
                                  </svg>
                               </div>
                               <div>
                                  <div className="text-[6px] font-bold text-black/60 uppercase">Words Due Today</div>
                                  <div className="text-[16px] font-black text-red-600 leading-none">47</div>
                               </div>
                            </div>
                            <div className="bg-white px-2 py-1 rounded border-2 border-black text-[7px] font-bold flex items-center gap-1">
                               <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                               Review
                            </div>
                         </div>

                         {/* Stats Grid - 3 columns like real app */}
                         <div className="grid grid-cols-3 gap-1 flex-1">
                            {/* Total Words (white) */}
                            <div className="bg-white rounded-lg border-2 border-black p-1.5">
                               <div className="flex items-center gap-0.5 mb-0.5">
                                  <svg className="w-2 h-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                     <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                     <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                  </svg>
                                  <div className="text-[5px] font-bold text-gray-500 uppercase">Total</div>
                               </div>
                               <div className="text-[14px] font-black leading-none">2,450</div>
                            </div>

                            {/* Learned (mint #C9E4DE) */}
                            <div className="bg-[#C9E4DE] rounded-lg border-2 border-black p-1.5">
                               <div className="flex items-center gap-0.5 mb-0.5">
                                  <svg className="w-2 h-2 text-green-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                     <circle cx="12" cy="12" r="10" />
                                     <circle cx="12" cy="12" r="6" />
                                     <circle cx="12" cy="12" r="2" />
                                  </svg>
                                  <div className="text-[5px] font-bold text-green-800/70 uppercase">Learned</div>
                               </div>
                               <div className="text-[14px] font-black text-green-900 leading-none">1,247</div>
                               <div className="text-[5px] font-bold text-green-800/70">51%</div>
                            </div>

                            {/* Unlearned (blue #C6DEF1) */}
                            <div className="bg-[#C6DEF1] rounded-lg border-2 border-black p-1.5">
                               <div className="flex items-center gap-0.5 mb-0.5">
                                  <svg className="w-2 h-2 text-blue-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                     <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                     <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                  </svg>
                                  <div className="text-[5px] font-bold text-blue-800/70 uppercase">Unlearned</div>
                               </div>
                               <div className="text-[14px] font-black text-blue-900 leading-none">1,203</div>
                            </div>

                            {/* Mastered (yellow #FAEDCB) */}
                            <div className="bg-[#FAEDCB] rounded-lg border-2 border-black p-1.5">
                               <div className="flex items-center gap-0.5 mb-0.5">
                                  <svg className="w-2 h-2 text-yellow-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                     <circle cx="12" cy="8" r="7" />
                                     <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                                  </svg>
                                  <div className="text-[5px] font-bold text-yellow-800/70 uppercase">Mastered</div>
                               </div>
                               <div className="text-[14px] font-black text-yellow-900 leading-none">312</div>
                               <div className="text-[5px] font-bold text-yellow-800/70">13%</div>
                            </div>

                            {/* Current Streak (white + flame) */}
                            <div className="bg-white rounded-lg border-2 border-black p-1.5">
                               <div className="flex items-center gap-0.5 mb-0.5">
                                  <svg className="w-2 h-2 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                                     <path d="M12 23c-3.866 0-7-3.134-7-7 0-2.5 1.5-4.5 3-6 0 0 .5 1.5 2 2.5 0-3.5 3-6.5 5-8 0 0 1 2 1 4 1.5-1 2-3 2-3 1.5 2 2 4 2 6.5 0 3.866-3.134 7-7 7h-1z"/>
                                  </svg>
                                  <div className="text-[5px] font-bold text-gray-500 uppercase">Streak</div>
                               </div>
                               <div className="text-[14px] font-black leading-none">12</div>
                               <div className="text-[5px] font-bold text-gray-500">days</div>
                            </div>

                            {/* Reviewed Today (white) */}
                            <div className="bg-white rounded-lg border-2 border-black p-1.5">
                               <div className="flex items-center gap-0.5 mb-0.5">
                                  <svg className="w-2 h-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                     <line x1="16" y1="2" x2="16" y2="6" />
                                     <line x1="8" y1="2" x2="8" y2="6" />
                                     <line x1="3" y1="10" x2="21" y2="10" />
                                  </svg>
                                  <div className="text-[5px] font-bold text-gray-500 uppercase">Today</div>
                               </div>
                               <div className="text-[14px] font-black leading-none">23</div>
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
