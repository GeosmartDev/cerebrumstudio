import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeliefSection from "@/components/BeliefSection";
import ModelSection from "@/components/ModelSection";
import SectorsSection from "@/components/SectorsSection";
import PathwaysSection from "@/components/PathwaysSection";
import PromiseSection from "@/components/PromiseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BeliefSection />
        <ModelSection />
        <SectorsSection />
        <PathwaysSection />
        <PromiseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
