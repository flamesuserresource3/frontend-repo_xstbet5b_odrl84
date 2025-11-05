import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-screen items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Futuristic motion graphics and immersive video installations
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            I’m Vf XW, a master in motion design crafting interactive visuals, kinetic identities,
            and installation-ready experiences for bold brands and artists.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition-colors"
            >
              View selected works
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-medium hover:border-white/60 transition-colors"
            >
              Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
