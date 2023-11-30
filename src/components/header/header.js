/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/gen-code-logo.png';

const Header = () => {
  useEffect(() => {
    // JavaScript to activate the navbar burger
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }, []);

  return (
    <nav className="navbar has-background-info-light has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} style={{ height: "50px", marginLeft: "20px", marginTop: "4px" }} alt="SAP Gen-Code" />
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/tools" className="navbar-item">
            Tools
          </Link>
          <Link to="/faq" className="navbar-item">
            FAQ
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/about" className="button is-primary">
                <strong>About Us</strong>
              </Link>
              <Link to="/contact-us" className="button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;