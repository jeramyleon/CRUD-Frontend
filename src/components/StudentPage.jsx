import React, {useEffect, useState} from "react";
import "./StudentPageStyles.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";
import { students } from "./studentMockData";

const StudentPage = () => {
  return (
    <div>
        <NavBar/>

        <div className="StudentBody">

          <h1 className="introduction">All Students</h1>

          {students.length === 0 ? (
          <p>There are no students registered in the database.</p>
          ) : (
            <div className="studentGrid">
              {students.map((student) =>(
                <StudentCard
                  id={student.id}
                  name={student.name}
                  campus={student.campus}
                  picture={student.picture}
                />
              ))}
            </div>
          )}

          <Link to="/students/NewStudentForm">
            <button id="addStudentButton">Add Student</button>
          </Link>

        </div>

        <Footer/>
    </div>
  );
};

export default StudentPage;
