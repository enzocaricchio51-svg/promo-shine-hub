import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PlanesSection from "@/components/PlanesSection";
import VocesSection from "@/components/VocesSection";
import GaleriaSection from "@/components/GaleriaSection";
import FaqContactSection from "@/components/FaqContactSection";
import HailEffect from "@/components/HailEffect";
import FloatingPenguin from "@/components/FloatingPenguin";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <HailEffect />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <PlanesSection />
        <VocesSection />
        <GaleriaSection />
        <FaqContactSection />
      </main>
      <Footer />
      <FloatingPenguin />
    </div>
  );
};

export default Index;
