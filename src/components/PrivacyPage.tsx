import { motion } from "framer-motion";
import { Shield, Lock, Database, Server, Cookie } from "lucide-react";

export function PrivacyPage() {
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
            Privacy <span className="bg-pastel-mint px-2 neobrutalism-border inline-block transform -rotate-1">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            Your data belongs to you. Period. I built Ajile as a local-first application because I believe language learning should be private.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Key Principles Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-white neobrutalism-border rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
               <div className="w-10 h-10 bg-pastel-purple neobrutalism-border rounded-lg flex items-center justify-center mb-4">
                 <Database className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-black mb-2">Local Storage</h3>
               <p className="text-muted-foreground">
                 All your data (SRS progress, mined sentences, settings) is stored locally on your device in a SQLite database.
               </p>
            </div>

            <div className="p-6 bg-white neobrutalism-border rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
               <div className="w-10 h-10 bg-pastel-blue neobrutalism-border rounded-lg flex items-center justify-center mb-4">
                 <Server className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-black mb-2">No Servers</h3>
               <p className="text-muted-foreground">
                 Ajile does not send your learning data to any remote server. It works completely offline after the initial dictionary download.
               </p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="bg-white p-8 rounded-2xl neobrutalism-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-8">
            
            <section>
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" /> Data Collection
              </h2>
              <p className="text-muted-foreground mb-4">
                The Ajile desktop application does <strong>not</strong> collect, store, or transmit any personal data.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>No account registration required</li>
                <li>No usage tracking or analytics in the desktop app</li>
                <li>No telemetry data sent to me or third parties</li>
              </ul>
            </section>

            <div className="h-px bg-black/10 my-8"></div>

            <section>
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Cookie className="w-6 h-6" /> Website Analytics
              </h2>
              <p className="text-muted-foreground mb-4">
                On this website (ajile.app), I use a privacy-focused analytics tool called <a href="https://umami.is" target="_blank" className="text-primary font-bold hover:underline">Umami</a>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>It does <strong>not</strong> use cookies</li>
                <li>It does not track you across other websites</li>
                <li>All data is anonymized and compliant with GDPR/CCPA</li>
                <li>I use this solely to understand how many people visit the site and download the app</li>
              </ul>
            </section>

            <div className="h-px bg-black/10 my-8"></div>

            <section>
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6" /> Third Party Services
              </h2>
              <p className="text-muted-foreground mb-4">
                The application connects to the internet only for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Downloading dictionary data (from GitHub Releases)</li>
                <li> <span className="text-primary font-bold hover:underline">[SOON]</span>  Checking for app updates (via Tauri's built-in updater, querying GitHub)</li>
              </ul>
            </section>

            <div className="h-px bg-black/10 my-8"></div>

            <section>
              <h2 className="text-2xl font-black mb-4">Contact</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy, please open an issue on <a href="https://github.com/fmgono/ajile" className="text-primary font-bold hover:underline">GitHub</a> or contact me directly.
              </p>
            </section>

          </div>
          
          <div className="text-center text-sm text-muted-foreground pt-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

