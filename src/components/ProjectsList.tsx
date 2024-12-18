import { useState } from "react";

const projects = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"];

const ProjectsList = () => {
  const [isOpenAll, setIsOpenAll] = useState(false);

  return (
    <div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-purple-100 rounded-lg mb-2 px-4 py-2"
        >
          <span className="font-medium">{project}</span>
          <span className="text-xl cursor-pointer">→</span>
        </div>
      ))}

      {/* Кнопка Open All */}
      <button
        onClick={() => setIsOpenAll(!isOpenAll)}
        className="text-sm text-gray-500 mt-4 hover:underline block text-center"
      >
        {isOpenAll ? "collapse all..." : "open all..."}
      </button>
    </div>
  );
};

export default ProjectsList;
