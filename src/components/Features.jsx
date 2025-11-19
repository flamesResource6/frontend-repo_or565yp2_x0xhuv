function Features() {
  const features = [
    {
      title: "On-Demand Privacy",
      desc: "Switch from clear to frosted instantly. Keep open space aesthetics without compromising privacy.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Energy Efficient",
      desc: "Blocks heat and UV while maintaining natural light, improving comfort and reducing costs.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M12 2l3 7H9l3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Retrofit Ready",
      desc: "Install on existing glass or integrate into new builds. Seamless control via switch or smart home.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Safe + Durable",
      desc: "Laminated safety glass option with robust PDLC film. Ideal for clinics, meeting rooms, bathrooms.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(60%_40%_at_50%_0%,#22d3ee_0%,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Smart Film Solutions</h2>
          <p className="mt-3 text-slate-400">Designed for modern spaces where privacy and light need to coexist.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition group">
              <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                {f.icon}
              </div>
              <h3 className="text-white font-medium mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
