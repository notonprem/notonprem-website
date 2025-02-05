import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BlogSection } from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <BlogSection />
    </div>
  );
};

export default Index;