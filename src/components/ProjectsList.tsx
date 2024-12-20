import React from 'react';


interface ProfileInfoProps {
    achievements: [];
}

const ProjectsList: React.FC<ProfileInfoProps> = ({achievements}) => {

    return (
        <div>
            {achievements?.map((project, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center bg-purple-100 rounded-lg mb-2 px-4 py-2"
                >
                    <span className="font-medium">{project}</span>
                </div>
            ))}

        </div>
    );
};

export default ProjectsList;
