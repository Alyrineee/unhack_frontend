import React from 'react';

interface ProfileInfoProps {
  nickname: string;

}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ nickname }) =>  {

  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4">
      <div className="bg-purple-200 rounded-lg p-6 w-36 h-36 flex items-center justify-center">
        <span className="text-6xl text-purple-800">🙎</span>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold">{nickname}</h1>

      </div>
    </div>
  );
};

export default ProfileInfo;
