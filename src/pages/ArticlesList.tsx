import { Header } from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import apiClient from "../apiClient.ts";

interface Article {
  unique_link: string;
  title: string;
  author: string;
  updated_at: string;
  text: string;
}


const ArticlesList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const truncateString = (str: string): string =>
        str.length > 30 ? str.slice(0, 30) + '...' : str;
  useEffect(() => {
    apiClient.get("api/articles")
        .then((response) => setArticles(response.data))
  }, [])
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">

      <Header />

      <section className="bg-purple-100 py-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-purple-700">Articles</h1>
        <p className="mt-2 text-gray-600">
          Explore insights, tips, and resources to help you succeed in hackathons.
        </p>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.unique_link}
              className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-700 mb-4">{truncateString(article.text)}</p>
              <a
                href={`/articles/${article.unique_link}`}
                className="text-purple-500 hover:underline font-medium"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticlesList;
