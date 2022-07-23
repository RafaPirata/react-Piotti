import React from "react";
import "../Style/item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../Componentes/ItemCount";
import { Link } from "react-router-dom";

const onAdd = (e) => {
  e.stopPropagation();
  alert("Se agrego al carrito");
};

const Item = ({ info }) => {
  return (
    <div className="card   mb-3 text-center">
      <div className="card-body">
        <img src={info.imagen} className="card-img-top img-fluid" alt="" />
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

        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        ></div>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
};
export default Item;
