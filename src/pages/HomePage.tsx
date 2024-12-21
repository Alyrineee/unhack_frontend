import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { DividerMain } from "../components/DividerMain";

import { useTranslation } from "react-i18next";

interface Leader {
    nickname: string;
    participant_points: number;
}

const HomePage = () => {
    const { t } = useTranslation();

    const [organizers, setOrganizers] = useState<Leader[]>([]);
    const [participants, setParticipants] = useState<Leader[]>([]);

    useEffect(() => {
        // Fetch data for top organizers
        fetch("http://localhost:8000/api/rating/organizer_rating?page=1&amount=3")
            .then((response) => response.json())
            .then((data) => {
                setOrganizers(data.results); // Set organizers in the state
            })
            .catch((error) => {
                console.error("Error fetching organizers:", error);
            });

        // Fetch data for top participants
        fetch("http://localhost:8000/api/rating/participant_rating?page=1&amount=3")
            .then((response) => response.json())
            .then((data) => {
                setParticipants(data.results); // Set participants in the state
            })
            .catch((error) => {
                console.error("Error fetching participants:", error);
            });
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Header />

            <section className="bg-purple-100 text-center py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-700">
                    { t("home.welcome") }
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    { t("home.welcomeDescription") }
                </p>
                <div className="mt-6">
                    <a
                        href="/sign_up"
                        className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        { t("home.startBtn") }
                    </a>
                </div>
            </section>

            <section className="bg-gray-50 py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-6">
                    { t("home.topOrganizers") }
                </h2>
                <ul className="max-w-md mx-auto space-y-4">
                    {organizers.map((leader, index) => (
                        <li
                            key={index}
                            className="flex justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <span className="font-medium">{leader.nickname}</span>
                            <span className="font-semibold text-purple-600">
                {leader.participant_points} pts
              </span>
                        </li>
                    ))}
                </ul>
            </section>

            <DividerMain />

            <section className="bg-gray-50 py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-6">
                    { t("home.topParticipants") }
                </h2>
                <ul className="max-w-md mx-auto space-y-4">
                    {participants.map((leader, index) => (
                        <li
                            key={index}
                            className="flex justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <span className="font-medium">{leader.nickname}</span>
                            <span className="font-semibold text-purple-600">
                {leader.participant_points} pts
              </span>
                        </li>
                    ))}
                </ul>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
