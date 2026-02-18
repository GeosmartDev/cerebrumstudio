import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Neural network visualization"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines opacity-20" />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-body text-xs text-primary tracking-widest uppercase">
            Venture Creation Studio
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-none">
          Cerebrum
          <br />
          <span className="text-gradient italic">Studio</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          The intelligence layer behind high-impact companies
        </p>

        <p className="font-body text-sm text-text-dim max-w-xl mx-auto mb-12">
          We build ventures the way the brain works: with clarity, coordination, and long-term thinking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/b2E7xfhJUqGvFGYb6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 font-body font-medium text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-all duration-200 inline-block text-center"
            style={{ boxShadow: "var(--shadow-button)" }}>
            Apply Now
          </a>
          <a
            href="https://forms.gle/qTUbgjciVi9nApEe6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 font-body font-medium text-sm border border-border text-foreground rounded hover:border-primary/40 hover:text-primary transition-all duration-200 inline-block text-center">
            Partner with Cerebrum →
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
