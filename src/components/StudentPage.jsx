import React, {useEffect, useState} from "react";
import "./StudentPageStyles.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";

const StudentPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "Jeramy Leon",
        campus: "BMCC",
        picture: "/campus.jpg"
      },
      {
        id: 2, 
        name: "Lebron James",
        campus: "St Vincent St Mary",
        picture: "/campus.jpg"
      },
      {
        id: 3,
        name: "Michael Jordan",
        campus: "North Carolina",
        picture: "/campus.jpg"
      },
      {
        id: 4,
        name: "Kobe Bryant",
        campus: "Kobe academy",
        picture: "/campus.jpg"
      },
      {
        id: 5,
        name: "Stephen Curry",
        campus: "Davidson",
        picture: "/campus.jpg"
      }
  ];

    setStudents(mockData);
  }, []);
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
                  key={student.id}
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
