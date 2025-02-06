
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Newsletter = () => {
  return (
    <section className="bg-[#1A1F2C] py-16">
      <div className="container">
        <h2 className="mb-4 text-left text-3xl font-bold text-white">Subscribe to our newsletter</h2>
        <p className="mb-8 text-left text-gray-300">Get our latest news and updates</p>
        <div className="mx-auto max-w-lg">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-full bg-white/10 pr-32 text-white placeholder:text-gray-400"
            />
            <Button 
              className="absolute right-1 top-1 rounded-full bg-[#45C4B0] px-6 hover:bg-[#3AA697]"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
