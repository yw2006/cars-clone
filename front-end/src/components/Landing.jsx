import {React, useState} from "react";
import LandingIM from "./util/images/landing.png";
import { Link } from "react-router-dom";
function Landing() {
  // const [selectedType, setSelectedType] = useState('new');
  const [selectedModel, setSelectedModel] = useState('sedan');
  const [selectedPrice, setSelectedPrice] = useState('100000');
  // const handleTypeChange = (event) => {
  //   setSelectedType(event.target.value);
  // };
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
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
                  <select className="form-select" data-placeholder="Used Cars" >
                    <option value="new" className="">
                      new
                    </option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-select" aria-placeholder="model" onChange={handleModelChange}>
                    <option value="sedan" className="">
                      sedan
                    </option>
                    <option value="Hatchback" className="">
                    Hatchback
                    </option>
                    <option value="SUV" className="">
                    SUV
                    </option>
                    
                  </select>
                </div>
                <div className="col-md-3  d-inline-flex">
                <select className="form-select" aria-placeholder="model" onChange={handlePriceChange}>
                    <option value="100000" className="">
                      100,000
                    </option>
                    <option value="250000" className="">
                      250,000
                    </option>
                    <option value="500000" className="">
                      500,000
                    </option>
                    <option value="750000" className="">
                      750,000
                    </option>
                    <option value="1500000" className="">
                      1,500,000
                    </option>
                    <option value="3000000" className="">
                      3,000,000
                    </option>
                    <option value="10000000" className="">
                      10,000,000
                    </option>
                    <option value="20000000" className="">
                      20,000,000
                    </option>
                    
                    
                  </select>
                </div>
                <div className="col-md-3 search-btn">
                  <Link className="btn btn-primary search-button" type="submit" to={`/search/${selectedModel}/${selectedPrice}`}>
                    Search
                  </Link>
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