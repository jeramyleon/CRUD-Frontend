import React, {useState} from "react";
import "./newStudentFormPageStyles.css";
import NavBar from "./NavBar";
import Footer from "./footer";

const StudentFormPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            setErrorMessage('First name cannot be empty.')
            console.log(errorMessage);
        } else {
            setErrorMessage('');
            console.log('First name accepted.');
        }
    };

    return (
        <div>
            <NavBar/>

            <div className="StudentBody">

                <h1 className="introduction">New Student</h1>
        
                <form onSubmit={handleSubmit}>
                    <label>First name:</label><br></br>
                    <input type="text" id="firstname" name="firstname" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input><br></br>
                    {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}

                    <label>Last name:</label><br></br>
                    <input type="text" id="lastname" name="lastname" value={inputValue}></input><br></br>

                    <label>Email:</label><br></br>
                    <input type="text" id="email" name="email"></input><br></br>

                    <label>Image url:</label><br></br>
                    <input type="text" id="image" name="image"></input><br></br>

                    <label>GPA:</label><br></br>
                    <input type="text" id="gpa" name="gpa"></input><br></br>


                    <button id="addStudentToDatabase">Submit</button>                
                </form>
            </div>

            <Footer/>
    </div>
  );
};

export default StudentFormPage;