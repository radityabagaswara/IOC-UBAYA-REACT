import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <section id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <p>
              &#169; Copyright {new Date().getFullYear()} Universitas Surabaya.
            </p>
          </div>

          <div className="col-md-6 right">
            <Link to="/terms">UBAYA</Link>
            <span>★</span>
            <Link to="/terms">Maharu</Link>
            <span>★</span>
            <Link to="/audition">Empty Slot</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
