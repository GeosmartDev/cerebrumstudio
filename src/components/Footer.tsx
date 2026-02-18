const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-semibold text-foreground">
          Cerebrum<span className="text-primary">.</span>
        </div>
        <p className="font-body text-xs text-text-dim text-center">
          © {new Date().getFullYear()} Cerebrum Studio. The intelligence layer behind high-impact companies.
        </p>
        <a
          href="mailto:we@cerebrumstudio.com"
          className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          we@cerebrumstudio.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
