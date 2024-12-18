import { Header } from "../components/Header";
import Footer from "../components/Footer";

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "How to Win Your Next Hackathon",
    author: "Alice Johnson",
    date: "Jan 5, 2024",
    description:
      "Learn the essential strategies and tips to dominate your next hackathon.",
  },
  {
    id: 2,
    title: "Building Strong Teams for Competitions",
    author: "Bob Smith",
    date: "Jan 10, 2024",
    description:
      "Discover how to assemble a team that will maximize your chances of success.",
  },
  {
    id: 3,
    title: "Top Tools for Hackathon Projects",
    author: "Charlie Adams",
    date: "Jan 15, 2024",
    description:
      "A list of tools that can speed up your development and help deliver quality projects.",
  },
  {
    id: 4,
    title: "Mastering Time Management at Hackathons",
    author: "Diana Lee",
    date: "Jan 20, 2024",
    description:
      "Tips to manage your time effectively and focus on what's important during a hackathon.",
  },
];

const ArticlesList = () => {
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
              key={article.id}
              className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                By {article.author} • {article.date}
              </p>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a
                href={`/articles/${article.id}`}
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
