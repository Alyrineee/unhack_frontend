import { Header } from "../components/Header";
import Footer from "../components/Footer";
import HackathonsSection from "../components/HackathonsSection";
import LeaderboardSection from "../components/LeaderboardSection";
import ArticlesSection from "../components/ArticlesSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">

      <Header />

      <section className="bg-purple-100 text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700">
          Welcome to Unhack
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Join hackathons, build amazing projects, connect with people, and climb the leaderboard. 
          Publish articles to share your expertise with the community.
        </p>
        <div className="mt-6">
          <a
            href="/sign_up"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      <HackathonsSection />

      <LeaderboardSection />

      <ArticlesSection />

      <Footer />
    </div>
  );
};

export default HomePage;
