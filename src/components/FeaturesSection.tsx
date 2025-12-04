import { Book, Brain, Sparkles, Zap, Database, Lock } from "lucide-react";
import { cn } from "../lib/utils";

const features = [
  {
    title: "Contextual Dictionary",
    description: "Don't just see definitions. See how words are used in real sentences from your own immersion content.",
    icon: Book,
    color: "bg-pastel-purple",
  },
  {
    title: "Smart SRS",
    description: "Spaced Repetition System that tracks your progress and prioritizes what you actually need to learn right now.",
    icon: Brain,
    color: "bg-pastel-peach",
  },
  {
    title: "Automated Furigana",
    description: "Instantly add reading aids to any Japanese text. Toggle them on/off as your reading ability improves.",
    icon: Sparkles,
    color: "bg-pastel-mint",
  },
  {
    title: "Instant Lookups",
    description: "Hover over any word to get definitions, pitch accents, and conjugation info immediately.",
    icon: Zap,
    color: "bg-pastel-yellow",
  },
  {
    title: "Sentence Mining",
    description: "One-click card creation. We grab the sentence, audio, and image for you automatically.",
    icon: Database,
    color: "bg-pastel-blue",
  },
  {
    title: "Privacy First",
    description: "Your learning data is yours. Ajile runs locally on your machine. No clouds, no tracking.",
    icon: Lock,
    color: "bg-pastel-pink",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Everything you need to become fluent.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed by learners, for learners. We fixed the frustrations of existing tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white neobrutalism-border neobrutalism-shadow hover:neobrutalism-shadow-lg transition-all group"
            >
              <div className={cn("w-12 h-12 rounded-lg neobrutalism-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", feature.color)}>
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

