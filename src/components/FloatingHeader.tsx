
import { Link } from "react-router-dom";

export const FloatingHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-[#1A1F2C]/95 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-24">
          <Link to="/" className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/7ef5d360-a8ad-40df-9412-66b84f6c2af3.png" 
              alt="notOnPrem Logo" 
              className="h-12 w-12"
            />
            <span className="text-3xl font-bold text-[#45C4B0]">notOnPrem</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
