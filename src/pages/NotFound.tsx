import { Link } from "react-router-dom";
import { Header } from "../components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">

      <Header />

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bold text-purple-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
