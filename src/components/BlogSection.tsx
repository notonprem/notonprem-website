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
    <section className="bg-muted py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary">Latest Articles</h2>
          <p className="text-xl text-gray-600">Stay updated with our latest tech insights</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <CardTitle className="mt-4">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="#"
                  className="text-secondary hover:text-secondary-hover hover:underline"
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