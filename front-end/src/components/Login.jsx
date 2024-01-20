import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (username.trim() === "") {
      newErrors.username = "Username is required";
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

    // Clear form fields after successful submission (optional)
    setUsername("");
    setPassword("");
    setErrors({});
  };

  return (
    <div className="login-cont">
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={username}
              onChange={handleUsernameChange}
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
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button className="sign" type="submit">
            Sign in
          </button>
        </form>
        {/* Rest of your component */}
      </div>
    </div>
  );
}
