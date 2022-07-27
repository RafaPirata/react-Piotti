import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";
import "../Style/Cart.css";

const Cart = () => {
  const test = useContext(CartContext);

  console.log(test.cartList);
  if (test.cartList.length === 0) {
    return (
      <>
        <p>No hay elementos </p>
        <Link to="/">
          <button className="btn btn-primary">Comprar ??</button>
        </Link>
      </>
    );
  }
  return (
    <>
      <ItemCart test={test} />

      {test.cartList.map((item) => (
        <div className="card mb-3 card1">
          <div className="row g-0 row1">
            <div className="col-md-3">
              <img src={item.img} className="img-fluid rounded-start" alt="" />
              <h5 className="card-title">{item.marca}</h5>
              <h5 className="card-title">{item.modelo}</h5>
            </div>

            <div className="col-md-3">
              <div className="card-body text-end">
                <p className="card-subtitle mb-2 text-muted">{item.qty} item</p>
                <p className="card-subtitle mb-2 text-muted">
                  Precio Unidad: ${item.costo}
                </p>
                <p className="card-subtitle mb-2 text-muted">
                  SubTotal: ${item.costo * item.qty}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => test.removeProduct(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
