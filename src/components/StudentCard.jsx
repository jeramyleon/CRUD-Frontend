import React from "react";
import "./StudentCardStyles.css";

const StudentCard = () => {
  return (
    <div className="Box">
        <div className="InternalBox">
            <img id="studentPicture"alt="picture"></img>
            <h2 id="studentName">Student Name</h2>
            <p id="campusName">campus name</p>

        </div>
    </div>
  );
};

export default StudentCard;