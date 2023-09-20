import React from "react";
import "./Footer.scss";
import { image1, image14 } from "../../assets";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-top">
          <div className="d1">
            <p className="p1">Quality cleaning for your home</p>
            <p className="p2">
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <img src={image14} alt="" />
          </div>
          <div className="d2">
            <p className="p3">Contact us</p>
            <p className="p4">
              1827 Nickel Road, Los Angeles, CA, 90017, United States
            </p>
            <p className="p4">(414) 567 - 2109</p>
            <p className="p4">contact@cleaning.com</p>
          </div>
          <div className="d3">
            <p className="p5">Hours</p>
            <p className="p6">Monday to Friday</p>
            <p className="p7">6:00 AM - 9:00 PM</p>
            <p className="p6">Saturday & Sunday</p>
            <p className="p7">8:00 AM - 8:00 PM</p>
          </div>
          <div className="d4">
            <p className="p8">Get a free estimate</p>
            <p className="p9">(414) 567 - 2109</p>
            <p className="p10">
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <button className="btn10">Request a free quote</button>
          </div>
        </div>
        <span className="line2"></span>
        <div className="footer-bottom">
          <div className="d10">
            <img src={image1} alt="" />
          </div>
          <div className="d11">
            Copyright © Cleaning X | Designed by <a href="#">BRIX Templates</a>{" "}
            - Powered by <a href="#">Webflow</a> <a href="#">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
