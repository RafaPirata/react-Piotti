import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../Style/Cart.css";
import {
  serverTimestamp,
  setDoc,
  doc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../data/LIstaEnFirebase";

const Cart = () => {
  const { removeProduct } = useContext(CartContext);
  const test = useContext(CartContext);

  const createOrder = () => {
    let itemsForDB = test.cartList.map((item) => ({
      id: item.id,
      marca: item.marca,
      modelo: item.modelo,
      costo: item.costo,
      qty: item.qty,
    }));
    let order = {
      buyer: {
        email: "rrcamel@hotmail.com",
        name: "Rafael Piotti",
        phone: "3513057343",
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: test.totalPrecio(),
    };
    console.log(order);
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInFirestore()
      .then((result) => alert("your order has been created. ID=" + result.id))
      .catch((e) => console.log(e));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.qty),
      });
    });

    test.removeList();
  };

  return (
    <div className="mt-3 d-flex justify-content-start">
      <div className="mt-3 d-flex justify-content-start">
        <Link to="/">
          <button className="btn btn-primary">Continuar de compra</button>
        </Link>
      </div>
      <div>
        <div>
          {test.cartList.length === 0 ? (
            <Link to="/">Carro vacio</Link>
          ) : (
            test.cartList.map((item) => (
              <div className="card mb-3 card1">
                <div className="row g-0 row1">
                  <div className="col-md-3">
                    <img
                      src={item.img}
                      className="img-fluid rounded-start"
                      alt=""
                    />
                    <h5 className="card-title">{item.marca}</h5>
                    <h5 className="card-title">{item.modelo}</h5>
                  </div>

                  <div className="col-md-3">
                    <div className="card-body text-end">
                      <p className="card-subtitle mb-2 text-muted">
                        {item.qty} item
                      </p>
                      <p className="card-subtitle mb-2 text-muted">
                        Precio Unidad: ${item.costo}
                      </p>
                      <p className="card-subtitle mb-2 text-muted">
                        SubTotal: ${item.costo * item.qty}
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => removeProduct(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          {test.cartList.length > 0 && (
            <div>
              <div className="">
                <button
                  className="btn bg-danger mt-3 col-md-2"
                  onClick={test.ClearCart}
                >
                  Vaciar la compra
                </button>
              </div>
              <div className="card  mb-3 text-center FondoCart">
                <div className="card-body">
                  <p className="card-title mb-2 fs-3 fw-bold">
                    {test.calcItemsQty()} item
                  </p>
                  <p className="card-title mb-2">
                    Total $ {test.totalPrecio()}
                  </p>
                  <p className="card-title mb-2 text-success">
                    Descuento:10% ${test.totalDescuento()}
                  </p>
                  <button className="btn btn-success" onClick={createOrder}>
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
