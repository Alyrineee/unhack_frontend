const leaders = [
  { name: "John Doe", score: 1500 },
  { name: "Jane Smith", score: 1400 },
  { name: "Alex Johnson", score: 1300 },
];

const LeaderboardSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Top Participants</h2>
      <ul className="max-w-md mx-auto space-y-4">
        {leaders.map((leader, index) => (
          <li
            key={index}
            className="flex justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <span className="font-medium">{leader.name}</span>
            <span className="font-semibold text-purple-600">{leader.score} pts</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LeaderboardSection;
