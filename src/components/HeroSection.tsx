import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
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
          className="relative p-6" // Added padding to prevent floating elements from being cut off
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
                      <div className="bg-[#8B80F9] text-white text-[10px] font-bold py-2 px-3 rounded-md border-2 border-black neobrutalism-shadow-sm">
                         Kana
                      </div>
                      <div className="bg-white text-black text-[10px] font-bold py-2 px-3 rounded-md border-2 border-black">
                         Word Up
                      </div>
                      <div className="bg-white text-black text-[10px] font-bold py-2 px-3 rounded-md border-2 border-black">
                         History
                      </div>
                      <div className="bg-white text-black text-[10px] font-bold py-2 px-3 rounded-md border-2 border-black">
                         Settings
                      </div>
                   </div>
                </div>
                
                {/* Main Content Area */}
                <div className="flex-1 bg-[#FAEDCB29] rounded-xl border-2 border-black neobrutalism-shadow-sm p-4 flex flex-col gap-3 overflow-hidden">
                   {/* Content Header */}
                   <div className="flex items-center justify-between">
                      <div className="h-5 w-24 bg-gray-200 rounded"></div>
                      <div className="h-5 w-16 bg-pastel-mint rounded border border-black/20"></div>
                   </div>
                   
                   {/* Kana Grid Placeholder */}
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
                            {i >= 10 && ''}
                         </div>
                      ))}
                   </div>

                   {/* Bottom Action Area */}
                   <div className="flex gap-2">
                      <div className="flex-1 h-8 bg-[#8B80F9] rounded-md border-2 border-black flex items-center justify-center">
                         <span className="text-white text-[10px] font-bold">Start Practice</span>
                      </div>
                   </div>
                </div>

             </div>
          </div>
             
          {/* Floating Elements - Now positioned outside the overflow:hidden container */}
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
        </motion.div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pastel-purple/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pastel-peach/30 rounded-full blur-3xl z-0"></div>
    </section>
  );
}
