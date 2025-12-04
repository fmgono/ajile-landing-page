import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

export function InteractiveDemo() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFurigana, setShowFurigana] = useState(false);

  return (
    <section className="py-20 px-4 bg-pastel-bg overflow-hidden">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-black">Experience the Difference.</h2>
          <p className="text-lg text-muted-foreground">
            Most apps just show you a word. Ajile gives you the full picture. Test your recall with our smart flashcards that include context sentences, native audio (simulated here), and customizable hints.
          </p>
          
          <div className="space-y-4">
             <div className="flex items-center gap-4 p-4 bg-white rounded-lg neobrutalism-border neobrutalism-shadow-sm">
                <div className="w-8 h-8 bg-pastel-mint rounded-full flex items-center justify-center font-bold">1</div>
                <p className="font-medium">See the sentence first (Contextual Learning)</p>
             </div>
             <div className="flex items-center gap-4 p-4 bg-white rounded-lg neobrutalism-border neobrutalism-shadow-sm">
                <div className="w-8 h-8 bg-pastel-purple rounded-full flex items-center justify-center font-bold">2</div>
                <p className="font-medium">Toggle furigana if you're stuck</p>
             </div>
             <div className="flex items-center gap-4 p-4 bg-white rounded-lg neobrutalism-border neobrutalism-shadow-sm">
                <div className="w-8 h-8 bg-pastel-peach rounded-full flex items-center justify-center font-bold">3</div>
                <p className="font-medium">Reveal to check your answer</p>
             </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md perspective-1000">
          <div className="relative w-full aspect-[3/2]">
            <motion.div 
              className="w-full h-full absolute"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of Card */}
              <div 
                className="absolute inset-0 bg-white rounded-xl neobrutalism-border-thick neobrutalism-shadow-lg p-8 flex flex-col justify-center items-center text-center backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="mb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">New Word</div>
                <h3 className="text-5xl font-black mb-4">猫</h3>
                
                <div className="mt-8 w-full bg-gray-100 p-4 rounded-lg text-lg relative group cursor-pointer" onClick={() => setShowFurigana(!showFurigana)}>
                  <p>
                    <span className="relative inline-block">
                      {showFurigana && <span className="absolute -top-3 left-0 w-full text-xs text-center text-gray-500">わたし</span>}
                      私
                    </span>
                    は
                    <span className="relative inline-block font-bold text-primary">
                       {showFurigana && <span className="absolute -top-3 left-0 w-full text-xs text-center text-gray-500">ねこ</span>}
                       猫
                    </span>
                    が
                    <span className="relative inline-block">
                       {showFurigana && <span className="absolute -top-3 left-0 w-full text-xs text-center text-gray-500">す</span>}
                       好
                    </span>
                    きです。
                  </p>
                  <span className="text-xs text-gray-400 mt-2 block">(Click to toggle readings)</span>
                </div>

                <button 
                  onClick={() => setIsFlipped(true)}
                  className="mt-8 px-6 py-2 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
                >
                  Show Answer
                </button>
              </div>

              {/* Back of Card */}
              <div 
                className="absolute inset-0 bg-pastel-purple rounded-xl neobrutalism-border-thick neobrutalism-shadow-lg p-8 flex flex-col justify-center items-center text-center"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <h3 className="text-4xl font-black mb-2">Neko</h3>
                <p className="text-xl text-gray-700 mb-6">Cat</p>
                
                <div className="w-full h-1 bg-black/10 mb-6"></div>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                   <button onClick={() => setIsFlipped(false)} className="p-3 bg-red-400 text-black font-bold rounded-lg neobrutalism-border hover:bg-red-500 transition-colors">Again</button>
                   <button onClick={() => setIsFlipped(false)} className="p-3 bg-green-400 text-black font-bold rounded-lg neobrutalism-border hover:bg-green-500 transition-colors">Good</button>
                </div>
                
                <button 
                   onClick={() => setIsFlipped(false)}
                   className="absolute top-4 right-4 text-black/50 hover:text-black"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

