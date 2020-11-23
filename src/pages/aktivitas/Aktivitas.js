import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Aktivitas.css";

const Aktivitas = (props) => {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setData([
      {
        id: 1,
        name: "lorem ipsum",
        description: `Consectetur culpa esse qui est laboris ex. Qui eu aliquip eu sunt exercitation nostrud amet sint qui. Irure esse ullamco nostrud cillum dolor nisi minim. Sit magna quis ut fugiat commodo laborum exercitation amet.
Nisi eiusmod est et nostrud. Irure voluptate dolore cillum nulla nulla ea fugiat tempor magna laborum nisi proident id. Quis culpa dolore in qui exercitation enim qui minim. Consectetur excepteur proident cillum veniam do ea excepteur enim sit do ad laborum. Fugiat ex non amet irure sint tempor proident excepteur Lorem voluptate dolor commodo est veniam.
Magna ipsum et consequat aliquip. In deserunt mollit deserunt non labore laborum consectetur elit nisi ullamco aliqua. Voluptate aliqua ex eiusmod sunt officia id deserunt irure sint eiusmod qui.`,
        thumbnail:
          "http://utc-operasional.ubaya.ac.id/dashboard/image/tenda.jpg",
      },
      {
        id: 2,
        name: "lorem ipsum",
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
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 star-block">
          <Link
            style={{ textDecoration: "none", color: "unset" }}
            to={`/stars/${data[i].name.replace(" ", "-")}`}
          >
            <div className="section-box-stars" onClick={() => {}}>
              <figure>
                <h3>{data[i].name}</h3>
                <p>Klik untuk menampilkan informasi</p>
              </figure>
              <img
                src={data[i].thumbnail}
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                }}
                className="fluid"
              />
            </div>
            <div className="name">
              <p>{data[i].name}</p>
            </div>
          </Link>
        </div>
      );

      if (i + (1 % 3) == 0) {
        rows.push(
          <div className="row justify-content-center align-items-center ">
            {cols}
          </div>
        );
        cols = [];
      } else if (i + 1 === data.length) {
        rows.push(
          <div className="row justify-content-center align-items-center ">
            {cols}
          </div>
        );
        cols = [];
      }
    }
    return rows;
  };

  if (!isLoaded) return <div></div>;

  return (
    <div>
      <div>{renderCom()}</div>
    </div>
  );
};

export default Aktivitas;
