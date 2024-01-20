import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./util/Footer";


function Search() {
  const [items, setItems] = useState([]);
  const { model, price } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/search/${model}/${price}`
      );
      setItems(response.data);
      //   console.log(response);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return(
        <div className="loader-cont">
            <p>please wait...</p>
            <div className="loader"></div>;
        </div>
    ) 
  }

  if (items.length === 0) {
    return <div className="not-found">Sorry, NO car matches this selection</div>;
  }
  return (
    <>
      <div className="card-details-main-search">
        <div className="container-fluid ">
          <nav className="navbar navbar-expand-lg navbar-dark text-white bg-traspert ">
            <div className="container-fluid ">
              <Link className="navbar-brand justify-content-start" to="/">
                cars
              </Link>
              <div className="">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse place " id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="#navbar">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                      </span>{" "}
                      sign in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                      </svg>
                      sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="card-details-content-search">
          <section className="container">
            <div className="row ">
              {items &&
                items.map((item) => {
                  return (
                    <div className="col-md-4  mb-5 mt-5 " key={item.car_id}>
                      <div
                        className="card mt-2 serach-card"
                        style={{
                          backgroundColor: "#040C2E",
                          color: "white",
                          borderRadius: "18px",
                          border: "none",
                        }}
                      >
                        <img
                          src={item.image}
                          className="card-img-top product--image "
                          style={{ borderRadius: "18px" }}
                          alt="..."
                        />

                        <div className="card-body">
                          <a className="card-title">{item.name}</a>
                          <p className="card-text">{item.description}</p>
                        </div>
                        <ul
                          className="list-group list-group-flush  "
                          style={{ backgroundColor: "#040C2E", color: "white" }}
                        >
                          <li
                            className="list-group-item  row-cols-3"
                            style={{
                              backgroundColor: "#040C2E",
                              color: "white",
                            }}
                          >
                            <svg
                              className="col"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-speedometer2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                              <path
                                fill-rule="evenodd"
                                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"
                              />
                            </svg>
                            <svg
                              className="col"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-fuel-pump"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z" />
                              <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z" />
                            </svg>
                            <svg
                              className="col"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-car-front-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                            </svg>
                          </li>
                        </ul>
                        <div className="card-body ">
                          <span className="m-2 button">{item.price}</span>

                          <a
                            href={`/details/${item.car_id}`}
                            className=" card-link btn "
                            style={{ color: "white" }}
                          >
                            view details{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-arrow-up-right"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Search;
