
import { Instagram, Twitter, Youtube, Discord } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] py-8 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-300">Find and follow us</p>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#45C4B0] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#45C4B0] transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#45C4B0] transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#45C4B0] transition-colors">
              <Discord className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
