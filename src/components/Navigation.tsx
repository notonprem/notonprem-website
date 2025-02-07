
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
    <div className="fixed right-6 top-6 z-50">
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
  );
};
