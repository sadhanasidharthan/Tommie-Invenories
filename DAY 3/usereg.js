import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Link } from "react-router-dom";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      usergmail:"727722euai501@gmail.com",
      password: "pass1",
      number: "1234567890",
      city:" ",
      state: " ",
      pincode: " "

    },
    {
      username: "user2",
      usergmail:"22leai002@gmail.com",
      password: "pass2",
      number: "1234567890",
      city:" ",
      state: " ",
      pincode: " "
    }
  ];

  const errors = {
    uname: "invalid username",
    ugmail: "invalid ugmail",
    pass: "invalid password",
    number: "invalid number",
    city:" ",
    state: " ",
    pincode: " "
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, ugmail, pass, number } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    
    
    <div className="form">

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="ugmail" required />
          {renderErrorMessage("ugmail")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Number </label>
          <input type="text" name="number" required />
          {renderErrorMessage("number")}
        </div><div className="input-container">
          <label>City  </label>
          <input type="text" name="City" required />
          {renderErrorMessage("number")}
        </div><div className="input-container">
          <label>State </label>
          <input type="text" name="State" required />
          {renderErrorMessage("number")}
        </div><div className="input-container">
          <label>Pincode </label>
          <input type="text" name="Pincode" required />
          {renderErrorMessage("number")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
        <Link to="/" >Login Now</Link>
        </div>
      </form>
    </div>
  );

  return (

    <div className="app">
      <div className="login-form">
        <div className="title">Registration</div>
        {isSubmitted ? <div>User is successfully registration </div> : renderForm}
      </div>
    </div>
  
  );
}

export default App;