
import { Button } from "@/components/ui/button";
import { Cloud, Shield, ServerCog } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#1A1F2C] to-[#2D3748] py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Learn with tech nerds, professionals and enthusiasts
          </h1>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Join our community of tech enthusiasts learning Cloud DevOps, Systems and Cybersecurity together
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full bg-[#45C4B0] hover:bg-[#3AA697]">
              Join Us
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full bg-[#2D3748] hover:bg-[#3D4A61]">
              About Us
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
