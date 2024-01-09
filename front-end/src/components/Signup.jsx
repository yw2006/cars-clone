import React from "react";
export default function Signup() {
  return (
    <div className="login-cont">
      <div className="form2">
        <div className="text-center">

        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        </div>
        <div className="input-container ic1">
          <input placeholder="" type="text" className="input" id="name" />
          <div className="cut" />
          <label className="iLabel" htmlFor="name">
            Name
          </label>
        </div>
        <div className="input-container ic2">
          <input placeholder="" type="text" className="input" id="phone" />
          <div className="cut" />
          <label className="iLabel" htmlFor="phone">
            phone
          </label>
        </div>
        <div className="input-container ic2">
          <input placeholder="" type="text" className="input" id="email" />
          <div className="cut cut-short" />
          <label className="iLabel" htmlFor="email">
            Email
          </label>
        </div>
        
        <button className="submit" type="text">
          submit
        </button>
      </div>
    </div>
  );
}
