import { Mail, Phone, Instagram } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s create something bold</h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Available for commissions, collaborations, and exhibition work. Send a brief or say
              hello. I typically respond within 24 hours.
            </p>

            <div className="mt-8 space-y-3">
              <a href="mailto:studio@vfxw.design" className="flex items-center gap-3 text-white/90 hover:text-white">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Mail size={16} /></span>
                studio@vfxw.design
              </a>
              <a href="tel:+390000000000" className="flex items-center gap-3 text-white/90 hover:text-white">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Phone size={16} /></span>
                +39 000 000 000
              </a>
              <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Instagram size={16} /></span>
                @vfxw.motion
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70">Project brief</label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Tell me about the timeline, scope, and goals"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90"
            >
              Send inquiry
            </button>
          </form>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Vf XW — Motion Graphics. All rights reserved.
        </div>
      </div>
    </section>
  );
}
