import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import LanguageSwitcher from "./LanguageSwitcher";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      <nav className="w-full bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            className="text-2xl font-bold select-none"
            to={"/"}
          >
            unhack
          </Link>
          <div className="hidden md:flex gap-6">
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
            <Link
              className={`select-none ${isActive("/profile") ? "text-purple-500 cursor-default" : "hover:underline"}`}
              to={"/profile"}
            >
              Profile
            </Link>
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
            <Link
              className={`select-none ${isActive("/profile") ? "text-purple-500" : "hover:underline"}`}
              to={"/profile"}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <LanguageSwitcher />
          </div>
        )}
      </nav>
    </header>
  );
};
