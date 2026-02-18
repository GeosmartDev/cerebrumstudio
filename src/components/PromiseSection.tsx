import { FadeInSection } from "./animations";

const PromiseSection = () => {
  return (
    <section className="py-24 lg:py-40 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 grid-lines opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative text-center">
        <FadeInSection delay={0}>
          <span className="font-body text-xs tracking-widest uppercase text-primary mb-6 block">
            The Cerebrum Promise
          </span>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            We don't chase{" "}
            <em className="text-gradient">trends</em>.
            <br />
            We design <em className="text-gradient">systems</em>.
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            We build companies meant to last — built on deep thinking, disciplined execution, and long-term conviction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/b2E7xfhJUqGvFGYb6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 font-body font-medium text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-all duration-200 inline-block text-center"
              style={{ boxShadow: "var(--shadow-button)" }}
            >
              Apply to the Studio
            </a>
            <a
              href="https://forms.gle/qTUbgjciVi9nApEe6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 font-body font-medium text-sm border border-border text-foreground rounded hover:border-primary/40 hover:text-primary transition-all duration-200 inline-block text-center"
            >
              Partner with Cerebrum →
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default PromiseSection;
