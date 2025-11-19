function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(60%_50%_at_50%_0%,#22d3ee_0%,transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200 text-xs mb-4">
            Smart View • Smart Film Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Instant privacy. Effortless clarity.
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Transform glass at the touch of a button. Our switchable smart film goes from transparent to opaque in milliseconds—perfect for homes, offices, clinics, and retail.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="px-5 py-3 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-lg hover:shadow-cyan-500/30 transition">
              Get a Quote
            </a>
            <a href="#features" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/5 transition">
              Explore Solutions
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
            <div>PDLC Technology</div>
            <div className="h-1 w-1 rounded-full bg-slate-500" />
            <div>Retrofit or New Installations</div>
            <div className="h-1 w-1 rounded-full bg-slate-500" />
            <div>Residential • Commercial • Medical</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 blur-2xl rounded-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop" alt="Clear glass office" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white text-sm bg-slate-900/60 px-2 py-1 rounded">Transparent</div>
                </div>
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1400&auto=format&fit=crop" alt="Frosted privacy" className="w-full h-full object-cover blur-[2px]" />
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
                  <div className="absolute bottom-4 left-4 text-white text-sm bg-slate-900/60 px-2 py-1 rounded">Opaque</div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-center text-slate-200 text-sm bg-gradient-to-t from-slate-900/60 to-transparent">
                Tap to see the difference – switchable film in action
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
