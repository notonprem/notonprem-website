import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const BlogSection = () => {
  const articles = [
    {
      title: "Getting Started with AWS Cloud",
      description: "Learn the basics of AWS and start your cloud journey",
      category: "Cloud",
      date: "Mar 15, 2024",
    },
    {
      title: "DevOps Best Practices",
      description: "Essential practices for modern DevOps teams",
      category: "DevOps",
      date: "Mar 14, 2024",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Basic principles of securing your applications",
      category: "Security",
      date: "Mar 13, 2024",
    },
  ];

  return (
    <section className="bg-[#232836] py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Latest Articles</h2>
          <p className="text-xl text-gray-300">Stay updated with our latest tech insights</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title} className="bg-[#222222] border-gray-700 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-[#2D7DD2] text-white hover:bg-[#2D7DD2]/80">{article.category}</Badge>
                  <span className="text-sm text-gray-400">{article.date}</span>
                </div>
                <CardTitle className="mt-4 text-white">{article.title}</CardTitle>
                <CardDescription className="text-gray-300">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="#"
                  className="text-[#2D7DD2] hover:text-[#2D7DD2]/80 hover:underline"
                >
                  Read more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
