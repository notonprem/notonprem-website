
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full bg-[#1A1F2C]/95 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/7ef5d360-a8ad-40df-9412-66b84f6c2af3.png" 
              alt="notOnPrem Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-[#45C4B0]">notOnPrem</span>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-[#222222]/80 border-gray-700">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#1A1F2C] border-gray-700">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/who-are-we" className="text-xl text-white hover:text-[#45C4B0] transition-colors">
                  Who Are We?
                </Link>
                <Link to="/why-we-rock" className="text-xl text-white hover:text-[#45C4B0] transition-colors">
                  Why We Rock!
                </Link>
                <Link to="/blog" className="text-xl text-white hover:text-[#45C4B0] transition-colors">
                  Blog
                </Link>
                <Link to="/testimonials" className="text-xl text-white hover:text-[#45C4B0] transition-colors">
                  Testimonials
                </Link>
                <Link to="/contact" className="text-xl text-white hover:text-[#45C4B0] transition-colors">
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="h-[72px]"></div>
    </>
  );
};
