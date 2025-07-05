import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./CampusFormStyles.css";
import { Link } from "react-router";



const CampusForm = () => {
  return (
    <div>
      <NavBar />
      <h1 className="introduction">Welcome to the Campus Form Page</h1>
      <div className="Home3">

        <Link to="/CampusForm/SingleCampusView">
            <button id="Campus">Submit Campus</button>
        </Link>



      </div>
      <Footer />
    </div>

   

  );
};

export default CampusForm;