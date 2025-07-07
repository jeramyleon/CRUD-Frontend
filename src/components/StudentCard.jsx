import React from "react";
import "./StudentCardStyles.css";
import { Link } from "react-router-dom";
import { students } from "./studentMockData";
import { campuses } from "./campusMockData";

const StudentCard = ({ id, name, campus, picture}) => {
  return (
    <div className="Box">
        <div className="InternalBox">
            <img id="studentPicture" src={picture} alt={`${name}'s picture`}/>

            <Link to={`/singleStudent/${id}`}>
              <h2 id="studentName">{name}</h2>
            </Link>

            <Link to="/CampusForm/SingleCampusView">
              <p id="campusName">{campus}</p>
            </Link>
            
        </div>
    </div>
  );
};

export default StudentCard;