import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import Footer from "../components/Footer";

const HackathonView = () => {
  const { id } = useParams(); // Получаем ID хакатона из URL

  console.log(id)

  // Пример данных о хакатоне
  const hackathon = {
    id: "1",
    title: "Unhack 2024 Global Hackathon",
    description:
      "Join us for an exciting hackathon where developers, designers, and innovators collaborate to create solutions to real-world problems. Compete for prizes, network with peers, and have fun!",
    date: "March 15-17, 2024",
    location: "San Francisco, CA",
    participants: 250,
    tags: ["AI", "Web Development", "Blockchain"],
    recommendations: [
      { id: "2", title: "AI Challenge 2024" },
      { id: "3", title: "Blockchain Innovators Meetup" },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <div className="container mx-auto px-6 py-12">
        {/* Название и основная информация */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-purple-700">{hackathon.title}</h1>
          <p className="text-gray-600 mt-2">{hackathon.description}</p>
          <div className="mt-6 space-y-2">
            <p>
              <strong>Date:</strong> {hackathon.date}
            </p>
            <p>
              <strong>Location:</strong> {hackathon.location}
            </p>
            <p>
              <strong>Participants:</strong> {hackathon.participants}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {hackathon.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Рекомендации */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recommended Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathon.recommendations.map((rec) => (
              <div
                key={rec.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-purple-700">
                  {rec.title}
                </h3>
                <a
                  href={`/hackathons/${rec.id}`}
                  className="text-purple-500 hover:underline mt-2 inline-block"
                >
                  View Details
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

export default HackathonView;
