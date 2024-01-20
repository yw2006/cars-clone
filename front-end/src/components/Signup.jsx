import React from "react";
export default function Signup() {
  return (
    <div className="login-container">
      <div className="form2">
        <div className="text-center">
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
        </div>
        <div className="input-container ic1">
          <input placeholder="" type="text" className="input" id="name"  />
          <div className="cut cut-short" />
          <label className="iLabel" htmlFor="name">
            Name
          </label>
        </div>
        <div className="input-container ic2">
          <input placeholder="" type="text" className="input" id="phone" />
          <div className="cut cut-short" />
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
        <div className="d-flex">
          <div className="input-container ic2">
            <input
              placeholder=""
              type="password"
              className="input"
              id="password"
            />
            <div className="cut " />
            <label className="iLabel" htmlFor="password">
              password
            </label>
          </div>
          <div className="input-container ic2 mx-2 doubled-input">
            <input
              placeholder=""
              type="password"
              className="input"
              id="password2"
            />
            <div className="cut cut-long" />
            <label className="iLabel" htmlFor="password2">
              confirm password
            </label>
          </div>
        </div>
        <div className="input-container ic2">
          <input placeholder="" type="date" className="input" id="age" />
          {/* <div className="cut cut-short" /> */}
        </div>
        <div className="d-flex">
          <div className="input-container ic2">
            <input placeholder="" type="text" className="input" id="address" />
            <div className="cut cut-short" />
            <label className="iLabel" htmlFor="addres">
              address
            </label>
          </div>
          <div className="input-container ic2 mx-2 doubled-input">
            <input
              placeholder=""
              type="text"
              className="input"
              id="second-address"
            />
            <div className="cut cut-long" />
            <label className="iLabel" htmlFor="second-address">
              second-address
            </label>
          </div>
        </div>

        <button className="submit" type="text">
          submit
        </button>
      </div>
    </div>
  );
}
