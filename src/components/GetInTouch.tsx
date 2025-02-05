import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const GetInTouch = () => {
  return (
    <div className="bg-primary py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto w-full max-w-2xl rounded-lg bg-white/10 p-8 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 text-2xl font-semibold text-white">
            <Mail className="h-8 w-8" />
            <h2>Get in touch</h2>
          </div>
          <p className="mt-4 text-center text-lg text-gray-200">
            Have questions or want to join our community? We'd love to hear from you!
          </p>
          <div className="mt-6 flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-accent hover:bg-accent-hover"
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