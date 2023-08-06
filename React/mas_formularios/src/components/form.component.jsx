import React, { useState } from "react";

const Form = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordeError] = useState("");
  const [confpasswordError, setConfPasswordError] = useState("");
  const [formCreated, setFormCreated] = useState(false);


  const handleOnChangeFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("Firstname must have 2 characters or longer!");
    } else {
      setFirstNameError("");
    }
  }

  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("lastname must have 2 characters or longer!");
    } else {
      setLastNameError("");
    }
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordeError("Password must have 8 character or longer!");
    } else {
      setPasswordeError("");
    } 
  }

  const handleOnChangeConfPassword = (e) => {
    if (e.target.value !== `${password}`) {
      setConfPasswordError("Password and confirm password must match");
    } else {
      setConfPasswordError("");
    }
  }


  const handleOnSubmitForm = (e) => {
    e.preventDefault(); 
    setFormCreated(true);
  };
 
  return (
    <div className="w-50 mt-4 mx-auto">
      <h1>Mas Formularios</h1>
      <form onSubmit={handleOnSubmitForm} className="mb-3">
        <div className="mb-3">
          <label htmlFor="FirstNameInput" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className={`form-control ${firstNameError ? "is-invalid" : ""}`}
            
            onChange={handleOnChangeFirstName}
          />
          {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="lastNameInput" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            className={`form-control ${lastNameError ? "is-invalid" : ""}`}
            
            onChange={handleOnChangeLastName}
          />
          {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className={`form-control ${lastNameError ? "is-invalid" : ""}`}
            
            onChange={handleOnChangePassword}
          />
          {passwordError && <div className="invalid-feedback">{passwordError}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className={`form-control ${lastNameError ? "is-invalid" : ""}`}
            
            onChange={handleOnChangeConfPassword}
          />
          {confpasswordError && <div className="invalid-feedback">{confpasswordError}</div>}
        </div>
        
       
      </form>
     
    </div>
  );
};

export default Form;