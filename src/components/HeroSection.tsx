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
          className="relative"
        >
          {/* Mock App Window */}
          <div className="bg-white rounded-xl neobrutalism-border-thick neobrutalism-shadow-lg overflow-hidden aspect-[4/3] relative">
             <div className="h-8 bg-pastel-purple border-b-2 border-black flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 border border-black"></div>
             </div>
             <div className="p-6 flex flex-col gap-4 bg-gray-50 h-full">
                {/* Fake UI Content to simulate the app */}
                <div className="flex gap-4">
                   <div className="w-1/3 bg-white neobrutalism-border p-4 rounded-lg h-32 flex flex-col gap-2">
                      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                      <div className="h-20 w-full bg-gray-100 rounded border-2 border-dashed border-gray-300"></div>
                   </div>
                   <div className="w-2/3 bg-white neobrutalism-border p-4 rounded-lg h-32 flex flex-col gap-2">
                      <div className="h-6 w-3/4 bg-pastel-blue rounded border border-black/20"></div>
                      <div className="h-4 w-1/2 bg-gray-200 rounded mt-2"></div>
                      <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                   </div>
                </div>
                <div className="flex-1 bg-white neobrutalism-border p-4 rounded-lg flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                   <div className="text-center z-10">
                      <h3 className="text-xl font-bold mb-2">こんにちは</h3>
                      <p className="text-gray-500">Konnichiwa</p>
                   </div>
                </div>
             </div>
             
             {/* Floating Elements */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -right-4 top-1/4 bg-pastel-yellow p-4 rounded-lg neobrutalism-border neobrutalism-shadow rotate-3 z-20"
             >
                <span className="text-2xl">🎌</span>
             </motion.div>
             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute -left-4 bottom-1/4 bg-pastel-blue p-3 rounded-lg neobrutalism-border neobrutalism-shadow -rotate-2 z-20"
             >
                <span className="font-bold text-sm">Anki Compatible</span>
             </motion.div>
          </div>
        </motion.div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pastel-purple/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pastel-peach/30 rounded-full blur-3xl z-0"></div>
    </section>
  );
}

