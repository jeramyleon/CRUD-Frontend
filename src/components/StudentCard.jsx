import React from "react";
import "./StudentCardStyles.css";
import { Link } from "react-router";

const StudentCard = ({ name, campus, picture}) => {
  return (
    <div className="Box">
        <div className="InternalBox">
            <img id="studentPicture" src={picture} alt={`${name}'s picture`}/>
            <Link to="/singleStudent">
              <h2 id="studentName">{name}</h2>
            </Link>
            <p id="campusName">{campus}</p>
        </div>
    </div>
  );
};

export default StudentCard;