import { map } from "jquery";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Fasilitas.css";

const Fasilitas = (props) => {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setData([
      {
        id: 1,
        name: "lorem ipsum",
        short_desc:
          "Minim aliquip dolore aliquip proident aliqua culpa duis occaecat tempor quis.",
        description: `Consectetur culpa esse qui est laboris ex. Qui eu aliquip eu sunt exercitation nostrud amet sint qui. Irure esse ullamco nostrud cillum dolor nisi minim. Sit magna quis ut fugiat commodo laborum exercitation amet.
Nisi eiusmod est et nostrud. Irure voluptate dolore cillum nulla nulla ea fugiat tempor magna laborum nisi proident id. Quis culpa dolore in qui exercitation enim qui minim. Consectetur excepteur proident cillum veniam do ea excepteur enim sit do ad laborum. Fugiat ex non amet irure sint tempor proident excepteur Lorem voluptate dolor commodo est veniam.
Magna ipsum et consequat aliquip. In deserunt mollit deserunt non labore laborum consectetur elit nisi ullamco aliqua. Voluptate aliqua ex eiusmod sunt officia id deserunt irure sint eiusmod qui.`,
        thumbnail:
          "http://utc-operasional.ubaya.ac.id/dashboard/image/tenda.jpg",
      },
      {
        id: 2,
        name: "lorem ipsum",
        short_desc:
          "Minim aliquip dolore aliquip proident aliqua culpa duis occaecat tempor quis.",
        description: `Consectetur culpa esse qui est laboris ex. Qui eu aliquip eu sunt exercitation nostrud amet sint qui. Irure esse ullamco nostrud cillum dolor nisi minim. Sit magna quis ut fugiat commodo laborum exercitation amet.
Nisi eiusmod est et nostrud. Irure voluptate dolore cillum nulla nulla ea fugiat tempor magna laborum nisi proident id. Quis culpa dolore in qui exercitation enim qui minim. Consectetur excepteur proident cillum veniam do ea excepteur enim sit do ad laborum. Fugiat ex non amet irure sint tempor proident excepteur Lorem voluptate dolor commodo est veniam.
Magna ipsum et consequat aliquip. In deserunt mollit deserunt non labore laborum consectetur elit nisi ullamco aliqua. Voluptate aliqua ex eiusmod sunt officia id deserunt irure sint eiusmod qui.`,
        thumbnail:
          "http://utc-operasional.ubaya.ac.id/dashboard/image/tenda.jpg",
      },
      {
        id: 3,
        name: "lorem ipsum",
        short_desc:
          "Minim aliquip dolore aliquip proident aliqua culpa duis occaecat tempor quis.",
        description: `Consectetur culpa esse qui est laboris ex. Qui eu aliquip eu sunt exercitation nostrud amet sint qui. Irure esse ullamco nostrud cillum dolor nisi minim. Sit magna quis ut fugiat commodo laborum exercitation amet.
Nisi eiusmod est et nostrud. Irure voluptate dolore cillum nulla nulla ea fugiat tempor magna laborum nisi proident id. Quis culpa dolore in qui exercitation enim qui minim. Consectetur excepteur proident cillum veniam do ea excepteur enim sit do ad laborum. Fugiat ex non amet irure sint tempor proident excepteur Lorem voluptate dolor commodo est veniam.
Magna ipsum et consequat aliquip. In deserunt mollit deserunt non labore laborum consectetur elit nisi ullamco aliqua. Voluptate aliqua ex eiusmod sunt officia id deserunt irure sint eiusmod qui.`,
        thumbnail:
          "http://utc-operasional.ubaya.ac.id/dashboard/image/tenda.jpg",
      },
    ]);
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const renderCom = () => {
    let cols = [];
    let rows = [];
    let limit = 0;
    if (!props.limit) {
      limit = data.length;
    } else {
      limit = props.limit;
    }

    if (props.limit > data.length) limit = data.length;

    for (let i = 0; i < limit; i++) {
      cols.push(
        <Carousel.Item style={{ background: "rgba(0,0,0, 1)" }}>
          <img
            className="d-block w-100"
            src={data[i].thumbnail}
            alt={data[i].name}
            style={{
              width: "400px",
              height: "400px",
              objectFit: "cover",
              opacity: "0.8",
            }}
          />

          <Carousel.Caption>
            <h3
              style={{
                textShadow: "2px 2px 15px #000",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              {data[i].name}
            </h3>
            <p
              style={{
                textShadow: "2px 2px 20px #000",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {data[i].short_desc.substr(0, 512)}...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }
    return cols;
  };

  if (!isLoaded) return <div></div>;

  return (
    <div className="fasilitas container">
      <div style={{ height: "400px" }}>
        <Carousel>{renderCom()}</Carousel>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 col-md-6">
          <h5>lorem ipsum</h5>
          <p>
            Adipisicing occaecat nisi nisi elit elit sit proident exercitation
            velit minim anim do qui.
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5>lorem ipsum</h5>
          <p>
            Aliquip laboris nisi nulla sint eu aliquip non et adipisicing Lorem
            aliquip esse.
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5>lorem ipsum</h5>
          <p>
            Aliquip fugiat excepteur exercitation cupidatat nulla cillum minim
            sint.
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5>lorem ipsum</h5>
          <p>
            Adipisicing occaecat nisi nisi elit elit sit proident exercitation
            velit minim anim do qui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fasilitas;
