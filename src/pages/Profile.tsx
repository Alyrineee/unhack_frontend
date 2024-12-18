import { Header } from "../components/Header";
import Footer from "../components/Footer";
import ProfileInfo from "../components/ProfileInfo";
import ProjectsList from "../components/ProjectsList";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">

      <Header />

      <div className="container mx-auto p-4 md:p-8">
        <ProfileInfo />

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Projects & Achievements
          </h2>
          <ProjectsList />
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Profile;
