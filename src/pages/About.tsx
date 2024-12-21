import { Header } from "../components/Header";
import Footer from "../components/Footer";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { name: t("about.prog1"), role: "Fullstack Developer",  },
    { name: t("about.prog2"), role: "Backend Developer",  },
    { name: t("about.prog3"), role: "Fullstack Developer",  },
  ];

  return (
      <div className="flex flex-col min-h-screen bg-white text-black">
        <Header />

        <div className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{ t("about.aboutProject") }</h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              { t("about.aboutProjectDescription") }
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-8">{ t("about.teamTitle") }</h2>
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
