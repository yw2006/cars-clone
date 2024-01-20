import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Login() {
  const [email, setEmailname] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmailname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (email.trim() === "") {
      newErrors.username = "email is required";
    }
    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission if there are errors
    }

    // Continue with your login logic
    // ...
    const res=await axios.post("http://localhost:5000/signin",{email,password});
    console.log(res);
    localStorage.setItem("token", res.data.token);
    
    // Clear form fields after successful submission (optional)
    setEmailname("");
    setPassword("");
    setErrors({});
    
  };

  return (
    <div className="login-cont">
      <Navbar/>
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">email</label>
            <input
              type="text"
              name="email"
              id="username"
              placeholder=""
              value={email}
              onChange={handleEmailChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button className="sign mt-3" type="submit">
            Sign in
          </button>
          <Link to="/signup">signup</Link>
        </form>
        {/* Rest of your component */}
      </div>
    </div>
  );
}
