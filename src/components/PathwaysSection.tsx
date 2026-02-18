import { FadeInSection, StaggerGrid, StaggerCard } from "./animations";

const pathways = [
  {
    title: "Studio-Built",
    description: "Ideas engineered and built in-house from the ground up.",
    tag: "Internal",
  },
  {
    title: "Co-Created",
    description: "Partnering with exceptional founders to shape the venture together.",
    tag: "Collaborative",
  },
  {
    title: "Spin-Outs",
    description: "Companies born from proprietary IP and data assets.",
    tag: "IP-Driven",
  },
];

const audiences = [
  {
    group: "Founders",
    icon: "🚀",
    tagline: "Build faster, with less risk",
    description:
      "Build faster, with less risk, and stronger foundations. Access our shared infrastructure, networks, and systems.",
  },
  {
    group: "Investors",
    icon: "📊",
    tagline: "De-risked pipeline",
    description:
      "Access a pipeline of de-risked, thesis-driven companies built with institutional rigor and long-term conviction.",
  },
  {
    group: "Partners",
    icon: "🤝",
    tagline: "Built for scale",
    description:
      "Collaborate with ventures designed for scale, not pilots. Real traction, real teams, real infrastructure.",
  },
];

const PathwaysSection = () => {
  return (
    <>
      {/* Venture Pathways */}
      <section id="pathways" className="py-24 lg:py-32 px-6 bg-surface-1">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
              How You Can Engage
            </span>
            <h2 className="font-display text-5xl lg:text-6xl text-foreground">
              Our Venture <em>Pathways</em>
            </h2>
          </FadeInSection>

          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {pathways.map((p) => (
              <StaggerCard key={p.title}>
                <div
                  className="relative p-8 rounded-sm glow-border glow-border-hover bg-background group h-full"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <span className="inline-block px-2.5 py-1 text-xs font-body text-primary border border-primary/20 rounded-full mb-6">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Why Work With Us */}
      <section id="why-us" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
              The Advantage
            </span>
            <h2 className="font-display text-5xl lg:text-6xl text-foreground">
              Why Work With <em>Cerebrum?</em>
            </h2>
          </FadeInSection>

          <StaggerGrid className="grid md:grid-cols-3 gap-px bg-border">
            {audiences.map((a) => (
              <StaggerCard key={a.group}>
                <div className="bg-background p-10 group hover:bg-surface-1 transition-colors duration-300 h-full">
                  <span className="text-3xl mb-4 block">{a.icon}</span>
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-3">
                    For {a.group}
                  </p>
                  <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                    {a.tagline}
                  </h3>
                  <div className="section-divider mb-4" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
};

export default PathwaysSection;
