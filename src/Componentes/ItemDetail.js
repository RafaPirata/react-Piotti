import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import "../Style/ItemDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../Componentes/ItemCount";
import { Link } from "react-router-dom";

function Item({ item }) {
  const test = useContext(CartContext);
  const [IrCart, setIrCart] = useState(0);
  const onAdd = (qty) => {
    setIrCart(qty);
    test.addToCart(item, qty);
  };
  return (
    <div className="card mb-3 card1">
      <div className="row g-0 row1">
        <div className="col-md-6">
          <img src={item.imagen} className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{item.marca}</h5>
            <p className="text-primary">{item.detalle}</p>
            <p className="card-subtitle mb-2 text-muted">{item.anio}</p>
            <p className="card-text">{item.modelo}</p>
            <p className="card-text">${item.precio}</p>
            <div>
              {IrCart === 0 ? (
                <ItemCount stock={item.stock} initial={IrCart} onAdd={onAdd} />
              ) : (
                <Link to="/Cart">
                  <button className="btn btn-primary">
                    Terminar Mi Compra
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const ItemDetail = ({ data = [] }) => {
  return data.map((film) => <Item key={film.id} item={film} />);
};

export default ItemDetail;
