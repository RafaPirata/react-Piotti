import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/itemCart.css";

const ItemCart = ({ item }) => {
  const test = useContext(CartContext);
  return (
    <div className="">
      <button className="btn bg-danger mt-3 col-md-2" onClick={test.ClearCart}>
        Vaciar la compra
      </button>
      <div>
        <div className="card  mb-3 text-center FondoCart">
          <div className="card-body">
            <p className="card-title mb-2 fs-3 fw-bold">
              {test.calcItemsQty()} item
            </p>
            <p className="card-title mb-2">Total $ {test.totalPrecio()}</p>
            <p className="card-title mb-2 text-success">
              Descuento:10% ${test.totalDescuento()}
            </p>
            <button
              className="btn btn-success"
              onClick={() => test.removeProduct(item.id)}
            >
              Terminar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemCart;
