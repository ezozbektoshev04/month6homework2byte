import React from "react";
import "./Services.scss";
import { image8, image10, image11 } from "../../assets";

const Services = () => {
  return (
    <section className="services">
      <div className="container services-content">
        <div className="d1">
          <div className="d2">
            <p className="p1">Our Services</p>
          </div>
          <a href="#">
            <button className="btn5">Explore services</button>
          </a>
        </div>
        <div className="services-cards">
          <div className="services-card">
            <img src={image8} alt="" />
            <p className="p2">House cleaning</p>
            <p className="p3">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="services-card" id="id1">
            <img src={image10} alt="" />
            <p className="p2">Office cleaning</p>
            <p className="p3">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="services-card">
            <img src={image11} alt="" />
            <p className="p2">Industrial cleaning</p>
            <p className="p3">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
