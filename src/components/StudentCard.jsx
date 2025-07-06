import React from "react";
import "./StudentCardStyles.css";

const StudentCard = ({ name, campus, picture}) => {
  return (
    <div className="Box">
        <div className="InternalBox">
            <img id="studentPicture" src={picture} alt={`${name}'s picture`}/>
            <h2 id="studentName">{name}</h2>
            <p id="campusName">{campus}</p>
        </div>
    </div>
  );
};

export default StudentCard;