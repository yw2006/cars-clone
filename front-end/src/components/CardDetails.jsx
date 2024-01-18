import React, { useEffect, useState } from "react";
// import { Modal } from "bootstrap";
import { useParams } from "react-router-dom";
import { stock } from "./products/data";
export default function CardDetails() {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const selectedItem = stock.find((item) => item.id === id);
    useEffect(() => {
        setDetails(selectedItem);
    }, [selectedItem]);
    if (!selectedItem) {
        return (
            <div className="not-found">
                <div>mfeesh id leeh ya a'laaaaa</div>
            </div>
        );
    }
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
                    <section className="container p-3">
                        {/* the path details */}
                        <div className="path-details pt-3">
                            <a href="#">Home</a>
                            <span> / </span>
                            <a href="#">Listing</a>
                            <span> / </span>
                            <span>{details.name}</span>
                        </div>
                        {/* ////////////////////// */}
                        {/* the part car info and socila links */}
                        <div className="d-flex pt-4 justify-content-between">
                            <div className="quick-info">
                                <h1>{details.name}</h1>
                                <p>{details.power}</p>
                                {/* button group */}
                                <div className="info-buttons">
                                    <button>2023</button>
                                    <button>{details.miles} miles</button>
                                    <button>{details.manual_auto}</button>
                                    <button>{details.oil}</button>
                                </div>
                            </div>
                            {/* the social links */}
                            <div className="social">
                                <a href={`/booknow/${details.id}`}><button type="button" class="buttons">
                                    <span className="button__text">Book Now</span>
                                    <span className="button__icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                            stroke="currentColor"
                                            height="24"
                                            fill="none"
                                            className="svg"
                                        >
                                            <line y2="19" y1="5" x2="12" x1="12"></line>
                                            <line y2="12" y1="12" x2="19" x1="5"></line>
                                        </svg>
                                    </span>
                                </button></a>
                                <h2 className="mt-3">{details.price}</h2>
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
                                                    <span aria-hidden="true" className="p-2 x">
                                                        x
                                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        width="16"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M481 31C445.1-4.8 386.9-4.8 351 31l-15 15L322.9 33C294.8 4.9 249.2 4.9 221.1 33L135 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L255 66.9c9.4-9.4 24.6-9.4 33.9 0L302.1 80 186.3 195.7 316.3 325.7 481 161c35.9-35.9 35.9-94.1 0-129.9zM293.7 348.3L163.7 218.3 99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9 .9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1l64.2-64.2z" />
                                    </svg>
                                    Make An Offer Price
                                </a>
                                {/* //////////////// */}
                            </div>
                        </div>
                        {/* /////////////// */}
                        <img
                            src={details.image}
                            className="card-details-image"
                            alt="sfmewf"
                        />
                    </section>
                    {/* //////end of the first part */}
                    {/* car overview start */}
                    <section className="container car-overview">
                        <h2 className="my-2">Car Overview</h2>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <table className="table table-borderless overview-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-car-front-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                                                </svg>
                                                {"  "}
                                                Body
                                            </td>
                                            <td>{details.category}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-radar"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6.634 1.135A7 7 0 0 1 15 8a.5.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1.005A5 5 0 1 1 13 8a.5.5 0 0 1-1 0 4 4 0 1 0-4.5 3.969v-1.011A2.999 2.999 0 1 1 11 8a.5.5 0 0 1-1 0 2 2 0 1 0-2.5 1.936v-1.07a1 1 0 1 1 1 0V15.5a.5.5 0 0 1-1 0v-.518a7 7 0 0 1-.866-13.847" />
                                                </svg>{" "}
                                                Mileage
                                            </td>
                                            <td>{details.miles}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-fuel-pump"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z" />
                                                </svg>{" "}
                                                Fuel Type
                                            </td>
                                            <td>{details.oil}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-calendar"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                </svg>{" "}
                                                Year
                                            </td>
                                            <td>unknown</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-sign-intersection-side-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM6.25 4h1.5v3.25H11v1.5H7.75V12h-1.5z" />
                                                </svg>{" "}
                                                Transmission
                                            </td>
                                            <td>{details.manual_auto}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-caret-right-square-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
                                                </svg>{" "}
                                                Drive Type
                                            </td>
                                            <td>{details.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <table className="table table-borderless overview-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-person"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                                </svg>{" "}
                                                Condition
                                            </td>
                                            <td>New</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-airplane-engines-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0" />
                                                </svg>{" "}
                                                Engine Size
                                            </td>
                                            <td>{details.price}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-door-open"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                                                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                                                </svg>{" "}
                                                Door
                                            </td>
                                            <td>unknown</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-escape"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02" />
                                                    <path d="M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732z" />
                                                </svg>{" "}
                                                Cylinder
                                            </td>
                                            <td>unknown</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-palette"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7" />
                                                </svg>{" "}
                                                Color
                                            </td>
                                            <td>unknown</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-sign-stop-lights-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                                    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM6 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
                                                </svg>{" "}
                                                VIN
                                            </td>
                                            <td>unknown</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />
                    </section>
                    {/* ////////////car overview end  */}
                    {/* description start */}
                    <section className="container desc">
                        <h2 className="my-2">Description</h2>
                        <p className="my-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                            quisquam id tempore dolore laboriosam tenetur, quibusdam hic
                            aspernatur cupiditate fugit minus voluptas animi. Eligendi
                            excepturi voluptatibus soluta, harum odit dolor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus dignissimos officia libero unde soluta necessitatibus
                            facere ea totam distinctio reiciendis nam reprehenderit vel cum
                            illum porro architecto, quam vitae! Ducimus. Lorem ipsum, dolor
                            sit amet consectetur adipisicing elit. Doloribus aperiam
                            laboriosam, accusantium dolore, nemo ipsa beatae quas earum minus
                            repudiandae cumque nulla? Dolor aliquid eaque impedit quo ea
                            quisquam totam!
                        </p>
                        <div className="desc-btns">
                            <button className="btn btn-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-filetype-pdf"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
                                    />
                                </svg>{" "}
                                Schedule-Test-Drive.Pdf
                            </button>
                            <button className="btn btn-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-filetype-pdf"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
                                    />
                                </svg>{" "}
                                Car-Brochure.Pdf
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
