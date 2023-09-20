import React from "react";
import "./Hero.scss";
import { image2, image3 } from "../../assets";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="d1">
          <p className="p1">Quality cleaning for your home</p>
          <p className="p2">
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
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
        <div className="d4">
          <img src={image2} alt="" className="img2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
