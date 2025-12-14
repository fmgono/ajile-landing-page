import { Book, Brain, Sparkles, Zap, Database, Lock, Plus, Check, Search, BarChart3 } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-4 bg-background relative overflow-hidden border-b-2 border-black">
      {/* Decor */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-pastel-mint/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-pastel-purple/20 rounded-full blur-3xl -z-10"></div>

      <div className="container max-w-6xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            Everything you need <br />
            <span className="relative inline-block">
              <span className="relative z-10">to become fluent.</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-pastel-yellow -z-0 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
            Designed by learners, for learners. We fixed the frustrations of existing tools so you can focus on immersion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* 1. Contextual Dictionary (Big - 8 cols) */}
          <div className="col-span-1 md:col-span-8 group">
            <div className="h-full p-8 rounded-2xl bg-pastel-purple/30 border-2 border-black neobrutalism-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Book className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Contextual Dictionary</h3>
                  <p className="text-lg text-muted-foreground max-w-md">
                    Don't just see definitions. See how words are used in real sentences from your own immersion content.
                  </p>
                </div>
                
                {/* Visual: Mock Dictionary Entry */}
                <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1 group-hover:rotate-0 transition-transform duration-300 max-w-lg ml-auto">
                  <div className="flex items-baseline gap-3 mb-2 border-b border-black/10 pb-2">
                    <span className="text-2xl font-black">猫</span>
                    <span className="text-sm font-bold text-muted-foreground">【ねこ】</span>
                    <span className="text-xs bg-pastel-purple px-2 py-0.5 rounded-full border border-black font-bold">Noun</span>
                  </div>
                  <ol className="list-decimal list-inside text-sm space-y-1 font-medium">
                    <li>Cat; feline.</li>
                    <li>Geisha; prostitute (slang).</li>
                    <li>Wheelbarrow (argot).</li>
                  </ol>
                  <div className="mt-3 bg-gray-50 p-2 rounded border border-black/10 text-xs text-muted-foreground italic">
                    "吾輩は<span className="bg-pastel-purple/50 font-bold text-black px-1 rounded">猫</span>である。" - I am a cat.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Smart SRS (Small - 4 cols) */}
          <div className="col-span-1 md:col-span-4 group">
            <div className="h-full p-8 rounded-2xl bg-pastel-peach/30 border-2 border-black neobrutalism-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Smart SRS</h3>
                <p className="text-muted-foreground">
                  Spaced Repetition that prioritizes what you actually need to learn right now.
                </p>
              </div>
              
              {/* Visual: SRS Buttons */}
              <div className="absolute bottom-6 right-6 left-6">
                <div className="flex gap-2 justify-center">
                   <div className="flex-1 h-10 bg-white border-2 border-black rounded flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform group-hover:-translate-y-1 transition-transform duration-300 delay-0">
                      <span className="text-xs font-bold text-red-500">Hard</span>
                   </div>
                   <div className="flex-1 h-10 bg-white border-2 border-black rounded flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                      <span className="text-xs font-bold text-green-600">Good</span>
                   </div>
                   <div className="flex-1 h-10 bg-white border-2 border-black rounded flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform group-hover:-translate-y-1 transition-transform duration-300 delay-150">
                      <span className="text-xs font-bold text-blue-500">Easy</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Automated Furigana (Small - 4 cols) */}
          <div className="col-span-1 md:col-span-4 group">
            <div className="h-full p-8 rounded-2xl bg-pastel-mint/30 border-2 border-black neobrutalism-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Auto Furigana</h3>
                <p className="text-muted-foreground">
                  Instantly add reading aids to any Japanese text.
                </p>
              </div>

              {/* Visual: Furigana Text */}
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white border-2 border-black rounded-lg p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-xl font-bold leading-relaxed text-center flex justify-center items-end gap-0.5">
                       <span className="flex flex-col items-center">
                          <span className="text-[10px] text-pastel-mint-darker font-black h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">かん</span>
                          <span>漢</span>
                       </span>
                       <span className="flex flex-col items-center">
                          <span className="text-[10px] text-pastel-mint-darker font-black h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">じ</span>
                          <span>字</span>
                       </span>
                       <span className="pb-[2px]">が</span>
                       <span className="flex flex-col items-center">
                          <span className="text-[10px] text-pastel-mint-darker font-black h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">よ</span>
                          <span>読</span>
                       </span>
                       <span className="pb-[2px]">める！</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* 4. Sentence Mining (Big - 8 cols) */}
          <div className="col-span-1 md:col-span-8 group">
            <div className="h-full p-8 rounded-2xl bg-pastel-blue/30 border-2 border-black neobrutalism-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center h-full relative z-10">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Instant Sentence Mining</h3>
                  <p className="text-lg text-muted-foreground">
                    One-click card creation. We grab the sentence, audio, and image for you automatically.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-lg text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                     <Plus className="w-4 h-4" />
                     <span>Add to Anki Deck</span>
                  </div>
                </div>
                
                {/* Visual: Card Creation Flow */}
                <div className="flex-1 w-full relative">
                   <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                      <div className="flex gap-3 mb-3">
                         <div className="w-16 h-16 bg-gray-100 rounded border border-black/10 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-pastel-blue/50"></div>
                         </div>
                         <div className="flex-1">
                            <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 w-full bg-gray-100 rounded mb-1"></div>
                            <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
                         </div>
                      </div>
                      <div className="absolute -top-3 -right-3 bg-green-400 text-black border-2 border-black px-3 py-1 rounded-full text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                         <Check className="w-3 h-3" />
                         Created!
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Instant Lookups (Half - 6 cols) */}
          <div className="col-span-1 md:col-span-6 group">
            <div className="h-full p-8 rounded-2xl bg-pastel-yellow/30 border-2 border-black neobrutalism-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                   <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                     <Zap className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">Instant Lookups</h3>
                   <p className="text-muted-foreground">
                     Hover over any word to get definitions, pitch accents, and conjugation info immediately.
                   </p>
                </div>
                
                {/* Visual: Hover Cursor */}
                <div className="mt-6 relative bg-white border-2 border-black rounded-lg p-4 max-w-sm mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                   <p className="text-lg font-serif">
                      ここに<span className="bg-pastel-yellow/50 decoration-2 underline decoration-black decoration-wavy cursor-pointer font-sans font-bold mx-1">言葉</span>がある。
                   </p>
                   <div className="absolute -bottom-2 right-8 transform translate-y-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                      <div className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                         Word • Noun
                      </div>
                   </div>
                   <div className="absolute top-1/2 left-[50%] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-6 h-6 fill-black stroke-white stroke-2 drop-shadow-md" viewBox="0 0 24 24" style={{ filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.5))" }}>
                         <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z" />
                      </svg>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Privacy First (Half - 6 cols) */}
          <div className="col-span-1 md:col-span-6 group">
            <div className="h-full p-8 rounded-2xl bg-pastel-pink/30 border-2 border-black neobrutalism-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 relative overflow-hidden flex flex-col justify-center items-center text-center">
              <div className="relative z-10">
                 <div className="w-16 h-16 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-6 mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-300">
                   <Lock className="w-8 h-8" />
                 </div>
                 <h3 className="text-3xl font-bold mb-3">Privacy First & Local</h3>
                 <p className="text-lg text-muted-foreground max-w-md mx-auto">
                   Your learning data is yours. Ajile runs locally on your machine. No clouds, no tracking, no monthly fees.
                 </p>
                 <div className="mt-6 flex justify-center gap-4 opacity-60">
                    <div className="flex items-center gap-1 text-xs font-bold uppercase"><Check className="w-4 h-4" /> Offline Ready</div>
                    <div className="flex items-center gap-1 text-xs font-bold uppercase"><Check className="w-4 h-4" /> Open Data</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
