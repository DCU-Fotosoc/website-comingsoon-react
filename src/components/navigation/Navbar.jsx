import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../../images/logo/logo.png";
import JoinButton from "./../Joinbutton";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAccountMenu = () => {
    setAccountMenuOpen(!accountMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4 flex justify-between items-center relative">
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              width="100px"
              height="100px"
              alt="Logo"
              className="w-12 h-auto"
            />
          </a>
          <a href="/">
            <span className="text-white text-lg font-semibold ml-2">
              DCU Fotosoc
            </span>
          </a>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:bg-gray-700 px-2 py-1 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-12">
          <JoinButton />
        </div>
      </nav>

      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="bg-gray-800 flex flex-col items-left pl-5 space-y-4 py-4 relative">
          <JoinButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
