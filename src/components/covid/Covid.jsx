import React from "react";
import "./Covid.scss";
import { image9, image3 } from "../../assets";

const Covid = () => {
  return (
    <section className="covid">
      <div className="container covid-content">
        <div className="d1">
          <img src={image9} alt="" className="img9" />
        </div>
        <div className="d2">
          <p className="p1">Covid-19 sanitization</p>
          <p className="p2">
            We follow guidelines to keep you safe from the COVID-19 virus
          </p>
          <p className="p3">
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
          <div className="hero-btns">
            <div className="btn2">Get a free quote</div>
            <div className="btn3">
              <div className="d2">
                <img src={image3} alt="" />
                <div className="d3">
                  <p className="p4">Call us now</p>
                  <p className="p3">(414) 567 - 2109</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Covid;
