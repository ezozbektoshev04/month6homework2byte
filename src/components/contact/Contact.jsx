import React from "react";
import "./Contact.scss";
import { image3 } from "../../assets";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content container">
        <div className="d1">
          <p className="p1">Contact Us</p>
          <p className="p2">
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <div className="d2">
            <img src={image3} alt="" />
            <div className="d3">
              <p className="p3">Call us now</p>
              <p className="p4">(414) 567 - 2109</p>
            </div>
          </div>
          <span className="line"></span>
          <p className="p5">Not convinced yet?</p>
          <p className="p6">
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </p>
          <div className="btn7">Browse our packages</div>
        </div>
        <div className="d10">
          <form>
            <div className="fieldTwo">
              <div className="field1">
                <label htmlFor="name">Full name</label>
                <input type="text" className="input1" name="name" id="name" />
              </div>
              <div className="field1">
                <label htmlFor="number">Phone number</label>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  className="input1"
                />
              </div>
            </div>
            <div className="fieldTwo">
              <div className="field1">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="input1"
                  name="address"
                  id="address"
                />
              </div>
              <div className="field1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input1"
                />
              </div>
            </div>
            <div className="fieldTwo">
              <div className="field1">
                <label htmlFor="service">Requested service</label>
                <input
                  type="text"
                  className="input1"
                  name="service"
                  id="service"
                />
              </div>
              <div className="field1">
                <label htmlFor="date">Day of service</label>
                <input type="date" name="date" id="date" className="input1" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="note">Take a note</label>
              <textarea name="note" id="note"></textarea>
            </div>
            <button type="submit" className="btn8">
              Submit message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
