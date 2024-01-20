import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [secondAddress, setSecondAddress] = useState("");
  const [gender,setGender]=useState('male');
  const [errors, setErrors] = useState({});
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const handleNameChange = async (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSecondAddressChange = (e) => {
    setSecondAddress(e.target.value);
  };
  const handleGenderChange = (e)=>{
    setGender(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (phone.trim() === "") {
      newErrors.phone = "Phone is required";
    }
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }
    if (password2.trim() === "") {
      newErrors.password2 = "Confirm Password is required";
    }
    if (password2 !== password) {
      newErrors.password2 = "this must be the same password";
    }
    // Add more validation rules for other fields as needed...

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission if there are errors
    }

    // Continue with your signup logic
    // ...
    const res=await axios.post("http://localhost:5000/signup",{name,age:getAge(age),email,phone,password,address_1:address,address_2:secondAddress,gender});
    console.log(res);

    // Clear form fields after successful submission (optional)
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setPassword2("");
    setAge("");
    setAddress("");
    setSecondAddress("");
    setErrors({});
    setGender("male");
  };
  
  return (
    <div className="login-container">
      <Navbar/>
      <div className="form2">
        <div className="text-center">
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
        </div>

        <div className="input-container ic1">
          <input
            placeholder=""
            type="text"
            className="input"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <div className="cut cut-short" />
          <label className="iLabel" htmlFor="name">
            Name
          </label>
        </div>

        <div className="input-container ic2">
          <input
            placeholder=""
            type="text"
            className="input"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
          <div className="cut cut-short" />
          <label className="iLabel" htmlFor="phone">
            Phone
          </label>
        </div>

        <div className="input-container ic2">
          <input
            placeholder=""
            type="text"
            className="input"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <div className="cut cut-short" />
          <label className="iLabel" htmlFor="email">
            Email
          </label>
        </div>

        <div className="d-flex">
          <div className="input-container ic2">
            <input
              placeholder=""
              type="password"
              className="input"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <div className="cut " />
            <label className="iLabel" htmlFor="password">
              Password
            </label>
          </div>

          <div className="input-container ic2 mx-2 doubled-input">
            <input
              placeholder=""
              type="password"
              className="input"
              id="password2"
              value={password2}
              onChange={handlePassword2Change}
            />
            {errors.password2 && (
              <div className="error">{errors.password2}</div>
            )}
            <div className="cut cut-long" />
            <label className="iLabel" htmlFor="password2">
              Confirm Password
            </label>
          </div>
        </div>

        <div className="input-container ic2">
          <input
            placeholder=""
            type="date"
            className="input"
            id="age"
            value={age}
            onChange={handleAgeChange}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>

        <div className="d-flex">
          <div className="input-container ic2">
            <input
              placeholder=""
              type="text"
              className="input"
              id="address"
              value={address}
              onChange={handleAddressChange}
            />
            {errors.address && <div className="error">{errors.address}</div>}
            <div className="cut cut-short" />
            <label className="iLabel" htmlFor="address">
              Address
            </label>
          </div>

          <div className="input-container ic2 mx-2 doubled-input">
            <input
              placeholder=""
              type="text"
              className="input"
              id="second-address"
              value={secondAddress}
              onChange={handleSecondAddressChange}
            />
            {errors.secondAddress && (
              <div className="error">{errors.secondAddress}</div>
            )}
            <div className="cut cut-long" />
            <label className="iLabel" htmlFor="second-address">
              Second Address
            </label>
          </div>
          <div className="input-container ic2">
            <select class="input" onChange={handleGenderChange}>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
          </div>
        </div>

        <button className="submit" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <Link to="/signin">signin</Link>
      </div>
    </div>
  );
}
