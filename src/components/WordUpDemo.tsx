import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, BookOpen, Check, RotateCcw, Play, Pause, NotebookPen, AlertCircle, Image as ImageIcon, ArrowRight } from "lucide-react";

// Mock Data for the demo
const DEMO_WORDS = [
  {
    id: "1",
    word: "猫",
    reading: "ねこ",
    meaning: "Cat",
    type: "Noun",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    sentences: [
      {
        japanese: "猫が好きです。",
        translation: "I like cats.",
        highlight: "猫"
      },
      {
        japanese: "黒い猫を見ました。",
        translation: "I saw a black cat.",
        highlight: "猫"
      }
    ]
  },
  {
    id: "2",
    word: "食べる",
    reading: "たべる",
    meaning: "To eat",
    type: "Verb (Ichidan)",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    sentences: [
      {
        japanese: "朝ご飯を食べます。",
        translation: "I eat breakfast.",
        highlight: "食べ"
      }
    ]
  }
];

type LearnState = "intro" | "card" | "complete";

export function WordUpDemo() {
  const [learnState, setLearnState] = useState<LearnState>("intro");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentWord = DEMO_WORDS[currentWordIndex];

  // Simulate Audio Play
  const playAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 1500);
  };

  const handleRate = () => {
    if (currentWordIndex < DEMO_WORDS.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      setLearnState("complete");
    }
  };

  const resetDemo = () => {
    setLearnState("intro");
    setCurrentWordIndex(0);
  };

  return (
    <section className="py-24 px-4 bg-pastel-bg overflow-hidden">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Interactive Demo Area (Left Side for variation) */}
        <div className="order-2 lg:order-1 relative">
           {/* Background Blob */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl z-0 pointer-events-none"></div>

           {/* Updated container size to match KanaFeatureDemo style but keep aspect appropriate for word cards */}
           <div className="relative z-10 w-full mx-auto perspective-1000 min-h-[500px] lg:min-h-[600px]">
             <AnimatePresence mode="wait">
                
                {/* Intro Screen */}
                {learnState === "intro" && (
                  <motion.div 
                    key="intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-2xl neobrutalism-border-thick neobrutalism-shadow-lg p-8 text-center h-full min-h-[500px] flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-pastel-peach rounded-2xl neobrutalism-border flex items-center justify-center mb-6 rotate-6">
                      <BookOpen className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-3xl font-black mb-4">Word Up!</h3>
                    <p className="text-muted-foreground mb-8">
                      Ready to learn some new vocabulary? <br/>
                      We've prepared a quick set for you.
                    </p>
                    <button 
                      onClick={() => setLearnState("card")}
                      className="px-8 py-4 bg-black text-white font-bold text-xl rounded-xl hover:scale-105 transition-transform w-full max-w-md"
                    >
                      Start Learning
                    </button>
                  </motion.div>
                )}

                {/* Card Screen (Learn Phase Style) */}
                {learnState === "card" && (
                  <motion.div
                    key="card"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="relative w-full h-full bg-white rounded-2xl neobrutalism-border-thick neobrutalism-shadow-lg flex flex-col overflow-hidden min-h-[600px]"
                  >
                    {/* Fixed Header: Title & Audio (Matching LearnPhase.tsx style) */}
                    <div className="flex-shrink-0 px-6 py-4 bg-[#FAEDCB] border-b-2 border-black/5 z-10 flex justify-between items-center relative">
                        {/* Word Title */}
                        <div className="text-left">
                            <h3 className="text-5xl font-black block mb-1">{currentWord.word}</h3>
                            <p className="text-xl text-muted-foreground font-bold">{currentWord.reading}</p>
                        </div>

                        {/* Audio Player */}
                        <div className="flex flex-col items-center gap-2">
                            <button
                                onClick={playAudio}
                                className="bg-white border-2 border-black h-14 w-14 rounded-full flex items-center justify-center p-0 hover:bg-gray-50 neobrutalism-shadow-sm hover:translate-y-0.5 transition-all"
                            >
                                {isPlayingAudio ? (
                                    <Pause className="h-6 w-6 fill-current" />
                                ) : (
                                    <Play className="h-6 w-6 ml-1 fill-current" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Body: Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-white relative">
                        
                        {/* Image */}
                        <div className="flex justify-center w-full mb-6">
                            <div className="p-1.5 bg-white border-2 border-black rounded-xl neobrutalism-shadow-sm w-full max-w-md">
                                <img
                                    src={currentWord.imageUrl}
                                    alt={currentWord.word}
                                    className="w-full h-48 lg:h-64 object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Meaning */}
                        <div className="bg-white border-2 border-black rounded-xl p-6 neobrutalism-shadow-sm mb-6">
                            <div className="text-xs font-bold mb-1 uppercase tracking-wider text-gray-500">Meaning</div>
                            <div className="text-2xl font-bold leading-relaxed">{currentWord.meaning}</div>
                        </div>

                        {/* Example Sentences */}
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-gray-500">
                                <BookOpen className="h-4 w-4" />
                                <div className="text-xs font-bold uppercase tracking-wider">Example Sentences</div>
                            </div>
                            <div className="space-y-3">
                                {currentWord.sentences.map((sent, i) => (
                                    <div key={i} className="bg-white border-2 border-black rounded-xl neobrutalism-shadow-sm p-4 hover:translate-y-[-2px] transition-transform duration-200">
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                           <div className="flex-1">
                                                <div className="text-xl mb-1 font-medium block">
                                                    {/* Simplified Furigana simulation for demo */}
                                                    {sent.japanese.split(sent.highlight).map((part, idx, arr) => (
                                                        <span key={idx}>
                                                            {part}
                                                            {idx < arr.length - 1 && (
                                                                <span className="bg-yellow-100 rounded px-0.5">
                                                                    {sent.highlight}
                                                                </span>
                                                            )}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="text-sm text-muted-foreground italic mb-1">
                                                    {sent.translation}
                                                </div>
                                           </div>
                                           {/* Play button for sentence */}
                                            <div className="flex flex-col items-center gap-1">
                                                <button
                                                    className="neobrutalism-border h-10 w-10 rounded-full flex items-center justify-center p-0 hover:bg-gray-50 transition-colors bg-white"
                                                    onClick={() => {}} // No-op for demo
                                                >
                                                    <Play className="h-4 w-4 ml-0.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Fixed Footer: Review Buttons (Matching LearnPhase.tsx style) */}
                    <div className="flex-shrink-0 p-4 border-t-2 border-black/5 bg-[#FAEDCB]">
                        <div className="text-xs font-bold mb-3 text-center text-gray-500 uppercase tracking-wider">
                            When do you want to review it again?
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            <button
                                onClick={handleRate}
                                className="h-auto py-3 flex flex-col items-center justify-center gap-0.5 bg-[#FFD8C4] hover:bg-[#FFD8C4]/80 text-black border-2 border-black rounded-xl neobrutalism-shadow-sm hover:-translate-y-1 transition-all"
                            >
                                <span className="font-black text-base">Today</span>
                                <span className="text-[10px] font-bold opacity-60 uppercase tracking-wide">Hard</span>
                            </button>
                            <button
                                onClick={handleRate}
                                className="h-auto py-3 flex flex-col items-center justify-center gap-0.5 bg-[#FAEDCB] hover:bg-[#FAEDCB]/80 text-black border-2 border-black rounded-xl neobrutalism-shadow-sm hover:-translate-y-1 transition-all"
                            >
                                <span className="font-black text-base">Tomorrow</span>
                                <span className="text-[10px] font-bold opacity-60 uppercase tracking-wide">Medium</span>
                            </button>
                            <button
                                onClick={handleRate}
                                className="h-auto py-3 flex flex-col items-center justify-center gap-0.5 bg-[#C9E4DE] hover:bg-[#C9E4DE]/80 text-black border-2 border-black rounded-xl neobrutalism-shadow-sm hover:-translate-y-1 transition-all"
                            >
                                <span className="font-black text-base">3 Days</span>
                                <span className="text-[10px] font-bold opacity-60 uppercase tracking-wide">Good</span>
                            </button>
                            <button
                                onClick={handleRate}
                                className="h-auto py-3 flex flex-col items-center justify-center gap-0.5 bg-[#C6DEF1] hover:bg-[#C6DEF1]/80 text-black border-2 border-black rounded-xl neobrutalism-shadow-sm hover:-translate-y-1 transition-all"
                            >
                                <span className="font-black text-base">Next Week</span>
                                <span className="text-[10px] font-bold opacity-60 uppercase tracking-wide">Easy</span>
                            </button>
                        </div>
                    </div>
                  </motion.div>
                )}

                {/* Completion Screen */}
                {learnState === "complete" && (
                  <motion.div 
                    key="complete"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl neobrutalism-border-thick neobrutalism-shadow-lg p-8 text-center h-full min-h-[500px] flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-pastel-mint rounded-full neobrutalism-border flex items-center justify-center mb-6 animate-bounce">
                      <Check className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-3xl font-black mb-4">Session Complete!</h3>
                    <p className="text-muted-foreground mb-8">
                      You've reviewed {DEMO_WORDS.length} words. <br/>
                      Come back tomorrow to strengthen your memory.
                    </p>
                    <button 
                      onClick={resetDemo}
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-black text-black font-bold text-lg rounded-xl hover:bg-gray-100 w-full max-w-md"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Restart Demo
                    </button>
                  </motion.div>
                )}

             </AnimatePresence>
           </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-pastel-peach neobrutalism-border rounded-full text-sm font-bold mb-2 neobrutalism-shadow-sm">
             📚 Word Up!
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Flashcards that actually make sense.
          </h2>
          <p className="text-xl text-muted-foreground">
            Most SRS apps are ugly and boring. Ours is beautiful, context-rich, and designed to make vocabulary stick.
          </p>
          
          <div className="space-y-6">
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-pastel-blue neobrutalism-border flex items-center justify-center flex-shrink-0">
                   <ImageIcon className="w-6 h-6 text-black" />
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-1">Rich Media Context</h4>
                   <p className="text-muted-foreground">Every card comes with images and native audio. No more dry text-only learning.</p>
                </div>
             </div>

             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-pastel-purple neobrutalism-border flex items-center justify-center flex-shrink-0">
                   <BookOpen className="w-6 h-6 text-black" />
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-1">Sentence Mining</h4>
                   <p className="text-muted-foreground">See words used in real sentences. Understand the nuance, not just the definition.</p>
                </div>
             </div>
          </div>

          <button className="flex items-center gap-2 text-lg font-bold border-b-2 border-black hover:text-primary transition-colors pt-4">
            See how it works <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
