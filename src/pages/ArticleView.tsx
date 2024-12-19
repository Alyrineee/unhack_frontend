import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import Footer from "../components/Footer";

const ArticleView = () => {
  const { id } = useParams(); // Получаем ID статьи из URL

  console.log(id);

  // Пример данных статьи
  const article = {
    id: "1",
    title: "How to Build a Hackathon Platform with React",
    content:
      "Hackathons are great opportunities to bring together developers, designers, and innovators. In this article, we will explore how to build a platform for organizing hackathons using React, TypeScript, and Tailwind CSS.",
    author: "John Doe",
    date: "December 18, 2024",
    tags: ["Hackathons", "React", "TypeScript"],
    recommendations: [
      { id: "2", title: "Top 10 Tips for Winning Hackathons" },
      { id: "3", title: "Building a Scalable Backend for Hackathons" },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <div className="container mx-auto px-6 py-12">
        {/* Заголовок и информация о статье */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-purple-700">
            {article.title}
          </h1>
          <div className="mt-4 text-gray-600">
            <p>
              <strong>Author:</strong> {article.author}
            </p>
            <p>
              <strong>Date:</strong> {article.date}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Содержимое статьи */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Article Content</h2>
          <p className="text-lg leading-relaxed">{article.content}</p>
        </section>

        {/* Рекомендации */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recommended Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {article.recommendations.map((rec) => (
              <div
                key={rec.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-purple-700">
                  {rec.title}
                </h3>
                <a
                  href={`/articles/${rec.id}`}
                  className="text-purple-500 hover:underline mt-2 inline-block"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleView;
