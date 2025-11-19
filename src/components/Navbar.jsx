import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg" />
          <span className="text-white font-semibold tracking-tight text-lg">
            Smart View
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <button onClick={() => scrollTo('home')} className="hover:text-white transition">Home</button>
          <button onClick={() => scrollTo('features')} className="hover:text-white transition">Solutions</button>
          <button onClick={() => scrollTo('gallery')} className="hover:text-white transition">Gallery</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition">Contact</button>
        </div>

        <div className="hidden md:block">
          <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-lg hover:shadow-cyan-500/20 transition">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-slate-900/80">
          <button onClick={() => scrollTo('home')} className="block w-full text-left text-slate-200">Home</button>
          <button onClick={() => scrollTo('features')} className="block w-full text-left text-slate-200">Solutions</button>
          <button onClick={() => scrollTo('gallery')} className="block w-full text-left text-slate-200">Gallery</button>
          <button onClick={() => scrollTo('contact')} className="block w-full text-left text-slate-200">Contact</button>
          <button onClick={() => scrollTo('contact')} className="w-full mt-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
