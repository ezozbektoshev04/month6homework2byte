import React from "react";
import "./Articles.scss";
import { image12, image13 } from "../../assets";

const Articles = () => {
  return (
    <section className="articles">
      <div className="articles-content container">
        <div className="d1">
          <p className="p1">Articles & resources</p>
          <div className="article-btns">
            <button className="btn6">Get a free quote</button>

            <button className="btn6">Browse articles</button>
          </div>
        </div>
        <div className="articles-cards">
          <div className="articles-card">
            <div className="article-img">
              <img src={image12} alt="" />
              <div className="card-content">
                <p className="p2">
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </p>
                <p className="p3">
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="d10">
                  <p className="p4">Jan 28, 2022</p>
                  <div className="d11"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="articles-card">
            <div className="article-img">
              <img src={image13} alt="" />
              <div className="card-content">
                <p className="p2">
                  How to properly disinfect your phone and other electronics
                </p>
                <p className="p3">
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="d10">
                  <p className="p4">Feb 1, 2022</p>
                  <div className="d11"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
