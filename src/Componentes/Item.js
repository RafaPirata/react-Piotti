import React from "react";
import "../Style/item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../Componentes/ItemCount";

const onAdd = (a) => {
  alert("Se agrego al carrito");
};

const Item = ({ info }) => {
  return (
    <div class="card   mb-3 text-center">
      <div class="card-body">
        <img src={info.imagen} class="card-img-top img-fluid" alt="" />
        <h2 class="card-title">{info.marca}</h2>
        <h5 class="card-subtitle mb-2 text-muted">{info.modelo}</h5>
        <h5 class="card-subtitle mb-2 text-muted">{info.anio}</h5>
        <p class="card-text">${info.precio}</p>
        <div
          class="btn-group"
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
