import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./CampusCardStyles.css"
import { Link } from "react-router";

const CampusCard = ({picture, name, address, discription}) => {
    return (
      <div className="Campus-box">
        <div className="campus-InternalBox">
          <img id="CampusPicture" src={picture} alt={`${name}'s picture`} />
          <div className="campus-content">
            <h2 id="studentName">{name}</h2>
            <p id="campusName">{address}</p>
            <p id="campus dis">{discription}</p>
          </div>
        </div>
        <div className="campus-buttons">
            <Link to="/CampusCard/CampusEdit">
          <button id="Edit1">Edit Campus</button>
            </Link>
          <button id="Delete2">Delete Campus</button>
          <button id="AS2">View Students</button>
        </div>
      </div>
    );
};

export default CampusCard;