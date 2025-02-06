
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "DevOps Engineer",
      rating: 5,
      content: "The community helped me transition from traditional IT to cloud-native technologies. The learning resources are exceptional!",
    },
    {
      name: "Michael Chen",
      role: "Cloud Architect",
      rating: 5,
      content: "Found an amazing network of professionals here. The hands-on projects really accelerated my learning journey.",
    },
    {
      name: "Emma Davis",
      role: "Security Specialist",
      rating: 4,
      content: "Great platform for cybersecurity enthusiasts. The practical approach to learning makes complex concepts easier to grasp.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-[#1A1F2C] py-20">
      <div className="container">
        <h2 className="mb-12 text-left text-4xl font-bold text-white">
          Voices of Growth
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#222222] p-6 shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex">{renderStars(testimonial.rating)}</div>
              <p className="mb-4 text-gray-300">{testimonial.content}</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
