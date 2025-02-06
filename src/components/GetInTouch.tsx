
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const GetInTouch = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { firstName, email, message });
    // For now, we'll still use mailto as a fallback
    window.location.href = `mailto:contact@notonprem.com?subject=Contact from ${firstName}&body=${message}`;
  };

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
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="rounded-full bg-white/5 text-white placeholder:text-gray-400"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full bg-white/5 text-white placeholder:text-gray-400"
                required
              />
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[150px] rounded-3xl bg-white/5 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button 
                type="submit"
                size="lg" 
                variant="secondary" 
                className="rounded-full bg-accent px-8 hover:bg-accent-hover"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
