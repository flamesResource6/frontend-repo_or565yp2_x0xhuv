function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-white">Installations Gallery</h2>
          <p className="mt-3 text-slate-400">A glimpse at how spaces transform with switchable glass.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/30">
              <img src={src} alt="Smart glass installation" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
