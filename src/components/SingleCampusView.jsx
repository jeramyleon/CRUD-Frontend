import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import { Link } from "react-router";
import "./SingleCampusView.css";

const CampusView = ({ campus }) => {
  const campusData = {
    name: "Xavier's School for Gifted Youngsters",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a63e2a0-ae27-4403-8484-7d0831588195/dcpk8ak-8c1602e5-b388-4c04-b2be-8f03a9f71adb.jpg/v1/fill/w_1024,h_773,q_75,strp/x_men_the_animated_series_background__19__by_sailorflower_dcpk8ak-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzczIiwicGF0aCI6IlwvZlwvM2E2M2UyYTAtYWUyNy00NDAzLTg0ODQtN2QwODMxNTg4MTk1XC9kY3BrOGFrLThjMTYwMmU1LWIzODgtNGMwNC1iMmJlLThmMDNhOWY3MWFkYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9dlCay6M1B9i-0_t4WmFcV1xBYglpajSlLwKbtImeKU",
    address: "Earth-616, NY, North Salem",
    description:
      "The Xavier's School for Gifted Youngsters is a special institute founded and led by Professor Charles Xavier to train young mutants in controlling their powers and help foster a friendly human-mutant relationship.",
  };

  return (
    <div className="campus-view-container">
      <NavBar />
      <div className="campus-details-card">
        <h1 className="campus-details-title">Campus Details</h1>

        <div className="campus-content-wrapper">
          {campusData.imageUrl && (
            <div className="campus-image-content">
              <img
                src={campusData.imageUrl}
                alt={campusData.name}
                className="campus-main-image"
              />
              <h2 className="campus-title">{campusData.name}</h2>
              <p className="campus-location">
                <strong>Address:</strong> {campusData.address}
              </p>
              <strong>Description:</strong> {campusData.description}
              <p className="campus-description-text">
                <div className="campus-action-buttons">
                  <Link to="/SingleCampusView/CampusEdit">
                    <button id="edit-campus">Edit Campus</button>
                  </Link>
                  <button id="remove-campus">Remove Campus</button>
                </div>
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CampusView;
