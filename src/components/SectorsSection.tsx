const sectors = [
  { label: "Health", icon: "⚕️", desc: "Precision medicine and care systems" },
  { label: "Housing", icon: "🏗️", desc: "Scalable and sustainable living solutions" },
  { label: "Energy", icon: "⚡", desc: "Transition infrastructure and storage" },
  { label: "Climate", icon: "🌍", desc: "Adaptation, mitigation and carbon markets" },
  { label: "Agriculture", icon: "🌾", desc: "Food systems and supply chain resilience" },
  { label: "Logistics", icon: "📦", desc: "Intelligent movement of goods and data" },
  { label: "Mining", icon: "⛏️", desc: "Critical materials and responsible extraction" },
];

const SectorsSection = () => {
  return (
    <section id="what-we-build" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left sticky header */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
              Focus Areas
            </span>
            <h2 className="font-display text-5xl lg:text-6xl text-foreground mb-6">
              What We
              <br />
              <em>Build</em>
            </h2>
            <div className="section-divider mb-6" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              We focus on ventures where depth matters. These markets reward precision, patience, and structure.
            </p>
          </div>

          {/* Sectors grid */}
          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {sectors.map((sector) => (
              <div
                key={sector.label}
                className="bg-background p-6 group cursor-default hover:bg-surface-1 transition-all duration-300 glow-border-hover"
              >
                <span className="text-2xl mb-3 block">{sector.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {sector.label}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
