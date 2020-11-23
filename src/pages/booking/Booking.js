import React, { useState } from "react";
import "./Booking.css";
import Swal from "sweetalert2";
const Booking = (props) => {
  const [pax, setPax] = useState(1);

  return (
    <div className="booking">
      <div className="container">
        <div className="text-center">
          <h5 style={{ textTransform: "none" }}>Tunggu apa lagi?</h5>
          <h3>Booking Sekarang!</h3>
          <p>
            Cukup isi kolom di bawah ini, dan pilih ruangan yang Anda inginkan
            melalui sistem booking online kami.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="form-group m-2">
            <label for="exampleInputEmail1">Full Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Sasila Vikan"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group m-2">
            <label for="inputState">Tipe</label>
            <select id="inputState" class="form-control">
              <option selected>Dorm</option>
              <option>Villa</option>
              <option>Ruang Meeting</option>
              <option>Area Outbound</option>
              <option>VIP</option>
            </select>
          </div>
          <div class="form-group m-2">
            <label for="inputTamu">Jumlah Tamu</label>
            <input
              id="inputTamu"
              type="number"
              min="1"
              value={pax}
              className="form-control"
              onChange={(e) => {
                setPax(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group m-2">
            <label for="inputDateCheckIn">Tanggal Check-In</label>
            <input
              id="inputDateCheckIn"
              type="datetime-local"
              className="form-control"
            />
          </div>
          <div class="form-group m-2">
            <label for="inputDateCheckOut">Tanggal Check-Out</label>
            <input
              id="inputDateCheckOut"
              type="datetime-local"
              className="form-control"
            />
          </div>
          <div class="form-group m-2">
            <label for="inputDateCheckOut">Email</label>
            <input
              id="inputDateCheckOut"
              type="email"
              placeholder="sasilavika@gmail.com"
              className="form-control"
            />
          </div>
        </div>
        <div className="m-3 row form-sedia justify-content-center">
          <div className="col-md-4 box">
            <p>Ketersediaan Ruangan</p>
            <h5>
              <strong>5</strong>
              <span>
                <small> Tersedia</small>
              </span>
            </h5>
          </div>
          <div className="col-md-4 box">
            <p>Perkiraan Harga</p>
            <h5>
              <strong>IDR {(pax * 14000).toLocaleString()}</strong>
            </h5>
          </div>
        </div>
        <div className="row m-3 justify-content-center">
          <div className="col-md-12 text-center">
            <button
              className="btn btn-primary mt-2"
              onClick={() => {
                Swal.fire({
                  icon: "success",
                  title: "Cek Email!",
                  text:
                    "Kami telah mengirimkan email untuk melanjutkan booking!",
                  footer: "<a href>Klik disini untuk meminta bantuan.</a>",
                });
              }}
            >
              Book Sekarang!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
