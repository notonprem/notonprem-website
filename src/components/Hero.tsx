
import { Button } from "@/components/ui/button";
import { Cloud, Shield, ServerCog } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#1A1F2C] to-[#2D3748] py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-center gap-4">
          <img 
            src="/lovable-uploads/7ef5d360-a8ad-40df-9412-66b84f6c2af3.png" 
            alt="notOnPrem Logo" 
            className="h-12 w-12"
          />
          <span className="text-3xl font-bold text-[#45C4B0]">notOnPrem</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Learn with tech nerds, professionals and enthusiasts
          </h1>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Join our community of tech enthusiasts learning cloud, DevOps, and cybersecurity together
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full bg-[#45C4B0] hover:bg-[#3AA697]">
              Join Community
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full bg-[#2D3748] hover:bg-[#3D4A61]">
              Explore Resources
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: Cloud, title: "Cloud Technology", desc: "Master modern cloud platforms" },
              { icon: Shield, title: "Cybersecurity", desc: "Learn security best practices" },
              { icon: ServerCog, title: "DevOps", desc: "Bridge development and operations" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <item.icon size={40} className="mb-4 text-[#45C4B0]" />
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
