import { motion } from "framer-motion";
import { Check, Clock, Lightbulb, Construction } from "lucide-react";

export function RoadmapPage() {
  const roadmapItems = [
    {
      status: "In Progress",
      color: "bg-pastel-yellow",
      icon: <Construction className="w-5 h-5" />,
      items: [
        "Ajile Studio",
        ".ajile format (deck import/export)",
      ]
    },
    {
      status: "Coming Soon",
      color: "bg-pastel-mint",
      icon: <Clock className="w-5 h-5" />,
      items: [
        "Mobile Companion App (iOS/Android)",
        "Community Deck Sharing",
      ]
    },
    {
      status: "Future Ideas",
      color: "bg-pastel-purple",
      icon: <Lightbulb className="w-5 h-5" />,
      items: [
        "Cloud Sync (Optional)",
        "Ajile Web Extension!"
      ]
    },
    {
      status: "Completed",
      color: "bg-pastel-blue",
      icon: <Check className="w-5 h-5" />,
      items: [
        "Import Decks from Anki",
        "Offline Dictionary",
        "Local-first Architecture",
        "Auto Furigana Generation",
        "Context-aware Dictionary",
      ]
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 bg-pastel-bg relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-foreground"
          >
            Public <span className="bg-pastel-pink px-2 neobrutalism-border inline-block transform -rotate-1">Roadmap</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            I'm building Ajile in public. Here's what I'm working on right now and what's coming next. Have a suggestion? Let me know!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((column, colIndex) => (
            <motion.div
              key={column.status}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (colIndex * 0.1) }}
              className="flex flex-col gap-4"
            >
              <div className={`flex items-center gap-2 p-3 ${column.color} neobrutalism-border rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                {column.icon}
                <h3 className="font-black text-lg">{column.status}</h3>
              </div>

              <div className="space-y-4">
                {column.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (colIndex * 0.1) + (itemIndex * 0.05) }}
                    className="p-4 bg-white neobrutalism-border rounded-lg hover:-translate-y-1 transition-transform duration-200"
                  >
                    <p className="font-bold text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <div className="inline-block p-6 bg-white neobrutalism-border rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl">
                <h3 className="text-2xl font-black mb-2">Have a feature request?</h3>
                <p className="text-muted-foreground mb-4 font-medium">
                    I prioritize features based on user feedback. If you need something specific for your learning workflow, I want to hear about it.
                </p>
                <a 
                    href="https://github.com/fmgono/ajile/issues" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-pastel-purple text-black font-bold rounded-lg neobrutalism-border hover:-translate-y-1 transition-transform"
                >
                    Submit a Request
                </a>
             </div>
        </div>
      </div>
    </section>
  );
}
