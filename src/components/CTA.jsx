function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Bring privacy on demand to your space</h2>
          <p className="mt-4 text-slate-300">Tell us about your project—dimensions, application, and location. Our team will recommend the best smart film solution and provide a tailored quote.</p>
          <ul className="mt-6 space-y-2 text-slate-400 text-sm">
            <li>• Doors, partitions, conference rooms, bathrooms</li>
            <li>• Works with standard power and smart home systems</li>
            <li>• Professional measurement and installation</li>
          </ul>
        </div>

        <form className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full rounded-md bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" required />
            <input type="email" placeholder="Email" className="w-full rounded-md bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" required />
            <input type="text" placeholder="Location" className="w-full rounded-md bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <input type="text" placeholder="Glass size (approx.)" className="w-full rounded-md bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <textarea placeholder="Project details" rows="4" className="sm:col-span-2 w-full rounded-md bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"></textarea>
          </div>
          <button type="submit" className="mt-4 w-full px-4 py-3 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-lg hover:shadow-cyan-500/30 transition">Request Quote</button>
          <p className="mt-3 text-xs text-slate-400 text-center">By submitting, you agree to be contacted about your project.</p>
        </form>
      </div>
    </section>
  );
}

export default CTA;
