import React from "react";
import "./About.scss";
import { image4, image5, image7 } from "../../assets";

const About = () => {
  return (
    <section className="about">
      <div className="container about-content">
        <div className="d1">
          <p className="p1">About Us</p>
          <p className="p2">
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <img src={image4} alt="" />
            <p className="p3">1. Schedule online</p>
            <p className="p4">
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
          <div className="about-card">
            <img src={image5} alt="" />
            <p className="p3">2. Pay online easily</p>
            <p className="p4">
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </p>
          </div>
          <div className="about-card">
            <img src={image7} alt="" />
            <p className="p3">3. Get your house cleaned</p>
            <p className="p4">
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>
        <div className="about-btns">
          <a href="#">
            <button className="btn4">Get a free quote</button>
          </a>
          <a href="#">
            <button className="btn4">Explore services</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
