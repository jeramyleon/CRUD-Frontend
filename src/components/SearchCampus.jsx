import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./HomePageStyles.css";
import "./SearchCampusStyles.css";
import "./SingleCampusView.css";
import CampusCard from "./CampusCard";
import { Link } from "react-router";
import { campuses } from "./campusMockData";

const SearchCampus = () => {
  // const [Campus, setCampus] = useState([]);

  // useEffect(() => {
  //   const mockData = [
  //     {
  //       id: 1,
  //       name: "Xavier's school for Gifted youngsters",
  //       address: "Earth-616, NY, North Salem",
  //       picture: "/campus.jpg",
  //       discription:
  //         "The Xavier's School for Gifted Youngsters is a special institute founded and led by Professor Charles Xavier to train young mutants in controlling their powers and help foster a friendly human-mutant relationship.",
  //     },
  //   ];

  //   setCampus(mockData);
  // }, []);

  return (
    <div>
      <NavBar />
      <h1 className="introduction">Welcome to the Campus Compendium!</h1>
      <div className="Home2">
        <p className="brief2">
          Feel free to look through our catalog of campuses.
          <br />
          If you see one you like click on it, for more info.
          <br />
          However if the campus you're looking for is missing,
          <br />
          use the "Register Campus" button to add it.
        </p>

        <Link to="/CampusSearch/CampusForm">
          <button id="add-campus">Register Campus</button>
        </Link>
      </div>
      <div>
        {campuses.map((campus) => (
          <CampusCard
            key={campus.id}
            name={campus.name}
            address={campus.address}
            picture={campus.picture}
            discription={campus.discription}
          />
        ))}
      </div>
      {/* <CampusCard students={students} /> */}
      <Footer />
    </div>
  );
};

export default SearchCampus;

// 1. import card,
// 2.
