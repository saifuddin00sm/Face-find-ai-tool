import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-main">
          <div className="footer-logo text-center">
            <a href="/">
              <img src="images/footer-logo.svg" alt="" />
            </a>
          </div>
          <div className="footer-menu text-center">
            <ul>
              <li>
                <a href="#faq-area">FAQ</a>
              </li>
              <li>
                <a href="#exclude-area">Removal Request </a>
              </li>
              <li>
                <a href="#home">Face Search API</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-part">
          <div className="copyright-left">
            <p>&copy; 2023 FaceFind. All Rights Reserved</p>
          </div>
          <div className="copyright-right">
            <ul>
              <li>
                <a href="privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="terms-of-service">Terms of use</a>
              </li>
            </ul>
            <ul className="social-icon">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
