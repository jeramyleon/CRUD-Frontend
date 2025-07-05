import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import { BrowserRouter , Router, Routes, Route } from "react-router-dom";
import SearchCampus from "./components/SearchCampus";
//import SearchStudents from "./components/SearchStudents";
import HomePage from "./components/HomePage";
import CampusForm from "./components/CampusForm";
import CampusView from "./components/SingleCampusView";


const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="all"> <HomePage/> </div>}> 
        </Route>
        <Route path="/CampusSearch" element={<SearchCampus/> }> 
        </Route>
         {/* <Route path="/" element={<div className="all"> <SearchStudents/> </div>}> 
        </Route> */}
        <Route path="/CampusSearch/CampusForm" element={<CampusForm/> }/> 
        <Route path="/CampusForm/SingleCampusView" element={<CampusView/> }/> 
      </Routes>
    </BrowserRouter>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare Routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
    <App />
);
