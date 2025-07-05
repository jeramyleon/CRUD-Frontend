import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import StudentPage from "./components/StudentPage";
import StudentFormPage from "./components/newStudentFormPage";
import EditFormPage from "./components/editPage";
import SingleStudentView from "./components/singleViewStudent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="all"> <HomePage/> </div>}/>
        <Route path="/students" element={<StudentPage/>}/>
        <Route path="/students/NewStudentForm" element={<StudentFormPage/>}/>
        <Route path="/editStudent" element={<EditFormPage/>}/>
        <Route path="/singleStudent" element={<SingleStudentView/>}/>
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
