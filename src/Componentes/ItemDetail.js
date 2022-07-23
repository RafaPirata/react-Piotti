import React, { useState } from "react";
import "../Style/ItemDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../Componentes/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ data = [] }) => {
  const [IrCart, setIrCart] = useState(false);

  const onAdd = (a) => {
    setIrCart(true);
  };
  return data.map((film) => <Item key={film.id} info={film} />);
  function Item({ info }) {
    return (
      <div className="card mb-3 card1">
        <div className="row g-0 row1">
          <div className="col-md-6">
            <img src={info.imagen} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{info.marca}</h5>
              <p className="text-primary">{info.detalle}</p>
              <p className="card-subtitle mb-2 text-muted">{info.anio}</p>
              <p className="card-text">{info.modelo}</p>
              <p className="card-text">${info.precio}</p>
              <div>
                {IrCart ? (
                  <Link to="/Cart">
                    <button className="btn btn-primary">
                      Terminar Mi Compra
                    </button>
                  </Link>
                ) : (
                  <ItemCount initial={1} stock={5} onAdd={onAdd} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ItemDetail;
