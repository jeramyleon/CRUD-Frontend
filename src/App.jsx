import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, BrowserRouter as Router, Routes } from "react-router";
import Footer from "./components/footer";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div className="total">

      <NavBar/>
      <HomePage/>
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
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
