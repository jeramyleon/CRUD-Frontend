import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes } from "react-router";
import Footer from "./components/footer";

const searchCampus = () => {
    return (
    <div className="total">

      <NavBar />

      <div className="app">

        <h1 className="introduction">Hello Search for a campus</h1>

        <p className="brief">
          This project was created through the collaboration of Bilal Burton, Jeramy Leon, and Webbney Vallon.<br></br>
          The app was designed to help you find and add colleges and students. We hope you enjoyed our homepage.<br></br>
          Whenever you're ready, please click any of the 'Search' buttons located at the top of the page, which will direct you to our search pages.<br></br>
          Thank you for visiting!
        </p>

        <img class="campus-image" src="/campus.jpg"></img>

        

        <Routes>{/* Currently, we don't have any routes defined */}</Routes>
      
      </div>

      <Footer/>

    </div>
    )

}; 

export default searchCampus;