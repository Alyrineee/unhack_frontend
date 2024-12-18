const ProfileInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4">
      {/* Аватар */}
      <div className="bg-purple-200 rounded-lg p-6 w-36 h-36 flex items-center justify-center">
        <span className="text-6xl text-purple-800">🙎</span>
      </div>

      {/* Описание профиля */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Nickname</h1>
        <a href="#" className="text-purple-500 text-sm hover:underline">
          ✏ edit profile
        </a>
        <p className="mt-2 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta.
        </p>
        <div className="mt-4 flex gap-4 justify-center md:justify-start">
          <a href="#" className="text-2xl text-gray-600 hover:text-black">
            🌐
          </a>
          <a href="#" className="text-2xl text-gray-600 hover:text-black">
            🐦
          </a>
          <a href="#" className="text-2xl text-gray-600 hover:text-black">
            ❌
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
