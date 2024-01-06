import React from "react";
import LandingIM from "./util/images/landing.png";

function Landing(){
return (
  <>
    <div
      className="container-fluid"
      data-id="1c909e2"
      data-element_type="widget"
      data-settings='{"_animation":"slide-up","_animation_delay":400}'
      data-widget_type="image.default"
    >
      <div className="container-fluid bg-light">
        <p className="text-secondary text-center pt-5">find cars for sale</p>
        <p className="h1 text-center">find your dream car</p>
        <div className="container rounded-5 w-75 justify-content-center">
          <form className="">
            <div className="form-control row d-inline-flex">
              <div className="col-md-3">
                <select className="form-select" data-placeholder="Used Cars">
                  <option value="used" className="">
                    used
                  </option>
                  <option value="used" className="">
                    new
                  </option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select" aria-placeholder="model">
                  <option value="used" className="">
                    Bentley
                  </option>
                  <option value="used" className="">
                    BMW
                  </option>
                  <option value="used" className="">
                    mercedes
                  </option>
                  <option value="used" className="">
                    porshe
                  </option>
                  <option value="used" className="">
                    mclaren
                  </option>
                  <option value="used" className="">
                    lamborghini
                  </option>
                  <option value="used" className="">
                    audi
                  </option>
                  <option value="used" className="">
                    ferrari
                  </option>
                  <option value="used" className="">
                    hyundai
                  </option>
                  <option value="used" className="">
                    kia
                  </option>
                  <option value="used" className="">
                    daihatsu
                  </option>
                  <option value="used" className="">
                    lotus
                  </option>
                  <option value="used" className="">
                    ford
                  </option>
                </select>
              </div>
              <div className="col-md-3  d-inline-flex">
                <p className="m-2">1000$</p>
                <input type="range" name="" id="" className="m-2 " />
                <p className="m-2">100000$</p>
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary search-button" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <img src={LandingIM} className="w-75" style={{ marginLeft: "12%" }} />
      </div>
    </div>
  </>
);
}
export default Landing;