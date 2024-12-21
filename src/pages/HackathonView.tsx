import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import apiClient from "../apiClient.ts";
import {Button} from "../components/Button.tsx";
import Profile from "./Profile.tsx";


interface Hackathon {
  id: number;
  name: string;
  description: string;
  diff: string;
  date_of_start: string;
  date_of_end: string;
  place: string;
  owner: number;
  members: [];
}

interface Profile {
  id: number;
}
const HackathonView = () => {
  const { id } = useParams(); // Получаем ID хакатона из URL

  const [hackathon, setHackathons] = useState<Hackathon>();
  useEffect(() => {
    apiClient.get("/api/hackathons/view/"+id)
        .then((response) => setHackathons(response.data))
  }, [])
  const handleDownload = async () => {
    try {
      const response = await apiClient.get(`/api/hackathons/${id}`, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "text/csv" });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch = contentDisposition?.match(/filename="(.+)"/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "hackaton_api.csv";

      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();

      // Убираем временный объект
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при загрузке файла", error);
    }
  };
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    apiClient.get("/api/user/")
        .then((response)=> setProfile(response.data))
        .catch((error)=> console.log(error));
  }, [])
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-purple-700">{hackathon?.name}</h1>
          <p className="text-gray-600 mt-2">{hackathon?.description}</p>
          <div className="mt-6 space-y-2">
            <p>
              <strong>Date:</strong> {hackathon?.date_of_start} - {hackathon?.date_of_end}
            </p>
            <p>
              <strong>Location:</strong> {hackathon?.place}
            </p>
            <p>
              <strong>Participants:</strong> {hackathon?.members.length}
            </p>
          </div>
          {hackathon?.members.includes(profile?.id) ?(
              <Button text="Отписаться" onClick={() => {
                apiClient.put(
                    "/api/hackathons/join",
                    {"hackaton_id": id}
                ).then(()=> {location.reload()})
              }
              }></Button>
          ) : hackathon?.owner == profile?.id ? (
              <Button text="Скачать" onClick={handleDownload}></Button>
          ): (
              <Button text="Записаться" onClick={() => {
                apiClient.put(
                    "/api/hackathons/join",
                    {"hackaton_id": id}
                ).then(()=> {location.reload()})
              }
              }></Button>
          )}
        </section>


      </div>

      <Footer />
    </div>
  );
};

export default HackathonView;
