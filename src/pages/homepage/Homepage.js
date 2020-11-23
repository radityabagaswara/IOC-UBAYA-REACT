import React from "react";
import AboutComponent from "../about/AboutComponent";
import Aktivitas from "../aktivitas/Aktivitas";
import Booking from "../booking/Booking";
import Fasilitas from "../fasilitas/Fasilitas";
import Header from "../header/Header";
import "./Homepage.css";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <Header />
      <div style={{ marginTop: "100px" }}>
        <div className="content">
          <div className="container">
            <AboutComponent />
          </div>
        </div>

        <div className="content-2">
          <div className="container">
            <div className="content-header">
              <h3>Aktivitas</h3>
              <p>
                Consequat nostrud nostrud quis sunt eiusmod elit irure aliquip
                enim laboris est ad sunt mollit.
              </p>
            </div>
            <div className="mb-3">
              <Aktivitas limit={6} />
              <div className="text-right">
                <a href="#" style={{ textDecoration: "none" }}>
                  Lihat Semua
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="content-header">
              <h3>Fasilitas</h3>
              <p>
                Consequat nostrud nostrud quis sunt eiusmod elit irure aliquip
                enim laboris est ad sunt mollit.
              </p>
            </div>
            <div className="mb-3">
              <Fasilitas />
            </div>
          </div>
        </div>

        <div className="container box">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
