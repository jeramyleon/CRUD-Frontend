import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="app">
        <h1 class="TTP">TTP</h1>
        <img className="react-logo" src="/react-logo.svg" alt="React Logo" />
        <p className="header">Welcome to our CRUD App!</p>
        <p className="brief">This project was created through the collaboration of Bilal Burton, Jeramy Leon, and Webbney Vallon.<br></br>
          The app was designed to help you find and register for NYC college campuses. We hope you enjoyed our homepage.<br></br>
          When you're ready, please click the 'Search' button located at the top right of the screen, which will direct you to our search page.<br></br>
          Thank you for visiting!</p>
        <footer>All Rights Reserved. ©2025</footer>
        <img class="campus-image" src="/campus.jpg"></img>
        <button className="searchButton">Search</button>
        <Routes>{/* Currently, we don't have any routes defined */}</Routes>
      </div>
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
