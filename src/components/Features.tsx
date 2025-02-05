import { Rocket, Users, BookOpen, Target, MessageSquare, Award } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Free Courses Library",
      description: "Access our curated collection of learning resources",
    },
    {
      icon: Target,
      title: "Certification Support",
      description: "Get help with tech certification preparation",
    },
    {
      icon: Users,
      title: "1:1 Mentoring",
      description: "Personal guidance from industry experts",
    },
    {
      icon: MessageSquare,
      title: "Community Support",
      description: "Connect with fellow tech enthusiasts",
    },
    {
      icon: Award,
      title: "Career Advice",
      description: "Professional development guidance",
    },
    {
      icon: Rocket,
      title: "Hands-on Learning",
      description: "Practice with real-world projects",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg"
            >
              <feature.icon className="mb-4 h-8 w-8 text-secondary" />
              <h3 className="mb-2 text-xl font-semibold text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};