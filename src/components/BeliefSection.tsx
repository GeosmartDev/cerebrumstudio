import { FadeInSection, StaggerGrid, StaggerCard } from "./animations";

const BeliefSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <FadeInSection delay={0}>
            <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
              Our Foundation
            </span>
            <h2 className="font-display text-5xl lg:text-6xl text-foreground mb-8">
              What We
              <br />
              <em>Believe</em>
            </h2>
            <div className="section-divider mb-8" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Most startups don't fail from lack of effort. They fail from{" "}
              <span className="text-foreground">poor thinking</span> and{" "}
              <span className="text-foreground">fragmented execution</span>.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Cerebrum Studio exists to fix that.
            </p>
          </FadeInSection>

          {/* Right — What Is section */}
          <FadeInSection delay={0.2}>
            <div
              className="relative p-8 lg:p-10 rounded-sm glow-border bg-gradient-card"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full blur-2xl" />
              <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
                What Is Cerebrum Studio?
              </span>
              <p className="font-display text-2xl lg:text-3xl text-foreground leading-snug mb-6">
                A venture creation and scaling studio that designs, builds, and grows companies in complex and foundational sectors.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Just as the cerebrum integrates information to drive intelligent action, we centralize strategy, systems, and execution so ventures can scale with confidence.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
