import { Header } from "../components/Header";
import Footer from "../components/Footer";

interface Hackathon {
  id: number;
  title: string;
  date: string;
  location: string;
  status: "Open" | "Closed" | "Upcoming";
}

const hackathons: Hackathon[] = [
  {
    id: 1,
    title: "Winter CodeFest 2024",
    date: "Jan 20-22, 2024",
    location: "Online",
    status: "Open",
  },
  {
    id: 2,
    title: "AI Challenge 2024",
    date: "Feb 5-7, 2024",
    location: "San Francisco, CA",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Hack the Future",
    date: "Feb 15-17, 2024",
    location: "New York, NY",
    status: "Closed",
  },
  {
    id: 4,
    title: "Startup Sprint",
    date: "Mar 10-12, 2024",
    location: "Berlin, Germany",
    status: "Open",
  },
];

const HackathonsList = () => {
  const getStatusColor = (status: Hackathon["status"]) => {
    switch (status) {
      case "Open":
        return "text-green-600 bg-green-100";
      case "Upcoming":
        return "text-blue-600 bg-blue-100";
      case "Closed":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">

      <Header />

      <section className="bg-purple-100 py-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-purple-700">Hackathons</h1>
        <p className="mt-2 text-gray-600">
          Explore upcoming and past hackathons. Join, innovate, and compete!
        </p>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                {hackathon.title}
              </h2>
              <p className="text-gray-600 mb-1">
                📅 <strong>Date:</strong> {hackathon.date}
              </p>
              <p className="text-gray-600 mb-1">
                📍 <strong>Location:</strong> {hackathon.location}
              </p>
              <span
                className={`inline-block rounded-md px-3 py-1 text-sm font-medium ${getStatusColor(
                  hackathon.status
                )}`}
              >
                {hackathon.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HackathonsList;
