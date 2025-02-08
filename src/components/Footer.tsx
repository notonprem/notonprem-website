import { Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] py-8 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-300">Find and follow us on our socials</p>
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
          </div>

          {/* Construction notice */}
          <div className="mt-8 p-3 border border-amber-700/30 rounded-md bg-amber-950/10">
            <p className="text-amber-200/70 text-sm">This site is still under construction.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
