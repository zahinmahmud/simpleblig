import React from "react";
import TopHeader from "./TopHeader";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
const [open, setOpen] = useState(false);
  return (
    <div>
      <TopHeader />
      {/* <div className="flex justify-between items-center bg-orange-500 text-white">
        <div>
          <img src={logo} alt="" className="w-16" />
        </div>
        <div>
          <div>
            <nav className="hidden md:block">
              <ul className="flex items-center justify-between gap-2 text-xl px-4">
                <li className="hover:text-blue-500 font-extrabold">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-blue-500 font-extrabold">
                  <a href="#">About</a>
                </li>
                <li className="hover:text-blue-500 font-extrabold">
                  <a href="#">Blog</a>
                </li>
                <li className="hover:text-blue-500 font-extrabold">
                  <a href="#">Categories</a>
                </li>
                <li className="hover:text-blue-500 font-extrabold">
                  <a href="#">Members</a>
                </li>

                <div className="flex gap-2">
                  <FaSearch />
                  <FiMenu />
                </div>
                <div>
                  <button>Sign In</button>
                  <button>Registration</button>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div> */}
    <nav className="bg-orange-500 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold">Logo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="bg-orange-600">
          <li className="border-b border-orange-400">
            <a href="#" className="block px-4 py-3 hover:bg-orange-700">
              Home
            </a>
          </li>
          <li className="border-b border-orange-400">
            <a href="#" className="block px-4 py-3 hover:bg-orange-700">
              About
            </a>
          </li>
          <li className="border-b border-orange-400">
            <a href="#" className="block px-4 py-3 hover:bg-orange-700">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-3 hover:bg-orange-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>


    </div>
  );
};

export default Header;
