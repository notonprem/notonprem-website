import { Button } from "@/components/ui/button";
import { Mail, Copy, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const GetInTouch = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const emailAddress = "hola@not-onprem.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      toast({
        description: "Email copied to clipboard!",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        description: "Failed to copy email",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { firstName, email, message });
    window.location.href = `mailto:${emailAddress}?subject=Contact from ${firstName}&body=${message}`;
  };

  return (
    <div className="bg-[#1A1F2C] py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="mx-auto w-full max-w-2xl rounded-lg bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 text-2xl font-semibold text-white">
              <Mail className="h-8 w-8" />
              <h2>Get in touch</h2>
            </div>
            <p className="mt-4 text-center text-lg text-gray-300">
              Have questions or want to join our community? We'd love to hear from you!
            </p>

            {/* Email copy section */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <Input
                type="text"
                value={emailAddress}
                readOnly
                className="w-[180px] rounded-full bg-white/5 text-white"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopyEmail}
                className="rounded-full bg-white/5 hover:bg-white/10 border-white/20"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-white" />
                )}
              </Button>
            </div>

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
                  className="rounded-full bg-[#45C4B0] px-8 hover:bg-[#3AA697] text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/lovable-uploads/5bc527ea-1fcb-4566-8d64-347e5926bf9f.png"
              alt="Quantum Computing Visualization"
              className="max-w-md rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
