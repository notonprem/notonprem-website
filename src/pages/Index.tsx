
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BlogSection } from "@/components/BlogSection";
import { GetInTouch } from "@/components/GetInTouch";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { QuantumVisual } from "@/components/QuantumVisual";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navigation />
      <Hero />
      <QuantumVisual />
      <Features />
      <Testimonials />
      <div className="py-0">
        <BlogSection />
      </div>
      <Newsletter />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Index;
