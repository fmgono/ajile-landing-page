import { motion } from "framer-motion";
import { Scale, FileText, AlertTriangle, Copyright } from "lucide-react";

export function TermsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-pastel-bg relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-foreground"
          >
            Terms of <span className="bg-pastel-blue px-2 neobrutalism-border inline-block transform rotate-1">Service</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            By using Ajile, you agree to these terms. I keep them simple because nobody likes reading legal jargon.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-2xl neobrutalism-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-8"
        >
          
          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
              <Scale className="w-6 h-6" /> 1. Usage
            </h2>
            <p className="text-muted-foreground mb-4">
              Ajile is free software. You are free to use it for personal or commercial purposes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>You may download and install Ajile on any compatible device.</li>
              <li>You are responsible for the content (dictionaries, Anki decks) you import into the application.</li>
            </ul>
          </section>

          <div className="h-px bg-black/10 my-8"></div>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" /> 2. Disclaimer of Warranty
            </h2>
            <p className="text-muted-foreground mb-4">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
            </p>
            <p className="text-muted-foreground">
              In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
            </p>
          </section>

          <div className="h-px bg-black/10 my-8"></div>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" /> 3. Third-Party Content
            </h2>
            <p className="text-muted-foreground mb-4">
              Ajile uses offline dictionary data from third-party sources. I do not own or create this dictionary content.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>JMdict</strong> is the property of the <strong>Electronic Dictionary Research and Development Group (EDRDG)</strong>. I use it under their Creative Commons Attribution-ShareAlike License.</li>
              <li><strong>Jitendex</strong> is created by <strong>Stephen Kraus (stephenmk)</strong> and incorporates material from JMdict and other sources. I use it under the Creative Commons Attribution-ShareAlike License.</li>
              <li>You are responsible for complying with the licenses and terms of any third-party data you use with Ajile.</li>
            </ul>
          </section>

          <div className="h-px bg-black/10 my-8"></div>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
              <Copyright className="w-6 h-6" /> 4. Intellectual Property
            </h2>
            <p className="text-muted-foreground mb-4">
              The Ajile application code, the "Ajile" name, and logo are the property of Fathan Margono.
            </p>
          </section>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-black/10 text-sm text-muted-foreground text-center">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
