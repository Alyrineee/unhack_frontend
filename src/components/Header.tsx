import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("accessToken")); // Проверка авторизации
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header>
      <nav className="w-full bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-2xl font-bold select-none" to={"/"}>
            unhack
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link
              className={`select-none ${isActive("/hackathons") ? "text-purple-500 cursor-default" : "hover:underline"}`}
              to={"/hackathons"}
            >
              Hackathons
            </Link>
            <Link
              className={`select-none ${isActive("/articles") ? "text-purple-500 cursor-default" : "hover:underline"}`}
              to={"/articles"}
            >
              Articles
            </Link>
            <Link
              className={`select-none ${isActive("/about") ? "text-purple-500 cursor-default" : "hover:underline"}`}
              to={"/about"}
            >
              About
            </Link>
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="relative z-10 focus:outline-none hover:underline"
                >
                  Profile
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                    <Link
                      to={"/profile"}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  className={`select-none ${isActive("/login") ? "text-purple-500 cursor-default" : "hover:underline"}`}
                  to={"/login"}
                >
                  Login
                </Link>
                <Link
                  className={`select-none ${isActive("/sign_up") ? "text-purple-500 cursor-default" : "hover:underline"}`}
                  to={"/sign_up"}
                >
                  Sign up
                </Link>
              </>
            )}
            <LanguageSwitcher />
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4">
            <Link
              className={`select-none ${isActive("/hackathons") ? "text-purple-500" : "hover:underline"}`}
              to={"/hackathons"}
              onClick={() => setIsOpen(false)}
            >
              Hackathons
            </Link>
            <Link
              className={`select-none ${isActive("/articles") ? "text-purple-500" : "hover:underline"}`}
              to={"/articles"}
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              className={`select-none ${isActive("/about") ? "text-purple-500" : "hover:underline"}`}
              to={"/about"}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  className="select-none hover:underline"
                  to={"/profile"}
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="select-none text-left hover:underline"
                  onClick={() => {
                    setIsOpen(false);
                    handleSignOut();
                  }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  className={`select-none ${isActive("/login") ? "text-purple-500" : "hover:underline"}`}
                  to={"/login"}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  className={`select-none ${isActive("/sign_up") ? "text-purple-500" : "hover:underline"}`}
                  to={"/sign_up"}
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </>
            )}
            <LanguageSwitcher />
          </div>
        )}
      </nav>
    </header>
  );
};
