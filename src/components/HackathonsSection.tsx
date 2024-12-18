const hackathons = [
  { title: "Hackathon 1", date: "10-12 Jan 2024" },
  { title: "Hackathon 2", date: "15-17 Feb 2024" },
  { title: "Hackathon 3", date: "5-7 Mar 2024" },
];

const HackathonsSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Hackathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {hackathons.map((hackathon, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-purple-600">
              {hackathon.title}
            </h3>
            <p className="text-gray-500 mt-2">{hackathon.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonsSection;
