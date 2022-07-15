import React from "react";
import "../Style/item.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ info }) => {
  return (
    <a href="" className="film">
      <img src={info.imagen} alt="" />
      <p>{info.marca} </p>
      <p>{info.precio} </p>
      <p>{info.anio} </p>
    </a>
  );
};
export default Item;
