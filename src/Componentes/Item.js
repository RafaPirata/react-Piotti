import React from "react";
import "../Style/item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../Componentes/ItemCount";
import { Link } from "react-router-dom";

const onAdd = (a) => {
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
        <Link
          to={`/item/${info.id}`}
          className="nav-link active text-primary"
          aria-current="page"
        >
          Ficha Tecnica
        </Link>

        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        ></div>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>

    // <a href="" className="film">
    //   <img src={info.imagen} alt="" />
    //   <p>{info.marca} </p>
    //   <p>{info.precio} </p>
    //   <p>{info.anio} </p>
    // </a>
  );
};
export default Item;
