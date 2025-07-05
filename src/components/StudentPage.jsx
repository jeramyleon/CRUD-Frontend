import React from "react";
import "./StudentPageStyles.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import StudentCard from "./StudentCard";
import { Link } from "react-router";


const StudentPage = () => {
  return (
    <div>
        <NavBar/>

        {/* <StudentCard/> */}
        <div className="StudentBody">

          <h1 className="introduction">All Students</h1>

          <p>There are no students registered in the database.</p>
        
          <Link to="/students/NewStudentForm">
            <button id="addStudentButton">Add Student</button>
          </Link>

        </div>

        <Footer/>
    </div>
  );
};

export default StudentPage;
