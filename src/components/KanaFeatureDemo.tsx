import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCircle2, RotateCcw, Trophy, ArrowRight, XCircle, GraduationCap, Dumbbell, Layers, Grid, PlayCircle, Star, Sparkles, Volume2, HelpCircle } from "lucide-react";
import ConfettiGenerator from "confetti-js";

// Types
type KanaQuestion = {
  kana: string;
  romaji: string;
  options: string[];
  type: "Hiragana" | "Katakana";
};

type QuizState = "start" | "quiz" | "result";

const SAMPLE_QUESTIONS: KanaQuestion[] = [
  { kana: "あ", romaji: "a", options: ["a", "i", "u", "e"], type: "Hiragana" },
  { kana: "か", romaji: "ka", options: ["sa", "ka", "ta", "na"], type: "Hiragana" },
  { kana: "さ", romaji: "sa", options: ["shi", "chi", "sa", "ha"], type: "Hiragana" },
  { kana: "た", romaji: "ta", options: ["ni", "ta", "ne", "to"], type: "Hiragana" },
  { kana: "な", romaji: "na", options: ["na", "ma", "ha", "ra"], type: "Hiragana" },
];

export function KanaFeatureDemo() {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  // Confetti canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Current question
  const currentQuestion = SAMPLE_QUESTIONS[currentQuestionIndex];

  useEffect(() => {
    if (quizState === "result" && canvasRef.current) {
      const confettiSettings = { target: canvasRef.current, max: 80, size: 1, animate: true, props: ["circle", "square", "triangle", "line"], colors: [[165,104,246],[23,190,187],[252,186,3],[255,107,107]], clock: 25 };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      
      return () => confetti.clear();
    }
  }, [quizState]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple clicks
    
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.romaji;
    setIsCorrect(correct);
    
    if (correct) setScore(s => s + 1);

    // Wait a bit then move to next or results
    setTimeout(() => {
      if (currentQuestionIndex < SAMPLE_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setQuizState("result");
      }
    }, 1500);
  };

  const handlePass = () => {
      if (selectedAnswer) return;
      setSelectedAnswer("passed");
      setIsCorrect(false);
      
      setTimeout(() => {
        if (currentQuestionIndex < SAMPLE_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
        } else {
            setQuizState("result");
        }
      }, 1500);
  };

  const resetQuiz = () => {
    setQuizState("start");
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <section className="py-24 px-4 bg-white overflow-hidden border-y-2 border-black">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-pastel-mint neobrutalism-border rounded-full text-sm font-bold mb-2 neobrutalism-shadow-sm">
             🎌 Master the Basics
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Learn Hiragana & Katakana in Record Time.
          </h2>
          <p className="text-xl text-muted-foreground">
            Forget boring tables. Learn through active recall with our built-in Kana quizzes. 
            Get instant feedback, track your weak spots, and build muscle memory fast.
          </p>
          
          <ul className="space-y-4">
            {[
              "Smart distractors based on similar-looking kana",
              "Audio pronunciation for every character",
              "Stroke order animations (coming soon)",
              "Detailed progress tracking"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg font-medium">
                <div className="w-6 h-6 rounded-full bg-pastel-purple border-2 border-black flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-black stroke-[4]" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <button className="hidden lg:flex items-center gap-2 text-lg font-bold border-b-2 border-black hover:text-primary transition-colors">
            Explore all features <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Demo Area */}
        <div className="relative">
          {/* Decorative Elements behind */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pastel-yellow rounded-full border-2 border-black z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-pastel-peach rounded-full border-2 border-black z-0"></div>

          <div className="relative z-10 bg-white rounded-2xl neobrutalism-border-thick neobrutalism-shadow-lg overflow-hidden min-h-[500px] lg:min-h-[600px] flex flex-col">
            
            {/* Header (App Style) */}
            <div className="bg-white border-b-2 border-black p-4 flex justify-between items-center">
              <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 border border-black"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 border border-black"></div>
              </div>
              <div className="text-sm font-medium">
                 {quizState === "quiz" ? `Question ${currentQuestionIndex + 1} / ${SAMPLE_QUESTIONS.length}` : "Kana Mastery"}
              </div>
              <div className="w-8"></div> {/* Spacer for centering */}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col relative w-full bg-background/50">
              
              <AnimatePresence mode="wait">
                {quizState === "start" && (
                  <motion.div 
                    key="start"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col h-full p-4 overflow-hidden"
                  >
                    {/* Hero Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl neobrutalism-border neobrutalism-shadow mb-6">
                      <div className="space-y-1">
                        <h1 className="text-2xl font-black tracking-tight flex items-center gap-2">
                          <GraduationCap className="h-6 w-6" />
                          Kana Mastery
                          <button className="ml-1 rounded-full text-muted-foreground hover:text-primary">
                            <HelpCircle className="h-5 w-5" />
                          </button>
                        </h1>
                        <p className="text-muted-foreground text-sm max-w-sm leading-tight">
                          Master Hiragana and Katakana through interactive lessons.
                        </p>
                      </div>
                      <button 
                        onClick={() => setQuizState("quiz")}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg neobrutalism-border neobrutalism-shadow hover:translate-y-0.5 hover:shadow-none transition-all"
                      >
                        <Dumbbell className="h-4 w-4" />
                        Start Practice
                      </button>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                        {/* View Toggle */}
                        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg border-2 border-transparent">
                            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-xs font-bold shadow-sm">
                                <Layers className="h-3 w-3" />
                                Lessons
                            </button>
                            <button className="flex items-center gap-1.5 px-3 py-1.5 text-muted-foreground rounded-md text-xs font-bold hover:bg-white/50">
                                <Grid className="h-3 w-3" />
                                Reference
                            </button>
                        </div>

                        {/* Kana Type Toggle */}
                        <div className="flex gap-1 bg-gray-100/50 p-1 rounded-lg neobrutalism-border">
                            <button className="px-4 py-1.5 bg-white rounded-md text-xs font-bold shadow-sm">
                                Hiragana
                            </button>
                            <button className="px-4 py-1.5 text-muted-foreground rounded-md text-xs font-bold hover:bg-white/50">
                                Katakana
                            </button>
                        </div>
                    </div>

                    {/* Lessons Grid Mock */}
                    <div className="grid grid-cols-1 gap-4 overflow-y-auto pb-4">
                        {/* Row 1: Vowels */}
                        <div className="bg-green-50 rounded-lg neobrutalism-border p-4 relative overflow-hidden group hover:translate-y-[-2px] hover:neobrutalism-shadow transition-all duration-300">
                             <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-black">Vowels (Base)</h3>
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                             </div>
                             <div className="flex gap-2 mb-3 text-2xl font-bold">
                                <span className="text-[#FFD700] drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]">あ</span>
                                <span className="text-[#FFD700] drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]">い</span>
                                <span className="text-[#FFD700] drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]">う</span>
                                <span className="text-[#FFD700] drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]">え</span>
                                <span className="text-[#FFD700] drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]">お</span>
                             </div>
                             <div className="flex gap-2 mb-3">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFD700]/20 text-[#B8860B] text-[10px] font-bold rounded-full border border-[#FFD700]/30">
                                    <Star className="h-2 w-2" /> 5 Mastered
                                </span>
                             </div>
                             <div className="space-y-3">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase">
                                        <span>Mastery</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-full" />
                                    </div>
                                </div>
                                <button onClick={() => setQuizState("quiz")} className="w-full py-2 bg-white border-2 border-black rounded-md text-xs font-bold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <RotateCcw className="h-3 w-3" /> Review Lesson
                                </button>
                             </div>
                        </div>

                        {/* Row 2: K-Column */}
                        <div className="bg-white rounded-lg neobrutalism-border p-4 relative overflow-hidden group hover:translate-y-[-2px] hover:neobrutalism-shadow transition-all duration-300">
                             <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-black">The "K" Column</h3>
                             </div>
                             <div className="flex gap-2 mb-3 text-2xl font-bold">
                                <span className="text-[#8B80F9]">か</span>
                                <span className="text-[#8B80F9]">き</span>
                                <span className="text-[#8B80F9]">く</span>
                                <span className="text-muted-foreground/30">け</span>
                                <span className="text-muted-foreground/30">こ</span>
                             </div>
                             <div className="flex gap-2 mb-3">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#8B80F9]/20 text-[#8B80F9] text-[10px] font-bold rounded-full border border-[#8B80F9]/30">
                                    <Sparkles className="h-2 w-2" /> 3 Learning
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-full">
                                    2 New
                                </span>
                             </div>
                             <div className="space-y-3">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase">
                                        <span>Mastery</span>
                                        <span>30%</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[30%]" />
                                    </div>
                                </div>
                                <button onClick={() => setQuizState("quiz")} className="w-full py-2 bg-black text-white border-2 border-black rounded-md text-xs font-bold hover:bg-primary hover:border-black transition-colors flex items-center justify-center gap-2">
                                    <PlayCircle className="h-3 w-3" /> Continue Lesson
                                </button>
                             </div>
                        </div>
                    </div>

                  </motion.div>
                )}

                {quizState === "quiz" && (
                  <motion.div 
                    key="quiz"
                    className="w-full h-full flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    {/* Main Question Area (Centered) */}
                    <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
                        <div className="text-center space-y-6 w-full">
                             <div className="text-[100px] lg:text-[120px] font-bold leading-none mb-2">
                                {currentQuestion.kana}
                             </div>
                             <div className="text-base text-muted-foreground uppercase tracking-wider">
                                {currentQuestion.type}
                             </div>
                        </div>

                         {/* Feedback Display (In-place like real app) */}
                        <AnimatePresence>
                            {selectedAnswer && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className={`mt-8 p-4 border-2 rounded-md w-full max-w-xs mx-auto ${
                                        isCorrect 
                                            ? "bg-green-100 border-green-500" 
                                            : "bg-red-100 border-red-500"
                                    }`}
                                >
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        {isCorrect ? (
                                            <>
                                                <Check className="h-6 w-6 text-green-600" />
                                                <span className="text-lg font-bold text-green-600">Correct!</span>
                                            </>
                                        ) : (
                                            <>
                                                <XCircle className="h-6 w-6 text-red-600" />
                                                <span className="text-lg font-bold text-red-600">Incorrect</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="text-center text-sm font-semibold">
                                        Correct answer: <span className="text-primary uppercase">{currentQuestion.romaji}</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer (Options) */}
                    <div className="p-6 border-t-2 border-black/10 bg-gray-50">
                        <div className="max-w-lg mx-auto flex items-start gap-4 justify-center">
                             {/* Multiple Choice Options */}
                             <div className="grid grid-cols-2 gap-3 w-full">
                                {currentQuestion.options.map((option, index) => {
                                    const isSelected = selectedAnswer === option;
                                    
                                    return (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswer(option)}
                                            disabled={!!selectedAnswer}
                                            className={`
                                                relative h-12 text-left flex items-center px-4 rounded-md border-2 font-medium transition-all
                                                ${isSelected 
                                                    ? "bg-black text-white border-black" 
                                                    : "bg-white border-black hover:bg-gray-100 neobrutalism-shadow active:translate-y-[2px] active:shadow-none"
                                                }
                                                ${selectedAnswer && !isSelected ? "opacity-50" : ""}
                                            `}
                                        >
                                            <span className={`absolute left-3 text-xs font-bold ${isSelected ? "text-white/60" : "text-black/40"}`}>
                                                {index + 1}
                                            </span>
                                            <span className="ml-6 uppercase">{option}</span>
                                        </button>
                                    );
                                })}
                             </div>

                             {/* Pass Button */}
                             <button
                                onClick={handlePass}
                                disabled={!!selectedAnswer}
                                className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-black rounded-md neobrutalism-shadow active:translate-y-[2px] active:shadow-none h-12 px-6 font-bold disabled:opacity-50"
                             >
                                Pass
                             </button>
                        </div>
                         <p className="text-xs text-center text-muted-foreground mt-3">
                            Select the correct Romaji
                        </p>
                    </div>
                  </motion.div>
                )}

                {quizState === "result" && (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center w-full h-full flex flex-col items-center justify-center p-8 relative z-10"
                  >
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
                    
                    <div className="w-24 h-24 bg-pastel-yellow rounded-full neobrutalism-border mx-auto mb-6 flex items-center justify-center animate-bounce">
                      <Trophy className="w-12 h-12 text-black" />
                    </div>
                    
                    <h3 className="text-3xl font-black mb-2">Quiz Complete!</h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      You scored <span className="font-bold text-black">{score}</span> / {SAMPLE_QUESTIONS.length}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8 max-w-xs mx-auto w-full">
                        <div className="bg-green-100 p-4 rounded-xl border-2 border-green-200">
                            <div className="text-2xl font-bold text-green-700">{Math.round((score/SAMPLE_QUESTIONS.length)*100)}%</div>
                            <div className="text-xs font-bold text-green-600 uppercase">Accuracy</div>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-xl border-2 border-blue-200">
                            <div className="text-2xl font-bold text-blue-700">0:45</div>
                            <div className="text-xs font-bold text-blue-600 uppercase">Time</div>
                        </div>
                    </div>

                    <button 
                      onClick={resetQuiz}
                      className="flex items-center justify-center gap-2 w-full max-w-xs mx-auto px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
