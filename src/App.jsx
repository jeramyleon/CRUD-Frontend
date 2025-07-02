import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes } from "react-router";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="total">

      <NavBar />

      <div className="app">

        <h1 className="introduction">Welcome to our CRUD App!</h1>

        <p className="brief">
          This project was created through the collaboration of Bilal Burton, Jeramy Leon, and Webbney Vallon.<br></br>
          The app was designed to help you find and register for NYC college campuses. We hope you enjoyed our homepage.<br></br>
          Whenever you're ready, please click any of the 'Search' buttons located at the top of the page, which will direct you to our search pages.<br></br>
          Thank you for visiting!
        </p>

        <img class="campus-image" src="/campus.jpg"></img>

        

        <Routes>{/* Currently, we don't have any routes defined */}</Routes>
      
      </div>

      <Footer/>

    </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare Routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
