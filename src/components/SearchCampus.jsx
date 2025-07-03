import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer"; 
import "./HomePageStyles.css"
import "./SearchCampusStyles.css"
const SearchCampus = () => {
    return (
    <div>
      <NavBar />
        <h1 className="introduction">Welcome to the Campus Compendium</h1>
      <div className="Home2">

        <p className="brief">
        Feel free to look through our cataloge of campuses.
         <br></br>
        If you see one you like click on it, for more info.
         <br></br>
        However if the campus you're looking for is missing.
        <br></br>
        use the "Register Campus" button to add it.
        </p>
         <button id = "add-campus">Register Campus</button>
      </div>

      <Footer/>
    </div>
    )

}; 

export default SearchCampus;