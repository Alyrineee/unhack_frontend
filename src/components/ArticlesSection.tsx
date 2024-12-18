const articles = [
  { title: "How to win a hackathon", author: "Alice", date: "Jan 2, 2024" },
  { title: "Building strong teams", author: "Bob", date: "Jan 10, 2024" },
];

const ArticlesSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              By {article.author} on {article.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
