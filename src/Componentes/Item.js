import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ id, modelo, marca, precio, anio, imagen }) => {
  return (
    <div class="card   mb-3 text-center" style="width: 15rem;">
      <div class="card-body">
        <div class="card-title">{id}</div>
        <div class="card-img-top img-fluid">{imagen}</div>
        <div class="card-title">
          {marca} +{id}
        </div>
        <div class="card-subtitle mb-2 text-muted">{modelo}</div>
        <div class="card-text">{precio}</div>
        <div class="card-text">{anio}</div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        ></div>
      </div>
    </div>
  );
};

export default Item;
