import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useGetFacesData } from "../../context/getFacesContext";

export const Sidebar = () => {
  const {showNav, setShowNav} = useGetFacesData();
  return (
      <Offcanvas show={showNav} onHide={()=> setShowNav(false)}>
        <Offcanvas.Header closeButton>
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <a href="/">
              <img src="images/logo.svg" alt="" />
            </a>
          </h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav">
            <li>
              <a href="#faq-area">FAQ </a>
            </li>
            <li>
              <a href="#exclude-area">Removal Request</a>
            </li>
            <li>
              <a href="/">Tips</a>
            </li>
            <li>
              <a href="/">Safety</a>
            </li>
            <li>
              <a href="#home">Face Search API</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
  );
};
