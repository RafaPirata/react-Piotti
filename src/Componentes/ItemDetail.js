import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import "../Style/ItemDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../Componentes/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ data }) {
  const test = useContext(CartContext);
  const [IrCart, setIrCart] = useState(0);
  const onAdd = (qty) => {
    setIrCart(qty);
    test.addToCart(data, qty);
  };
  return (
    <>
      <div className="card mb-3 card1">
        <div className="row g-0 row1">
          <div className="col-md-6">
            <img src={data.imagen} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                {data.marca} : {data.modelo}
              </h5>
              <p className="text-primary">Ficha tecnica: {data.detalle}</p>
              <p className="card-subtitle mb-2 text-muted">Año: {data.anio}</p>
              <p className="card-text">Precio: ${data.precio}</p>
              <p className="card-text">stock: {data.stock}</p>
              <div>
                {IrCart === 0 ? (
                  <ItemCount
                    stock={data.stock}
                    initial={IrCart}
                    onAdd={onAdd}
                  />
                ) : (
                  <Link to="/Cart">
                    <button className="btn btn-primary">
                      Agregar a su compra
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
