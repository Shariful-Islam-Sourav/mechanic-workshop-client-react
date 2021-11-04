import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Morshed's Workshop
        </a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-a" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-a">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-a">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-a">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addService" className="nav-a">
                AddService
              </Link>
            </li>
          </ul>
        </div>
        <p>Signed in as, </p>
        <p>Mark Otta</p>
      </div>
    </nav>
  );
};

export default Header;
