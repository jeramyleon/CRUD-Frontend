import React, {useState} from "react";
import "./singleViewStudentStyles.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import { Link } from "react-router";

const SingleStudentView = () => {
    return (
        <div>
            <NavBar/>

            <div className="StudentBody">

                <h1 className="singleHeader">Single Student View</h1>

                <div class="student-all-elements">
                    <img id="student-image" src="/campus.jpg"></img>

                    <div class="student-info">
                        <h2 id="student-name">student.name</h2>

                        <h3 id="student-gpa">GPA: 3.4</h3>

                        <div className="edit-delete-buttons">
                            <button id="edit-button">edit</button>
                            <button id="delete-button">delete</button>
                        </div>
                    </div>
                </div>

                <div className="campus-registry">
                    <p>This student is not registered to a campus.</p>

                    <select id="select-campus-list">
                        <option disabled selected>Select Campus...</option>
                        <option>Campus 1</option>
                        <option>Campus 2</option>
                        <option>Campus 3</option>
                    </select>

                    <button id="add-to-campus-button">Add To Campus</button>
                </div>
            </div>

            <Footer/>
    </div>
  );
};

export default SingleStudentView;