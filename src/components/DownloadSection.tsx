import { motion, AnimatePresence } from "framer-motion";
import { Download, Apple, Monitor, Terminal, Box, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function DownloadSection() {
  const version = "v1.1.0";
  const baseUrl = `https://github.com/fmgono/ajale-desktop/releases/download/${version}`;

  const downloads = {
    mac: [
      { name: "macOS Universal (.dmg)", file: "Ajile_Desktop_1.1.0_universal.dmg", primary: true },
      // { name: "macOS Intel (.dmg)", file: "Ajile_Desktop_1.1.0_x64.dmg" },
      // { name: "macOS Silicon (.dmg)", file: "Ajile_Desktop_1.1.0_aarch64.dmg" },
    ],
    windows: [
      { name: "Windows Installer (.exe)", file: "Ajile_Desktop_1.1.0_x64-setup.exe", primary: true },
    ],
    linux: [
      { name: "Linux Debian (.deb)", file: "ajile-desktop_1.1.0_amd64.deb", primary: true },
      { name: "Linux AppImage", file: "ajile-desktop_1.1.0_amd64.AppImage" },
    ]
  };

  return (
    <section id="download" className="py-24 bg-pastel-bg relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-foreground"
          >
            Start Your Journey <span className="bg-pastel-peach px-2 neobrutalism-border inline-block transform -rotate-1">Today</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            Download Ajile for your preferred platform. It's free, open-source, and privacy-focused.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* macOS Card */}
          <DownloadCard 
            title="macOS" 
            icon={<Apple className="w-8 h-8" />}
            color="bg-pastel-purple"
            items={downloads.mac}
            baseUrl={baseUrl}
            delay={0.1}
          />

          {/* Windows Card */}
          <DownloadCard 
            title="Windows" 
            icon={<Monitor className="w-8 h-8" />}
            color="bg-pastel-blue"
            items={downloads.windows}
            baseUrl={baseUrl}
            delay={0.2}
          />

          {/* Linux Card */}
          <DownloadCard 
            title="Linux" 
            icon={<Terminal className="w-8 h-8" />}
            color="bg-pastel-mint"
            items={downloads.linux}
            baseUrl={baseUrl}
            delay={0.3}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/fmgono/ajile/releases" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            <Box className="w-4 h-4" />
            View all releases on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}

function DownloadCard({ title, icon, color, items, baseUrl, delay }: { 
  title: string, 
  icon: React.ReactNode, 
  color: string, 
  items: { name: string, file: string, primary?: boolean }[],
  baseUrl: string,
  delay: number
}) {
  const primaryItem = items.find(i => i.primary) || items[0];
  const otherItems = items.filter(i => i !== primaryItem);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`relative p-6 rounded-xl neobrutalism-border neobrutalism-shadow-lg bg-white flex flex-col items-center text-center group hover:-translate-y-1 hover:neobrutalism-shadow transition-all duration-300 z-10`}
    >
      <div className={`w-16 h-16 ${color} rounded-full neobrutalism-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground font-bold mb-6">Latest: v1.1.0</p>

      <div className="w-full mt-auto">
        {otherItems.length > 0 ? (
          <div className="relative w-full flex rounded-lg neobrutalism-border hover:brightness-105 transition-all" ref={dropdownRef}>
            <a 
              href={`${baseUrl}/${primaryItem.file}`}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 ${color} text-black font-bold rounded-l-md border-r-2 border-black hover:bg-opacity-90 transition-colors`}
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`px-3 py-3 ${color} text-black font-bold rounded-r-md hover:bg-opacity-90 transition-colors flex items-center justify-center`}
            >
               <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
               {isOpen && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: 10, scale: 0.95 }}
                   transition={{ duration: 0.1 }}
                   className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg neobrutalism-border neobrutalism-shadow p-2 z-50 text-left min-w-[200px]"
                 >
                   {otherItems.map((item, i) => (
                     <a 
                       key={i}
                       href={`${baseUrl}/${item.file}`}
                       className="flex items-center gap-2 w-full p-2 text-sm font-bold hover:bg-pastel-bg rounded cursor-pointer transition-colors text-foreground"
                     >
                       <Download className="w-3 h-3" />
                       {item.name}
                     </a>
                   ))}
                 </motion.div>
               )}
            </AnimatePresence>
          </div>
        ) : (
          <a 
            href={`${baseUrl}/${primaryItem.file}`}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 ${color} text-black font-bold rounded-lg neobrutalism-border hover:brightness-105 active:translate-y-0.5 transition-all`}
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        )}
      </div>
    </motion.div>
  );
}
