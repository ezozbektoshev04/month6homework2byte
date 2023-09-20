import React, { Component } from "react";
import { image1 } from "../../assets";
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <div className="nav-left">
              <div className="logo">
                <a href="#" className="logo-img">
                  <img src={image1} alt="" />
                </a>
              </div>
              <div className="nav-links">
                <a href="#" className="nav-link">
                  Home
                </a>
                <a href="#" className="nav-link">
                  About
                </a>
                <a href="#" className="nav-link">
                  Services
                </a>
                <a href="#" className="nav-link">
                  Articles
                </a>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </div>
            </div>
            <div className="nav-btns">
              <p className="p1">Cart (0)</p>
              <div className="nav-btn">
                <button className="btn1">Get a free quote</button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
