import { useParams } from "react-router-dom";

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

const ArticleView = () => {
  const { id } = useParams(); // Получаем ID статьи из URL

  const [article, setArticle] = useState<Article>([]);

  useEffect(() => {
    apiClient.get("api/articles/"+id)
        .then((response) => setArticle(response.data))
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-purple-700">
            {article.title}
          </h1>
          <div className="mt-4 text-gray-600">
            <p>
              <strong>Author:</strong> {article.author}
            </p>
            <p>
              <strong>Date:</strong> {article.updated_at}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Article Content</h2>
          <p className="text-lg leading-relaxed">{article.text}</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleView;
