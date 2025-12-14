export function Footer() {
  return (
    <footer className="py-12 px-4 bg-white border-t-2 border-black">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Ajile Logo" className="w-10 h-10 rounded-lg border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
          <div>
            <h4 className="text-2xl font-black">Ajile</h4>
            <p className="text-muted-foreground text-sm">Built with ❤️ by <a href="https://fmgono.dev" target="_blank"  className="text-primary hover:underline">Fathan Margono</a> . © 2025</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-black transition-colors">Privacy Policy</a>
          {/* <a href="#" className="text-muted-foreground hover:text-black transition-colors">Terms of Service</a> */}
          {/* <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-pastel-purple transition-colors border border-black">
            <Twitter className="w-5 h-5" />
          </a> */}
          {/* <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-pastel-purple transition-colors border border-black">
            <Github className="w-5 h-5" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}

