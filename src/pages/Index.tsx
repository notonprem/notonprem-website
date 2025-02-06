
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BlogSection } from "@/components/BlogSection";
import { GetInTouch } from "@/components/GetInTouch";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Hero />
      <Features />
      <Testimonials />
      <BlogSection />
      <Newsletter />
      <GetInTouch />
    </div>
  );
};

export default Index;
