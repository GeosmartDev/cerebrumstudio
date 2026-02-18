const steps = [
  {
    icon: "🧠",
    label: "Think",
    number: "01",
    description:
      "We identify real problems through data, research, and systems thinking.",
  },
  {
    icon: "🎯",
    label: "Decide",
    number: "02",
    description:
      "We validate fast, kill weak ideas early, and commit deeply to the right ones.",
  },
  {
    icon: "⚙️",
    label: "Execute",
    number: "03",
    description:
      "We deploy shared teams, infrastructure, and governance to build efficiently.",
  },
  {
    icon: "📈",
    label: "Scale",
    number: "04",
    description:
      "We support fundraising, partnerships, and operational maturity.",
  },
];

const ModelSection = () => {
  return (
    <section id="how-we-build" className="py-24 lg:py-32 px-6 relative">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
            Our Approach
          </span>
          <h2 className="font-display text-5xl lg:text-6xl text-foreground">
            How We <em>Build</em>
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            The Cerebrum Model — four integrated phases that power every venture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-background p-8 lg:p-10 group hover:bg-surface-1 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-3xl">{step.icon}</span>
                <span className="font-display text-5xl text-border group-hover:text-primary/20 transition-colors duration-300">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                {step.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
