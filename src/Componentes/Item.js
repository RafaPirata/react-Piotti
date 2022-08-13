import React from "react";
import "../Style/item.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="card   mb-3 text-center">
      <div className="card-body">
        <img src={info.imagen} className="card rounded img-fluid" alt="" />
        <h2 className="card-title">{info.marca}</h2>
        <h5 className="card-subtitle mb-2 text-muted">{info.modelo}</h5>
        <h5 className="card-subtitle mb-2 text-muted">{info.anio}</h5>
        <p className="card-text">${info.precio}</p>
        <button className="text-white btn btn-primary">
          <Link
            to={`/item/${info.id}`}
            className="text-white"
            aria-current="page"
          >
            Ficha Tecnica
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Item;
