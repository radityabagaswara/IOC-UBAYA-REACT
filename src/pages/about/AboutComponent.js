import React from "react";
import { Link } from "react-router-dom";
import Star from "../../images/BLACK-2.png";
import "./About.css";

const AboutComponent = (props) => {
  const button = () => {
    return (
      <Link className="btn btn-primary" to="/about">
        Selengkanya
      </Link>
    );
  };
  return (
    <div className="content-about">
      <div className="container">
        <div className="content-header">
          <h3>Apa itu IOC</h3>
          <p>Proident fugiat deserunt et irure est nulla quis laborum.</p>
        </div>
        <div className="row mt-5 align-items-top justify-content-center">
          <div
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center"
            style={{ margin: "0" }}
          >
            <img
              src="https://via.placeholder.com/400"
              alt="About"
              className="fluid"
              width="60%"
            />
          </div>
          <div className="col-md-7 col-lg-8 col-xl-8 text-justify">
            <p className="text-justify">
              Integrated Outdoor Campus(IOC) Universitas Surabaya terletak di di
              Kecamatan Trawas Mojokerto. Sebagai bagian yang tak terpisahkan
              dari IOC, secara khusus telah dibangun Ubaya Training Centre
              (UTC). UTC menyediakan berbagai akomodasi yang dibanguin di
              tengah-tengah alam dengan lingkungan yang sejuk untuk berbagai
              kebutuhan Anda.
              <div className="mt-3">{props.renderButton ? button() : ``}</div>
            </p>
          </div>
          <div className="row box-thumb">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 box-wrapper">
              <div className="box">
                <div className="thumb-wrap">
                  <img src={Star} className="fluid thumb" />
                  <h3>Interaction</h3>
                </div>
                <p>
                  Perubahan suasana yang menyenangkan dari kesibukan sehari-hari
                  Anda.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 box-wrapper">
              <div className="box">
                <div className="thumb-wrap">
                  <img src={Star} className="fluid thumb" />
                  <h3>Quality</h3>
                </div>
                <p>
                  Kenali alam lebih dalam dengan berjalan-jalan melalui kebun
                  dan koleksi tanaman kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
