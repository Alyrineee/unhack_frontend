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
  unique_link: string,
}


const HackathonsList = () => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);

  useEffect(() => {
    apiClient.get(`/api/hackatons/`)
        .then((response) => setHackathons(response.data))
        .catch((error) => console.log(error));
  }, [])
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
          {hackathons?.map((hackathon: Hackathon) => (
              <a href={"hackathons/"+hackathon.unique_link}>
                <div
                    className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition"

                >
                  <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                    {hackathon.name}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    📅 <strong>Date:</strong> {hackathon.date_of_start} - {hackathon.date_of_end}
                  </p>
                  <p className="text-gray-600 mb-1">
                    📍 <strong>Location:</strong> {hackathon.place}
                  </p>
                </div>
              </a>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default HackathonsList;
