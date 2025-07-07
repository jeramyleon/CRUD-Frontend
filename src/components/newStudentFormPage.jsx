import React, {useState} from "react";
import "./newStudentFormPageStyles.css";
import StudentPage from "./StudentPage";
import NavBar from "./NavBar";
import Footer from "./footer";
import { useNavigate, useParams } from "react-router-dom";
import { students } from "./studentMockData";

const StudentFormPage = () => {
    let studentCount = students.length;

    const [formData, setFormData] = useState({
        name: '',
        gpa: 0, 
        image: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });  
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Username is required.';
        }

        const gpaValue = parseFloat(formData.gpa);
        if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4) {
            newErrors.gpa = 'Number must be between 0 and 4.';
        }

        if (!formData.image) {
            formData.image = '/campus.jpg';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            studentCount++;
            students.push(
                {
                    id: studentCount,
                    name: formData.name,
                    campus: 'none',
                    picture: formData.image
                }
            );

            navigate(`/singleStudent/${studentCount}`);
        }
    };

    return (
        <div>
            <NavBar/>

            <div className="StudentBody">

                <h1 className="headerForm">New Student</h1>
        
                <form className="form" onSubmit={handleSubmit}>
                    <label>Name:</label><br></br>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}></input><br></br>
                    {errors.name && <p style={{color:'red'}}>{errors.name}</p>}

                    <label>GPA:</label><br></br>
                    <input type="text" id="gpa" name="gpa" value={formData.gpa} onChange={handleInputChange}></input><br></br>
                    {errors.gpa && <p style={{color:'red'}}>{errors.gpa}</p>}

                    <label>Image URL:</label><br></br>
                    <input type="text" id="image" name="image" value={formData.image} onChange={handleInputChange}></input><br></br>
                    {errors.image && <p style={{color:'red'}}>{errors.image}</p>}

                    <button id="addStudentToDatabase">Submit</button>                
                </form>
            </div>

            <Footer/>
    </div>
  );
};

export default StudentFormPage;