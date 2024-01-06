import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
export default function CardDetails() {
  const [details, setDetails] = useState([]);
  const data = {
    carName: "New GLC – 2023",
    cardInfo: "4.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate",
    carPrice: "$95,000",
    year: "2023",
    miles: "50",
    transmissions: "automatic",
    petrol_gas: "petrol",
  };
  useEffect(() => {
    setDetails(data);
  }, []);

  return (
    <>
      <div className="card-details-main">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="card-details-content">
          <div className="container p-3">
            {/* the path details */}
            <div className="path-details pt-3">
              <a href="#">Home</a>
              <span> / </span>
              <a href="#">Listing</a>
              <span> / </span>
              <span>{details.carName}</span>
            </div>
            {/* ////////////////////// */}
            {/* the part car info and socila links */}
            <div className="d-flex pt-4 justify-content-between">
              <div className="quick-info">
                <h1>{details.carName}</h1>
                <p>{details.cardInfo}</p>
                {/* button group */}
                <div className="info-buttons">
                  <button>{details.year}</button>
                  <button>{details.miles} miles</button>
                  <button>{details.transmissions}</button>
                  <button>{details.petrol_gas}</button>
                </div>
              </div>
              {/* the social links */}
              <div className="social">
                <button className="btn-cssbuttons">
                  <span>social</span>
                  <span>
                    <svg
                      height={18}
                      width={18}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 1024 1024"
                      className="icon"
                    >
                      <path
                        fill="#ffffff"
                        d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
                      />
                    </svg>
                  </span>
                  <ul>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={16}
                          width={16}
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#ffff"
                            d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={16}
                          width={12}
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="#ffff"
                            d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={16}
                          width={16}
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#ffff"
                            d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </button>
                <h2 className="mt-3">{details.carPrice}</h2>
                {/* modl window */}
                <div
                  className="modal"
                  id="carModal"
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">offer price</h5>
                        <button
                          type="button"
                          className="close modal-closer"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true" className="p-2 x">x</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputPhone">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPhone"
                              placeholder="Enter your phone number"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputTradePrice">Trade Price</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputTradePrice"
                              placeholder="Enter trade price"
                            />
                          </div>
                        </form>
                      </div>

                      <div className="modal-footer">
                        
                        <div className="col text-center">
                          {" "}
                          {/* Added a Bootstrap grid column */}
                          <button
                            type="button"
                            className="btn btn-primary btn-lg w-100"
                          >
                            Send Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="# "
                  data-toggle="modal"
                  data-target="#carModal"
                  className="modal-opener"
                >
                  Make An Offer Price
                </a>
                {/* //////////////// */}
              </div>
            </div>
            {/* /////////////// */}
          </div>
        </div>
      </div>
    </>
  );
}
