import { Film, Layers, PenTool } from 'lucide-react';

const works = [
  {
    title: 'Kinetic Identity — XR Festival',
    tag: 'Brand Film',
    cover:
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Light Sculpture v3',
    tag: 'Installation',
    cover:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Realtime Stage Visuals',
    tag: 'Live Visuals',
    cover:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function PortfolioGrid() {
  return (
    <section id="work" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Works</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              A mix of R&D, commissioned brand films, and site-specific installations.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/60">
            <Layers size={18} />
            <span className="text-sm">Video • Installation • Identity</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={w.cover}
                  alt={w.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Film size={14} />
                  <span>{w.tag}</span>
                </div>
                <h3 className="mt-1 text-lg font-medium">{w.title}</h3>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

        <div id="services" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-white/70 flex items-center gap-2 text-sm">
              <PenTool size={16} /> Motion Design
            </div>
            <p className="mt-2 text-white/80">
              Title design, 2D/3D animation, brand films, and product launches with a
              distinctly futuristic aesthetic.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-white/70 flex items-center gap-2 text-sm">
              <Layers size={16} /> Experiential
            </div>
            <p className="mt-2 text-white/80">
              Stage visuals and custom installations using realtime engines and projection mapping.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-white/70 flex items-center gap-2 text-sm">
              <Film size={16} /> Post / Delivery
            </div>
            <p className="mt-2 text-white/80">
              Edit, sound design supervision, and finishing for broadcast, events, and galleries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
