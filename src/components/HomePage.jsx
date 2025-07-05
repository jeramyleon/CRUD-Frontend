import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer"; 
import "./HomePageStyles.css"

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="Home">
        <h1 className="introduction">Welcome to our CRUD App!</h1>

        <p className="brief">
          This project was created through the collaboration of Bilal Burton,
          Jeramy Leon, and Webbney Vallon.<br></br>
          This app was designed to view and log colleges and students.
          We hope you enjoyed our homepage.<br></br>
          Whenever you're ready, please use the 'Compendium' tabs
          located at the top of the page, which will direct you to our Compendium
          pages.<br></br>
          Thank you for visiting!
        </p>

        <img class="campus-image" src="/campus.jpg"></img>
      </div>

      <Footer/>
    </div>
  );
};

export default HomePage;
