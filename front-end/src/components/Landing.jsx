import React from "react";
import LandingIM from "./util/images/landing.png";

function Landing() {
  return (
    <>
      <div className="container-fluid  mb-5">
        <div className="container-fluid bg-light pt-5">
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
                <select className="form-select" aria-placeholder="model">
                    <option value="used" className="">
                      0 : 100,000
                    </option>
                    <option value="used" className="">
                      100,000 : 250,000
                    </option>
                    <option value="used" className="">
                      250,000 : 500,000
                    </option>
                    <option value="used" className="">
                      500,000 : 750,000
                    </option>
                    <option value="used" className="">
                      750,000 : 1,500,000
                    </option>
                    <option value="used" className="">
                      1,500,000 : 3,000,000
                    </option>
                    <option value="used" className="">
                      3,000,000 : 10,000,000
                    </option>
                    <option value="used" className="">
                      10,000,000 : 20,000,000
                    </option>
                    
                    
                  </select>
                </div>
                <div className="col-md-3 search-btn">
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