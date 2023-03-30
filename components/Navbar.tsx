import React, { FC } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode }: Props) => {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="text-xl font-burtons">Shubham Bhojane</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer 2xl"
            />
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1VjDqpMus5mkSSUTKqTIVuRJ637VjzyVp/view?usp=share_link"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
