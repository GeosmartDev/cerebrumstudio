import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <div className="font-display text-xl font-semibold tracking-tight text-foreground">
          Cerebrum<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["What We Build", "How We Build", "Pathways", "Why Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://forms.gle/b2E7xfhJUqGvFGYb6"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-sm font-body font-medium rounded border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 inline-block"
        >
          Apply
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
