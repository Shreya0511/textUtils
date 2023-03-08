import React from "react";
import propTypes from "prop-types";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Navbar(props) {
  return (
    // <nav className ="navbar navbar-expand-lg bg-body-tertiary">
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            {/* <li className ="nav-item dropdown">
                <a className ="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className ="dropdown-menu">
                  <li><a className ="dropdown-item" href="#">Action</a></li>
                  <li><a className ="dropdown-item" href="#">Another action</a></li>
                  <li><hr className ="dropdown-divider"/></li>
                  <li><a className ="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            {/* <li className ="nav-item">
                <a className ="nav-link disabled">Disabled</a>
              </li> */}
          </ul>
          {/* <form className ="d-flex" role="search">
              <input className ="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className ="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
                height="30px"
                widht="30px"
              ></img>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string,
};
//propTypes basically specify about the type or data type of the prop passed.
Navbar.defaultProps = {
  title: "textutils",
};

export default Navbar;
