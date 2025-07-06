import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

const CampusEditPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Campus name is required";
      valid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      valid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    } else if (formData.description.length < 20) {
      newErrors.description = "Description should be at least 20 characters";
      valid = false;
    }

    if (formData.imageUrl && !/^https?:\/\/.+\..+/.test(formData.imageUrl)) {
      newErrors.imageUrl = "Please enter a valid URL";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      navigate("/CampusForm/SingleCampusView");
    }
  };

  return (
    <div className="campus-form-page">
      <NavBar />
      <div className="CampusBody">
        <h1 className="headerForm">Edit Campus Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Campus Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Campus Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="error-message">{errors.address}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Campus Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
            {errors.description && (
              <p className="error-message">{errors.description}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            {errors.imageUrl && (
              <p className="error-message">{errors.imageUrl}</p>
            )}
          </div>
          <button
            type="submit"
            id="addCampusToDatabase"
            className="submit-button"
            disabled={
              !formData.name ||
              !formData.address ||
              !formData.description ||
              Object.values(errors).some((error) => error)
            }
          >
            Register Campus
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CampusEditPage;
