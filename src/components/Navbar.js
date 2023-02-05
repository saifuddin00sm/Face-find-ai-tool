import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetFacesData } from "../context/getFacesContext";

export const Navbar = () => {
  const { setShowNav } = useGetFacesData();
  const navigate = useNavigate();
  return (
    <header className="header-area">
      <div className="container">
        <div className="header-main">
          <nav className="navbar navbar-expand-lg">
            <span
              className="navbar-brand"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="images/logo.svg" alt="" />
            </span>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setShowNav(true)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li style={{ cursor: "pointer" }}>
                  <a href="#faq-area">
                    <span>FAQ </span>
                  </a>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a href="#exclude-area">
                    <span>Removal Request</span>
                  </a>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a href="#home">
                    <span>Search API</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
