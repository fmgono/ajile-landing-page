import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Volume2, BookOpen, Check } from "lucide-react";

// Types for our mock data
interface MockWord {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  type: string;
  imageUrl: string;
}

// Mock Data
const MOCK_DICTIONARY: Record<string, MockWord> = {
  "私": { id: "1", word: "私", reading: "わたし", meaning: "I; me", type: "Pronoun", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  "猫": { id: "2", word: "猫", reading: "ねこ", meaning: "Cat", type: "Noun", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  "好き": { id: "3", word: "好き", reading: "すき", meaning: "Like; fond of", type: "Na-adjective", imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  "です": { id: "4", word: "です", reading: "です", meaning: "To be (polite)", type: "Copula", imageUrl: "" },
};

export function InteractiveDemo() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ x: number, y: number } | null>(null);
  const [isAdded, setIsAdded] = useState<string[]>([]);

  const handleWordHover = (word: string, e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setPopupPosition({ x: rect.left, y: rect.top - 10 }); // Position above the word
    setHoveredWord(word);
  };

  const handleWordLeave = () => {
    // Delay closing slightly to allow moving to popup (if needed in real implementation)
    // In this demo, we keep it open if hovering the popup
    setHoveredWord(null);
  };

  const handleAddWord = (wordId: string) => {
    setIsAdded(prev => [...prev, wordId]);
  };

  const renderSentence = () => {
    const sentence = [
      { text: "私", dictKey: "私" },
      { text: "は", dictKey: null },
      { text: "猫", dictKey: "猫" },
      { text: "が", dictKey: null },
      { text: "好き", dictKey: "好き" },
      { text: "です", dictKey: null },
      { text: "。", dictKey: null }
    ];

    return (
      <div className="text-4xl font-medium leading-relaxed flex flex-wrap items-end gap-1 justify-center">
        {sentence.map((token, idx) => (
          token.dictKey ? (
            <span
              key={idx}
              className="cursor-pointer border-b-2 border-dashed border-blue-400 hover:bg-blue-50 transition-colors relative"
              onMouseEnter={(e) => handleWordHover(token.dictKey!, e)}
              onMouseLeave={handleWordLeave}
            >
              {token.text}
            </span>
          ) : (
            <span key={idx}>{token.text}</span>
          )
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 px-4 bg-white overflow-hidden border-b-2 border-black">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-pastel-yellow neobrutalism-border rounded-full text-sm font-bold mb-2 neobrutalism-shadow-sm">
             🔍 Instant Lookup
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Dictionary at your fingertips.
          </h2>
          <p className="text-xl text-muted-foreground">
            Stop switching context. Hover over any word in a sentence to instantly see its meaning, reading, and audio. One click adds it to your study deck.
          </p>
          
          <div className="space-y-6">
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-pastel-blue neobrutalism-border flex items-center justify-center flex-shrink-0">
                   <BookOpen className="w-6 h-6 text-black" />
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-1">Context-Aware Dictionary</h4>
                   <p className="text-muted-foreground">We identify the correct word boundaries and definitions, even for conjugated verbs.</p>
                </div>
             </div>

             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-pastel-purple neobrutalism-border flex items-center justify-center flex-shrink-0">
                   <Plus className="w-6 h-6 text-black" />
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-1">One-Click Mining</h4>
                   <p className="text-muted-foreground">Found a new word? Add it to your flashcards instantly, complete with the sentence you found it in.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Interactive Demo Area */}
        <div className="relative h-[500px] flex items-center justify-center bg-gray-50 rounded-2xl neobrutalism-border-thick neobrutalism-shadow-lg p-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* Main Sentence Display */}
          <div className="relative z-10 w-full max-w-lg text-center">
             <div className="mb-8 text-sm font-bold text-gray-400 uppercase tracking-widest">Try hovering over the words</div>
             {renderSentence()}
             <div className="mt-4 text-xl text-gray-500">I like cats.</div>
          </div>

          {/* Hover Popup (Simulated Portal) */}
          <AnimatePresence>
            {hoveredWord && popupPosition && MOCK_DICTIONARY[hoveredWord] && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute z-50 bg-white border-2 border-black rounded-xl shadow-xl p-4 w-72 text-left neobrutalism-shadow pointer-events-auto" 
                style={{ 
                    left: '50%', 
                    top: '30%', // Fixed position for demo stability
                    transform: 'translateX(-50%)' 
                }}
                onMouseEnter={() => setHoveredWord(hoveredWord)} // Keep open when hovering the popup
                onMouseLeave={() => setHoveredWord(null)} // Close when leaving the popup
              >
                {/* Word Header */}
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <div className="text-3xl font-black">{MOCK_DICTIONARY[hoveredWord].word}</div>
                        <div className="text-lg text-muted-foreground font-bold">{MOCK_DICTIONARY[hoveredWord].reading}</div>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-full">
                        <Volume2 className="w-5 h-5 text-primary" />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-pastel-blue text-xs font-bold rounded border border-black/10">
                            {MOCK_DICTIONARY[hoveredWord].type}
                        </span>
                    </div>
                    
                    {MOCK_DICTIONARY[hoveredWord].imageUrl && (
                        <img 
                            src={MOCK_DICTIONARY[hoveredWord].imageUrl} 
                            alt="Word context" 
                            className="w-full h-32 object-cover rounded-lg border border-gray-200"
                        />
                    )}

                    <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Meaning</div>
                        <div className="font-medium">{MOCK_DICTIONARY[hoveredWord].meaning}</div>
                    </div>
                </div>

                {/* Action */}
                <button 
                    className={`w-full py-2 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors border-2 border-black
                        ${isAdded.includes(MOCK_DICTIONARY[hoveredWord].id) 
                            ? "bg-green-100 text-green-800 border-green-500" 
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }
                    `}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent bubble
                        handleAddWord(MOCK_DICTIONARY[hoveredWord].id);
                    }}
                >
                    {isAdded.includes(MOCK_DICTIONARY[hoveredWord].id) ? (
                        <>
                            <Check className="w-4 h-4" />
                            Added to Deck
                        </>
                    ) : (
                        <>
                            <Plus className="w-4 h-4" />
                            Add to Flashcards
                        </>
                    )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
