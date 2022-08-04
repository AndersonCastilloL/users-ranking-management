import React from "react";
import { Link } from "react-router-dom";
import { FaUsersCog } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="float-left pr-3">
          <h1 className="text-2xl">
            <SiGoogleclassroom className="inline-block text-red-400 align-top" />{" "}
            <Link to="/courses">Courses</Link>
          </h1>
        </li>
        <li className="float-left pr-3">
          <h1 className="text-2xl">
            <FaUsersCog className="inline-block text-red-400 align-top" />{" "}
            <Link to="/users">Users</Link>
          </h1>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
