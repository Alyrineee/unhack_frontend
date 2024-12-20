import { Header } from "../components/Header";
import Footer from "../components/Footer";
import ProfileInfo from "../components/ProfileInfo";
import ProjectsList from "../components/ProjectsList";
import {useEffect, useState} from "react";
import apiClient from "../apiClient.ts";

interface Profile {
    id: number;
    email: string;
    nickname: string;
    phone: string;
    achievements: [];
}

const Profile = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    useEffect(() => {
        apiClient.get("/api/user/")
            .then((response)=> setProfile(response.data))
            .catch((error)=> console.log(error));
    })
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">

      <Header />

      <div className="container mx-auto p-4 md:p-8">
        <ProfileInfo nickname={profile?.nickname}/>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Achievements
          </h2>
          <ProjectsList achievements={profile?.achievements}/>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Profile;
