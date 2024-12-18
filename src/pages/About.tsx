import { Header } from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const teamMembers = [
    { name: "John Doe", role: "Frontend Developer", bio: "Loves React and Tailwind." },
    { name: "Jane Smith", role: "Backend Developer", bio: "Works with Node.js and databases." },
    { name: "Mike Johnson", role: "Fullstack Developer", bio: "Combines frontend and backend expertise." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* О Проекте */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About the Project</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Our platform is designed to help organize hackathons, connect people into teams,
            and provide tools for publishing articles and ranking participants based on their
            achievements and contributions.
          </p>
        </section>

        {/* Команда разработки */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
