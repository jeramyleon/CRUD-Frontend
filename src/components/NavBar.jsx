import React from "react";
import "./NavBarStyles.css";
import StudentPage from "./StudentPage";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="">Search Campus</a></li>
        <li><Link to="/students">Search Students</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
