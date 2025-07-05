import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import { Link } from "react-router";

const CampusView = () => {
  return (
    <div>
      <NavBar />
      <p>
        This page is for the Single campus view.
        <Link to="/SingleCampusView/CampusEdit" >
          <button>Edit Campus</button>
        </Link>
      </p>
      <Footer />
    </div>
  );
};

export default CampusView;
