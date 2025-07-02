import React from "react";

const HomePage = () => {
   return (
       
       <div className="app">

        <h1 className="introduction">Welcome to our CRUD App!</h1>

        <p className="brief">
          This project was created through the collaboration of Bilal Burton, Jeramy Leon, and Webbney Vallon.<br></br>
          The app was designed to help you find and add colleges and students. We hope you enjoyed our homepage.<br></br>
          Whenever you're ready, please click any of the 'Search' buttons located at the top of the page, which will direct you to our search pages.<br></br>
          Thank you for visiting!
        </p>

        <img class="campus-image" src="/campus.jpg"></img>

      
      </div>

   ) 
};

export default HomePage;