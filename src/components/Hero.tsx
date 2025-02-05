import { Button } from "@/components/ui/button";
import { Cloud, Shield, BookOpen, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary to-secondary py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Learn with tech nerds, professionals and enthusiasts
          </h1>
          <p className="mb-8 text-xl text-gray-200 md:text-2xl">
            Join our community of tech enthusiasts learning cloud, DevOps, and cybersecurity together
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent-hover">
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Resources
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: Cloud, title: "Cloud Technology", desc: "Master modern cloud platforms" },
              { icon: Shield, title: "Cybersecurity", desc: "Learn security best practices" },
              { icon: BookOpen, title: "DevOps", desc: "Bridge development and operations" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <item.icon size={40} className="mb-4" />
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Get in touch section */}
          <div className="mt-20 w-full max-w-2xl rounded-lg bg-white/10 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 text-2xl font-semibold">
              <Mail className="h-8 w-8" />
              <h2>Get in touch</h2>
            </div>
            <p className="mt-4 text-lg text-gray-200">
              Have questions or want to join our community? We'd love to hear from you!
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="mt-6 bg-accent hover:bg-accent-hover"
              onClick={() => window.location.href = 'mailto:contact@notonprem.com'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};