export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[url('/images/hero-banner.webp')] bg-cover bg-center flex items-center"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-serif leading-tight">
          Trusted Manufacturing for <br />
          <span className="uppercase">Franchise Pharma Partners</span>
        </h1>
      </div>
    </section>
  );
}
