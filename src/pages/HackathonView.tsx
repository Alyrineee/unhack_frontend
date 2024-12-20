import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import apiClient from "../apiClient.ts";


interface Hackathon {
  id: number;
  name: string;
  description: string;
  diff: string;
  date_of_start: string;
  date_of_end: string;
  place: string;
  members: [];
}

const HackathonView = () => {
  const { id } = useParams(); // Получаем ID хакатона из URL

  const [hackathon, setHackathons] = useState<Hackathon>();
  useEffect(() => {
    apiClient.get("/api/hackathon/"+id)
        .then((response) => setHackathons(response.data))
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <div className="container mx-auto px-6 py-12">
        {/* Название и основная информация */}
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
        </section>


      </div>

      <Footer />
    </div>
  );
};

export default HackathonView;
