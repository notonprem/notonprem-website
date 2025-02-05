import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BlogSection } from "@/components/BlogSection";
import { GetInTouch } from "@/components/GetInTouch";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <BlogSection />
      <GetInTouch />
    </div>
  );
};

export default Index;