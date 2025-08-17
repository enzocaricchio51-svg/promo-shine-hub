import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import ClientsCarousel from "@/components/ClientsCarousel";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <ClientsCarousel />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
