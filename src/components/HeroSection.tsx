import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with neural pulse animation */}
      <div className="absolute inset-0">
        {/* Base dim image */}
        <img
          src={heroBg}
          alt="Neural network visualization"
          className="w-full h-full object-cover opacity-10"
        />

        {/* Animated neural light layer 1 — slow drift */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0,
            filter: "blur(0px) brightness(3) saturate(2)",
            mixBlendMode: "screen",
          }}
          animate={{
            opacity: [0, 0.06, 0.02, 0.08, 0.01, 0.05, 0],
            scale: [1, 1.015, 1.005, 1.02, 1, 1.01, 1],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        {/* Animated neural light layer 2 — faster jitter */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0,
            filter: "blur(2px) brightness(4) saturate(3) hue-rotate(20deg)",
            mixBlendMode: "screen",
          }}
          animate={{
            opacity: [0, 0.04, 0, 0.07, 0.01, 0.03, 0.05, 0],
            x: [0, 2, -1, 3, -2, 1, 0],
            y: [0, -1, 2, -1, 1, -2, 0],
          }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Roaming glow pulses — synaptic firing effect */}
        <motion.div
          className="absolute w-[400px] h-[200px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
            top: "30%",
            left: "20%",
            filter: "blur(40px)",
          }}
          animate={{
            opacity: [0.3, 1, 0.2, 0.8, 0.1, 0.6, 0.3],
            x: [0, 30, -20, 50, -10, 20, 0],
            y: [0, -20, 15, -10, 25, -5, 0],
            scale: [1, 1.3, 0.8, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <motion.div
          className="absolute w-[300px] h-[150px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
            top: "55%",
            right: "15%",
            filter: "blur(50px)",
          }}
          animate={{
            opacity: [0.1, 0.7, 0.2, 0.9, 0.3, 0.5, 0.1],
            x: [0, -25, 15, -40, 10, -15, 0],
            y: [0, 15, -20, 8, -18, 12, 0],
            scale: [1, 0.9, 1.4, 1.0, 1.2, 0.85, 1],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.5,
          }}
        />

        {/* Dark overlays — retained */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines opacity-20" />

      {/* Glow orb */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 0.95, 1.05, 1], opacity: [0.5, 1, 0.6, 0.9, 0.5] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-body text-xs text-primary tracking-widest uppercase">
            Venture Creation Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-none"
        >
          Cerebrum
          <br />
          <span className="text-gradient italic">Studio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          The intelligence layer behind high-impact companies
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="font-body text-sm text-text-dim max-w-xl mx-auto mb-12"
        >
          We build ventures the way the brain works: with clarity, coordination, and long-term thinking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
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
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
