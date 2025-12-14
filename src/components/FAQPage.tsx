import { motion } from "framer-motion";
import { HelpCircle, Apple, Monitor, Terminal, ChevronDown, AlertTriangle, Shield, Folder } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
}

function FAQItem({ question, answer, icon, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white neobrutalism-border rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center gap-4 hover:bg-pastel-bg/50 transition-colors"
      >
        {icon && (
          <div className="w-10 h-10 bg-pastel-purple neobrutalism-border rounded-lg flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
        <span className="text-lg font-black flex-1">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0">
          <div className="h-px bg-black/10 mb-4"></div>
          <div className="text-muted-foreground space-y-3">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export function FAQPage() {
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
            Frequently Asked <span className="bg-pastel-mint px-2 neobrutalism-border inline-block transform -rotate-1">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            Having trouble installing or opening Ajile? You're not alone. Here's how to fix the most common issues.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* macOS Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <div className="w-10 h-10 bg-pastel-purple neobrutalism-border rounded-lg flex items-center justify-center">
                <Apple className="w-5 h-5" />
              </div>
              macOS Issues
            </h2>

            <FAQItem
              question={`"Ajile" is damaged and can't be opened`}
              icon={<AlertTriangle className="w-5 h-5" />}
              defaultOpen={true}
              answer={
                <>
                  <p>
                    This is macOS Gatekeeper blocking apps downloaded from the internet that aren't notarized by Apple. 
                    Don't worry—the app isn't actually damaged!
                  </p>
                  <div className="bg-pastel-bg p-4 rounded-lg neobrutalism-border mt-3">
                    <p className="font-bold mb-2">Fix it with Terminal:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>Open <strong>Terminal</strong> (search in Spotlight or find it in Applications → Utilities)</li>
                      <li>Copy and paste this command:</li>
                    </ol>
                    <code className="block bg-black text-green-400 p-3 rounded-lg mt-2 text-sm font-mono overflow-x-auto">
                      xattr -cr /Applications/Ajile\ Desktop.app
                    </code>
                    <ol className="list-decimal list-inside space-y-2 ml-2 mt-2" start={3}>
                      <li>Press Enter and try opening the app again</li>
                    </ol>
                  </div>
                </>
              }
            />

            <FAQItem
              question={`"Ajile" can't be opened because Apple cannot check it for malicious software`}
              icon={<Shield className="w-5 h-5" />}
              answer={
                <>
                  <p>
                    This happens because Ajile isn't notarized through Apple's developer program (which costs $99/year). 
                    You can bypass this warning:
                  </p>
                  <div className="bg-pastel-bg p-4 rounded-lg neobrutalism-border mt-3">
                    <p className="font-bold mb-2">Option 1: Right-click to open</p>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>Right-click (or Control-click) the Ajile app</li>
                      <li>Select <strong>"Open"</strong> from the context menu</li>
                      <li>Click <strong>"Open"</strong> in the dialog that appears</li>
                    </ol>
                  </div>
                  <div className="bg-pastel-bg p-4 rounded-lg neobrutalism-border mt-3">
                    <p className="font-bold mb-2">Option 2: Allow in System Settings</p>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>Go to <strong>System Settings → Privacy & Security</strong></li>
                      <li>Scroll down to the Security section</li>
                      <li>You should see a message about Ajile being blocked</li>
                      <li>Click <strong>"Open Anyway"</strong></li>
                    </ol>
                  </div>
                </>
              }
            />

            <FAQItem
              question="How do I install Ajile on macOS?"
              icon={<Folder className="w-5 h-5" />}
              answer={
                <>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Download the <strong>.dmg</strong> file</li>
                    <li>Double-click to open it</li>
                    <li>Drag the Ajile icon to the Applications folder</li>
                    <li>Eject the disk image</li>
                    <li>Open Ajile from your Applications folder</li>
                  </ol>
                  <p className="mt-3 text-sm">
                    <strong>Tip:</strong> If you see a security warning, check the questions above for solutions.
                  </p>
                </>
              }
            />
          </div>

          {/* Windows Section */}
          <div className="space-y-4 mt-12">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <div className="w-10 h-10 bg-pastel-blue neobrutalism-border rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              Windows Issues
            </h2>

            <FAQItem
              question="Windows protected your PC / SmartScreen warning"
              icon={<Shield className="w-5 h-5" />}
              answer={
                <>
                  <p>
                    Windows SmartScreen may block apps from unknown publishers. Since Ajile isn't signed with an 
                    expensive code signing certificate, you'll see this warning.
                  </p>
                  <div className="bg-pastel-bg p-4 rounded-lg neobrutalism-border mt-3">
                    <p className="font-bold mb-2">How to proceed:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>Click <strong>"More info"</strong> (it's a small link, easy to miss!)</li>
                      <li>Click <strong>"Run anyway"</strong></li>
                      <li>The installation will proceed normally</li>
                    </ol>
                  </div>
                </>
              }
            />

            <FAQItem
              question="How do I install Ajile on Windows?"
              icon={<Folder className="w-5 h-5" />}
              answer={
                <>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Download the <strong>.exe</strong> installer</li>
                    <li>Double-click to run it</li>
                    <li>If SmartScreen appears, click "More info" → "Run anyway"</li>
                    <li>Follow the installation wizard</li>
                    <li>Find Ajile in your Start Menu or Desktop</li>
                  </ol>
                </>
              }
            />
          </div>

          {/* Linux Section */}
          <div className="space-y-4 mt-12">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <div className="w-10 h-10 bg-pastel-mint neobrutalism-border rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              Linux Issues
            </h2>

            <FAQItem
              question="AppImage won't run / Permission denied"
              icon={<AlertTriangle className="w-5 h-5" />}
              answer={
                <>
                  <p>
                    AppImage files need to be marked as executable before they can run.
                  </p>
                  <div className="bg-pastel-bg p-4 rounded-lg neobrutalism-border mt-3">
                    <p className="font-bold mb-2">Make it executable:</p>
                    <code className="block bg-black text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto">
                      chmod +x Ajile.Desktop_*.AppImage
                    </code>
                    <p className="mt-2 text-sm">Then double-click or run it from terminal.</p>
                  </div>
                </>
              }
            />

            <FAQItem
              question="How do I install the .deb package?"
              icon={<Folder className="w-5 h-5" />}
              answer={
                <>
                  <p>You can install the .deb package using the terminal or your package manager:</p>
                  <div className="bg-pastel-bg p-4 rounded-lg neobrutalism-border mt-3">
                    <p className="font-bold mb-2">Using terminal:</p>
                    <code className="block bg-black text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto">
                      sudo dpkg -i Ajile.Desktop_*.deb
                    </code>
                    <p className="mt-2 text-sm">Or right-click the .deb file and open with your software center.</p>
                  </div>
                </>
              }
            />
          </div>

          {/* General Section */}
          <div className="space-y-4 mt-12">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <div className="w-10 h-10 bg-pastel-peach neobrutalism-border rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              General Questions
            </h2>

            <FAQItem
              question="Is Ajile safe to use?"
              icon={<Shield className="w-5 h-5" />}
              answer={
                <>
                  <p>
                    <strong>Yes!</strong> Ajile is completely safe. The security warnings you see are because:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>It's downloaded from the internet (not an app store)</li>
                    <li>It's not signed with expensive certificates ($99-300+/year)</li>
                    <li>It's from an "unidentified developer" (I'm just one person!)</li>
                  </ul>
                  <p className="mt-3">
                    The app is <a href="https://github.com/fmgono/ajile" target="_blank" className="text-primary font-bold hover:underline">open source on GitHub</a>—you 
                    can inspect every line of code yourself.
                  </p>
                </>
              }
            />

            <FAQItem
              question="The app opens but shows a blank screen"
              icon={<AlertTriangle className="w-5 h-5" />}
              answer={
                <>
                  <p>This can happen if the app didn't initialize properly. Try these steps:</p>
                  <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>Completely quit the app (make sure it's not running in the background)</li>
                    <li>Restart your computer</li>
                    <li>Try opening the app again</li>
                  </ol>
                  <p className="mt-3">
                    If the problem persists, please <a href="https://github.com/fmgono/ajile/issues" target="_blank" className="text-primary font-bold hover:underline">open an issue on GitHub</a> with 
                    your OS version and any error messages you see.
                  </p>
                </>
              }
            />

            <FAQItem
              question="Where is my data stored?"
              icon={<Folder className="w-5 h-5" />}
              answer={
                <>
                  <p>All your data is stored locally on your machine:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>macOS:</strong> <code className="bg-pastel-bg px-2 py-1 rounded text-sm">~/Library/Application Support/dev.fmgono.ajile-desktop</code></li>
                    <li><strong>Windows:</strong> <code className="bg-pastel-bg px-2 py-1 rounded text-sm">%APPDATA%\dev.fmgono.ajile-desktop</code></li>
                    <li><strong>Linux:</strong> <code className="bg-pastel-bg px-2 py-1 rounded text-sm">~/.local/share/dev.fmgono.ajile-desktop</code></li>
                  </ul>
                  <p className="mt-3 text-sm">
                    This folder contains your SQLite database with all your SRS data, mined sentences, and settings.
                  </p>
                </>
              }
            />

            <FAQItem
              question="Still having issues?"
              icon={<HelpCircle className="w-5 h-5" />}
              answer={
                <>
                  <p>
                    I'm here to help! If none of the solutions above work:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                      <a href="https://github.com/fmgono/ajile/issues" target="_blank" className="text-primary font-bold hover:underline">
                        Open an issue on GitHub
                      </a> with details about your problem
                    </li>
                    <li>Include your OS version, the error message (if any), and steps to reproduce</li>
                  </ul>
                </>
              }
            />
          </div>

        </motion.div>

        <div className="text-center text-sm text-muted-foreground pt-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

      </div>
    </section>
  );
}
